import boto3
import botocore
import psycopg2
import os
import json
import db_config

dbname = db_config.db_name
user = db_config.db_username
host = db_config.db_endpoint
password = db_config.db_password
schema = os.environ['targetSchema']
table = os.environ['targetTable']

connection_string = "dbname='{}' user='{}' host='{}' password='{}'"\
    .format(dbname, user, host, password)

client = boto3.client('s3', 'ap-southeast-2', \
config=botocore.config.Config(s3={'addression_style':'path'}))

# check
print(dbname, user, host, password, schema, table, connection_string)

def pg_load(connection_string, table_name, file_path):
    try:
        conn = psycopg2.connect(connection_string)
        print("Connecting to Database")
        cur = conn.cursor()
        # Open the input file for copy
        f = open(file_path, "r")
        # Load csv file into the table
        cur.copy_expert("copy {} FROM STDIN WITH CSV quote e'\x01' delimiter e'\x02'".format(table_name), f)
        cur.execute("commit;")
        print("Loaded data into {}".format(table_name))
        conn.close()
        print("DB connection closed.")

    except Exception as e:
        print('Error {}'.format(str(e)))

def transform_json(input_path, output_path):
    # Open the input file and load as json
    input = open(input_path, 'r')
    json_file = json.load(input)
    # Open the output file and create csv file for db upload
    output = open(output_path, 'w')
    for record in json_file:
        line = str(record).replace("'", '"')\
        .replace("None", "null").replace("True","true")
        output.write(line + '\n')
    output.close()
    print('Transformed {} to {}'.format(input_path, output_path))

def handler(event, context):
    # Get the info from the S3 Put event
    for record in event['Records']:
        bucket_name = record['s3']['bucket']['name']
        key = record['s3']['object']['key']
        local_path = '/tmp/' + key.split('/')[-1]
        # Download file from S3
        client.download_file(bucket_name, key, local_path)
        print("Downloaded s3 file, {}, to {}".format(key, local_path))
        # Transform the file
        output_path = '/tmp/output.csv'
        transform_json(local_path, output_path)
        # Load csv to Postgres
        pg_load(connection_string, schema+'.'+table, output_path)

import pyodbc
import sys
import pandas as pd 

def table_to_csv(sql, file_path, dsn, uid, pwd):
    '''
    This function creates csv file from the query result with ODBC driver
    '''
    try:
        cnxn = pyodbc.connect('DSN={};UID={};PWD={}'\
        .format(dsn, uid, pwd), autocommit=True)
        print('Connected to {}'.format(dns))
        # Get data into pandas dataframe
        df = pd.read_sql(sql, cnxn)
        # Write to csv file
        df.to_csv(file_path, encoding='utf-8', header = True,\
         doublequote = True, sep=',', index=False)
        print("CSV File has been created")
        cnxn.close()

    except Exception as e:
        print("Error: {}".format(str(e)))
        sys.exit(1)

def load_csv(load_sql, dns, uid, pwd):
    '''
    This function will load table from csv file according to
    the load SQL statement through ODBC
    '''
    try:
        cnxn = pyodbc.connect('DSN={};UID={};PWD={}'\
        .format(dns, uid, pwd), autocommit=True, local_infile=1)
        print('Connected to {}'.format(dns))
        cursor = cnxn.cursor()
        # Execute SQL Load Statement
        cursor.execute(load_sql)
        print('Loading table completed successfully.')
        cnxn.close()

    except Exception as e:
        print("Error: {}".format(str(e)))
        sys.exit(1)

# Exporting table to csv
sql = 'Select * From world.city'
file_path = '/tmp/city.csv'
dsn = 'MySQL_ODBC'
uid = 'writer'
pwd = 'Password1'
table_to_csv(sql, file_path, dsn, uid, pwd)

# Loading MySQL table from csv
load_sql = "LOAD DATA LOCAL INFILE '/tmp/city.csv' INTO TABLE usermanaged.city\
 FIELDS TERMINATED BY ',' ENCLOSED BY '\"' IGNORE 1 LINES;"
load_csv(load_sql, dns, uid, pwd)

# Loading Postgres from csv. With Copy Command Doublequote is the default.
# Copy Command Reference: https://www.postgresql.org/docs/10/static/sql-copy.html
load_sql = "COPY usermanaged.city FROM '/tmp/city.csv' CSV HEADER"
dns = 'PG_ODBC'
uid = 'postgres'
pwd = 'Password1'
load_csv(load_sql, dns, uid, pwd)

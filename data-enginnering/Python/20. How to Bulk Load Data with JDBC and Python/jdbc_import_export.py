# For python 3, install the package with pip install JayDeBeApi3

import jaydebeapi as jdbc
import pandas as pd 
import sys

def table_to_csv(sql, file_path, jdbc_class,\
                         jdbc_path, url, user, pw):
    '''This function create a csv file from sql 
    with the specified JDBC driver.'''
    try:
        conn = jdbc.connect(jdbc_class, 
                                [url, user, pw],
                                jdbc_path)
        print('Connecting to {}'.format(url))
        # Get data into pandas dataframe
        df = pd.read_sql(sql, conn)
        # Write to csv file
        df.to_csv(file_path, encoding='utf-8', header = True,\
         doublequote = True, sep=',', index=False)
        print("CSV File has been created")
        conn.close()

    except Exception as e:
        print("Error: {}".format(str(e)))
        sys.exit(1)

def load_csv(load_sql, jdbc_class, jdbc_path,\
                                     url, user, pw):
    '''This function upload csv into a table 
    with the specified JDBC driver.'''
    try:
        conn = jdbc.connect(jdbc_class, 
                                [url, user, pw],
                                jdbc_path)
        print('Connecting to {}'.format(url))
        # Create cursor and execute sql
        cur = conn.cursor()
        conn.jconn.setAutoCommit(True)
        cur.execute(load_sql)
        print('Successfully executed {}'.format(load_sql))
        conn.close()

    except Exception as e:
        print("Error: {}".format(str(e)))
        sys.exit(1)
    


# Create CSV file from MySQL Table
sql = 'Select * From world.city'
file_path = '/tmp/city.csv'
mysql_class = 'com.mysql.jdbc.Driver'
mysql_jdbc_path = '/tmp/mysql-connector-java-5.1.46.jar'
mysql_url = 'jdbc:mysql://localhost:3306/world'
mysql_user = 'writer'
mysql_pw = 'Password1'

table_to_csv(sql, file_path, mysql_class, mysql_jdbc_path,\
 mysql_url, mysql_user, mysql_pw)

# Load CSV file to MySQL Table
load_sql = "LOAD DATA LOCAL INFILE '/tmp/city.csv' INTO TABLE usermanaged.city\
 FIELDS TERMINATED BY ',' ENCLOSED BY '\"' IGNORE 1 LINES;"

load_csv(load_sql, mysql_class, mysql_jdbc_path,\
 mysql_url, mysql_user, mysql_pw)


# Load CSV file to Postgres Table
pg_class = 'org.postgresql.Driver'
pg_jdbc_path = '/tmp/postgresql-42.2.2.jar'
pg_url = 'jdbc:postgresql://localhost:5432/mydatahack'
pg_user = 'postgres'
pg_pw = 'Password1'
load_sql = "COPY usermanaged.city FROM '/tmp/city.csv' CSV HEADER"
load_csv(load_sql, pg_class, pg_jdbc_path,\
 pg_url, pg_user, pg_pw)

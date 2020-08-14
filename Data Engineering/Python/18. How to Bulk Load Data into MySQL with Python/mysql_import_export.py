import pymysql
import pandas as pd
import sys 

def mysql_to_csv(sql, file_path, host, user, password):
    '''
    The function creates a csv file from the result of SQL
    in MySQL database.
    '''
    try:
        con = pymysql.connect(host=host,
                                user=user,
                                password=password)
        print('Connected to DB: {}'.format(host))
        # Read table with pandas and write to csv
        df = pd.read_sql(sql, con)
        df.to_csv(file_path, encoding='utf-8', header = True,\
         doublequote = True, sep=',', index=False)
        print('File, {}, has been created successfully'.format(file_path))
        con.close()

    except Exception as e:
        print('Error: {}'.format(str(e)))
        sys.exit(1)

def csv_to_mysql(load_sql, host, user, password):
    '''
    This function load a csv file to MySQL table according to
    the load_sql statement.
    '''
    try:
        con = pymysql.connect(host=host,
                                user=user,
                                password=password,
                                autocommit=True,
                                local_infile=1)
        print('Connected to DB: {}'.format(host))
        # Create cursor and execute Load SQL
        cursor = con.cursor()
        cursor.execute(load_sql)
        print('Succuessfully loaded the table from csv.')
        con.close()
        
    except Exception as e:
        print('Error: {}'.format(str(e)))
        sys.exit(1)

sql = 'Select * From world.city'
file_path = '/tmp/city.csv'
host = 'localhost'
user = 'writer'
password = 'Password1'
mysql_to_csv(sql, file_path, host, user, password)

load_sql = "LOAD DATA LOCAL INFILE '/tmp/city.csv' INTO TABLE usermanaged.city\
 FIELDS TERMINATED BY ',' ENCLOSED BY '\"' IGNORE 1 LINES;"
csv_to_mysql(load_sql, host, user, password)

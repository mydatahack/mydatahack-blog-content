[cc lang="python" tab_size="4" lines="-1"]

import psycopg2
dbname='mydatahack'
user='developer'
host='mydatahack.c8nebnn4e5r5.ap-southeast-2.rds.amazonaws.com'
password='Password1'

conn = psycopg2.connect("dbname={} user={} host={} password={}".format(dbname, user, host, password))
print(conn)

cur = conn.cursor()
cur.execute('Select NOW();')

record = cur.fetchall()
print(record)
[/cc]

14.201.166.15/32

100.101.102.103/32

[cc lang="python" tab_size="4" lines="-1"]
import psycopg2
dbname='<database name>'
user='<Username>'
host='<End Point>'
password='<Password>'

conn = psycopg2.connect("dbname={} user={} host={} password={}".format(dbname, user, host, password))
print(conn)

cur = conn.cursor()
cur.execute('Select NOW();')

record = cur.fetchall()
print(record)
[/cc]
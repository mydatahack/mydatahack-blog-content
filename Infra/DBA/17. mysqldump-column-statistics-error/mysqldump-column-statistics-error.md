# mysqldump Error: Unknown table 'COLUMN_STATISTICS' in information_schema (1109)

mysqldump 8 enabled a new flag called columm-statistics by default. When you have MySQL client above 8 and try to run mysqldump on older MySQL versions, you will get the error below.

<pre>
mysqldump: Couldn't execute 'SELECT COLUMN_NAME, JSON_EXTRACT(HISTOGRAM '$"number-of-buckets-specified"') FROM information_schema.COLUMN_STATISTICS WHERE SCHEMA_NAME = 'myschema' AND TABLE_NAME = 'craue_config_setting';': Unknown table 'COLUMN_STATISTICS' in information_schema (1109)
</pre>

The solution is simple. We can either run mysqldump with <span class="code">--column-statistics=0</span> as below.

<pre>
mysqldump --column-statistics=0 ...
</pre>

We can also disable this globally by adding mysqldump config in <span class="code">my.cnf</span> file.

<pre>
[mysqldump]
column-statistics=0
</pre>

With Mac, <span class="code">my.cnf</span> is in <span class="code">/usr/local/etc</span>. You can check the version of your mysqldume with <span class="code">mysqldump --version</span>.

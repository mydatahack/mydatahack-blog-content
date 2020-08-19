from s3uploader import S3

bucket= 'lambda.test.target'
key = 'data/transaction.json'
local_file = '/tmp/20180221_1_transaction.json'
s3Upload = S3(bucket, key, local_file)

s3Upload.upload()

local_file = './transaction.json'
s3Download = S3(bucket, key, local_file)

s3Download.download()

db_username = "mydatahack"
db_password = "mydatahackrocks"
db_name = "mydatahack"
db_endpoint = "mydatahackpgres.c8nebnn4e5r5.ap-southeast-2.rds.amazonaws.com"

db_username = "<user name>"
db_password = "<password>"
db_name = "<database name>"
db_endpoint = "<rds endpoint>"

policy

{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:GetObject",
                "s3:ListBucket"
            ],
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "logs:CreateLogGroup",
                "logs:CreateLogStream",
                "logs:PutLogEvents",
                "ec2:CreateNetworkInterface",
                "ec2:DescribeNetworkInterfaces",
                "ec2:DeleteNetworkInterface"
            ],
            "Resource": "*"
        }
    ]
}
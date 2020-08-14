import tensorflow as tf
tf.set_random_seed(1000)
import numpy as np
np.random.seed(1000)
from sklearn.model_selection import train_test_split

# (2) Get Data from S3
'''
import tflearn.datasets.oxflower17 as oxflower17
x, y = oxflower17.load_data(one_hot=True)
'''

import boto3
import botocore

def download_file_with_resource(bucket_name, key, local_path):
    s3 = boto3.resource('s3')
    s3.Bucket(bucket_name).download_file(key, local_path)
    print('Downloaded {}'.format(key))

bucket_name = 'sagemaker.mydh'
x_key='data/oxford_flower_17_x.npy'
y_key='data/oxford_flower_17_y.npy'
x_local_path = './data/oxford_flower_17_x.npy'
y_local_path = './data/oxford_flower_17_y.npy'

# download_file_with_resource(bucket_name, 'data/check.csv', './data/check.csv')
download_file_with_resource(bucket_name, x_key, x_local_path)
download_file_with_resource(bucket_name, y_key, y_local_path)

# (3) Load data
x_local_path = './data/oxford_flower_17_x.npy'
y_local_path = './data/oxford_flower_17_y.npy'
x = np.load(x_local_path)
y = np.load(y_local_path)
print('Shape of features: ', x.shape, 'Type: ', type(x))
print('Shape of classes: ', y.shape, 'Type: ', type(y))
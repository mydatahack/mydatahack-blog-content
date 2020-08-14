import os
import shutil
import json
from apiclient.discovery import build
from oauth2client.service_account import ServiceAccountCredentials
import httplib2
from oauth2client import client
from oauth2client import file
from oauth2client import tools

key_file_path = "C:\\Users\\takahiro.honda\\Desktop\\Insights Document\\GA API\\OUA-Key.p12"
service_email = "datalake@august-bucksaw-170606.iam.gserviceaccount.com"
scope = ['https://www.googleapis.com/auth/analytics.readonly']
api_name = 'analytics'
version = 'v3'
# Create a service

def get_service():
    '''It uses credential to connect to GA Reporting API.
    It returns the service object to execute bulk report export.'''
    credentials = ServiceAccountCredentials.from_p12_keyfile( \
        service_email, key_file_path, scopes=['https://www.googleapis.com/auth/analytics.readonly'])

    http = credentials.authorize(httplib2.Http())
    # Build the service object.
    service = build(api_name, version, http=http)
    return service

def get_ga_id(ga_service, acc_num = 0, prop_num = 0, view_num = 0):

  print("Using the following settings:\n")

  try:
    acc = ga_service.management().accounts().list().execute().get('items')[acc_num]
    acc_id = acc.get('id')
    print("Google Analytics account: " + acc.get('name'))

  except:
    print("Error finding account")
    return None

  try:
    prop = ga_service.management().webproperties().list(accountId=acc_id).execute().get('items')[prop_num]
    prop_id = prop.get('id')
    print("Property name: " + prop.get('name'))
  except:
    print("Error finding property")
    return None

  try:
    view = ga_service.management().profiles().list(accountId=acc_id,webPropertyId=prop_id).execute().get('items')[view_num]
    view_id = view.get('id')
    print("Analytics view name: " + view.get('name') +"\n")
  except:
    print("Error finding view")
    return None

  return view_id


def fetch_and_dump(ga_service,ga_id):
  # Google Analytics metrics we want
  ga_metrics = 'ga:users,\
                ga:newusers,\
                ga:sessions,\
                ga:bounces,\
                ga:sessionDuration,\
                ga:hits,\
                ga:pageviews'
 
  dims_date = ',ga:date,ga:hour'
  dims_date1 = ',ga:date'
 
  # Sets of dimensions to look at
  ga_dims_geo = 'ga:country,\
                 ga:region,\
                 ga:city,\
                 ga:continent,\
                 ga:language'+dims_date

  data_geo = ga_service.data().ga().get(ids='ga:'+ga_id,start_date='yesterday', end_date='today', max_results=10000, metrics=ga_metrics, dimensions=ga_dims_geo).execute()
  file = open('C:\\Users\\takahiro.honda\\Desktop\\Insights Document\\Python\\GA API\\Data\\google_analytics_geo.json','w')
  file.write(json.dumps(data_geo, indent=1))
  print("Export successfully completed!")

# Run code
my_service = get_service()
my_id = get_ga_id(my_service)
fetch_and_dump(my_service, my_id)

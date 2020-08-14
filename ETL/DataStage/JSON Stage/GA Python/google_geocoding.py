import requests
import json
api_key = 'AIzaSyAMLV6ZwLwXuA0dcV0O_O7FJ5J2PFi_cms'

url = 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyAMLV6ZwLwXuA0dcV0O_O7FJ5J2PFi_cms'

req = requests.get(url)
res = req.json()

pretty = json.dumps(res, indent=4)

f = open('C:\\Users\\takahiro.honda\\Desktop\\Insights Document\\Python\\demo_google_geo.json', 'w')

f.write(pretty)

print('Successfully Exported the data')


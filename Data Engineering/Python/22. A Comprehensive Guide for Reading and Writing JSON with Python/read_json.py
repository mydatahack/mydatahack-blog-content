import json
import requests

def json_ph_api(resource):
    '''Get example json data from jsonplaceholder.typicode.com.
    Returns Python dictionary object'''
    json_data = None
    endpoint = 'https://jsonplaceholder.typicode.com/{}'.format(resource)
    print('Target endpoint is {}'.format(endpoint))
    r = requests.get(endpoint)
    if r.status_code == 200:
        print('API Call Successful')
        # data returned with r.json() is a dictionary object
        json_data = r.json()
    else:
        print('API call failed with status code: {}'.format(r.status_code))
    return json_data

def json_ph_api_str(resource):
    '''Get example json data from jsonplaceholder.typicode.com.
    Returns response as String'''
    str_data = None
    endpoint = 'https://jsonplaceholder.typicode.com/{}'.format(resource)
    print('Target endpoint is {}'.format(endpoint))
    r = requests.get(endpoint)
    if r.status_code == 200:
        print('API Call Successful')
        # r.json() is r dictionaries. Use json.dumps to convert dict to json data type.
        str_data = r.text
    else:
        print('API call failed with status code: {}'.format(r.status_code))
    return str_data

def json_file_check(json_object):
    '''This function prints first 3 records 
    of the input json object'''
    counter = 0
    for i in json_object:
        if counter < 3:
            print(i)
            counter += 1
        else:
            break

def write_json(json_obj, file_path):
    '''Write Json object to a file'''
    f = open(file_path, 'w', encoding='utf-8')
    for line in json_obj:
        # json_obj is stored as dictionaries. 
        # json.dumps convert dictionary to json
        f.write(json.dumps(line))
        f.write('\n')
    print('Json file created as {}'.format(file_path))
    f.close()

def write_pretty_json(json_obj, file_path):
    '''Write Json object in a pretty format'''
    f = open(file_path, 'w')
    f.write(json.dumps(json_obj, indent=4))
    print('Json file with pretty format created as {}'.format(file_path))


j_obj = json_ph_api('posts')

write_json(j_obj, '/tmp/json_test.json')
write_pretty_json(j_obj, '/tmp/json_pretty_test.json')

#############################################################################################
## Function Check ###########################################################################
#############################################################################################

with open('/tmp/json_pretty_test.json', 'r') as handle:
    j = json.load(handle)

json_file_check(j)
write_json(j, '/tmp/json_test2.json')

json_string = json_ph_api_str('posts')
# json.load does not work here.
j2 = json.loads(json_string)
json_file_check(j2)

import json

f =open('/tmp/json_pretty_test.json', 'r')
json_obj = json.load(f)

# or

with open('/tmp/json_pretty_test.json', 'r') as handle:
    json_obj = json.load(handle)

print(type(json_obj))

for line in json_obj:
    print(line)


string = '{"id":1123,"name":"John"}'
json_obj = json.loads(string)
print(json_obj)
print(type(json_obj))

with open('/tmp/json_pretty_test.json', 'r') as handle:
    json_obj = json.load(handle)

for line in json_obj:
    dumped = json.dumps(line)
    print(type(dumped))
    print(dumped)

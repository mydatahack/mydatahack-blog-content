# py.test --html=report.html registerPage.py

import pytest
import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

@pytest.fixture
def browser():
  driver = webdriver.Chrome('./drivers/chromedriver.exe')
  driver.implicitly_wait(10)
  yield driver
  driver.quit()

@pytest.fixture
def index():
  index = getCurrentIndex()
  
  yield index
  updateIndex()

def test_register_student(browser):
  url = 'http://localhost/account/register'
  password = 'Password123'
  browser.get(url)

  firstname_input = browser.find_element_by_id('firstname')
  firstname_input.send_keys('FirstNameTest', Keys.RETURN)
  lastname_input = browser.find_element_by_id('lastname')
  lastname_input.send_keys('LastNameTest', Keys.RETURN)
  email_input = browser.find_element_by_id('email')
  index = getCurrentIndex()
  print('checking current index: ' + 'registerusertest{}@gmail.com'.format(index))
  email_input.send_keys('registerusertest{}@gmail.com'.format(index), Keys.RETURN)
  updateIndex()

  password_input = browser.find_element_by_id('password')
  password_input.send_keys(password, Keys.RETURN)
  confirm_password_input = browser.find_element_by_id('confirmedpassword')
  confirm_password_input.send_keys(password, Keys.RETURN)

  # For some reason, this doesn't work...
  # browser.find_element(By.ID, "btn-register-page-register").click()
  # registerBtn = WebDriverWait(browser, 10).until(EC.element_to_be_clickable((By.ID, "btn-register-page-register")))
  # registerBtn.click()

  # this alternative works better
  element = browser.find_element_by_id("btn-register")
  browser.execute_script("arguments[0].click();", element)
  WebDriverWait(browser, 30).until(EC.url_contains('selection'))
  browser.get('http://localhost/dashboard')

  header = browser.find_element_by_tag_name('h1')

  assert header.text == 'Welcome to Dashboard'

# Utilities
indexFilePath = './data/user_index'
def updateIndex():
  index = int(getCurrentIndex())
  f = open(indexFilePath, 'w')
  f.write(str(index + 1))

def getCurrentIndex():
  f = open(indexFilePath, 'r')
  return f.read()
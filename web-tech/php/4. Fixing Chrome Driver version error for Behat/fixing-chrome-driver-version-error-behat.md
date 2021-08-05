# How to fix ChromeDriver version mismatch error when you run Behat tests

When the chrome browser gets updated automatically on your computer, the ChromeDriver version is not going to be updated. Therefore, it causes the mismatch between the chrome browser and the ChromeDriver version.

In the context of Behat tests, ChromeDriver allows Behat to control Chrome (e.g. enabling it to move around the browser and do actions like clicks). Therefore, if the version of the driver mismatches that of the browser, Behat cannot control the browser and you get the error like below:

<pre>
┌─ @BeforeSuite # Behat\PantherContext::setup()
│
╳  session not created: This version of ChromeDriver only supports Chrome version 87
╳  Current browser version is 89.0.4389.90 with binary path /Applications/Google Chrome.app/Contents/MacOS/Google Chrome (Facebook\WebDriver\Exception\SessionNotCreatedException)
</pre>

The fix is easy. We just need to upgrade chrome driver. The below command is for Mac.

<pre>
# what we need is to upgrade the driver
brew upgrade chromedriver

# Then, add permission
xattr -d com.apple.quarantine /usr/local/bin/chromedriver

# We can check the version
/usr/local/bin/chromedriver --version
</pre>

With Behat, we can actually specify the chrome driver path with PANTHER_CHROME_DRIVER_BINARY argument.

<pre>
PANTHER_CHROME_DRIVER_BINARY=/usr/local/bin/chromedriver ...
</pre>

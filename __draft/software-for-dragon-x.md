# What software technologies are used in a space shuttle?

(extract from an online article)

SpaceX Dragon Capsule was first successfully launched on May 30th, 2020 with two astronauts on board. As a software engineer, I was curious to know what software technologies are used in this rocket.

All the user interfaces run on Chromium and are written entirely in HTML, CSS and JavaScripts just like other websites instead of using lower-level programming languages. They are responsible for displaying all relevant information as well as handling the astronaut taps and swipes.

The Dragon Capsule uses touchscreen for all the interfaces, even for piloting. It flies autonomously, but, the astronauts can pilot it in a manual mode through the touchscreen controller. The manual mode is used for sensitive operations like docking with the ISS, landing back on Earth or aborting the launch. Note that there are also physical controllers in case the touchscreen interface has problems.

Not surprisingly, software controlling the shuttle is written in in C++ and runs on Linux. The system is connected to SpaceX's Starlink, which are a bunch of satellites containing more than 30,000 Linux notes (to date). While all vehicle control systems are written by C++, Python is used for tools, testing and automation. I haven't found a definite answer if the software is running on Docker or VM. My guess is some software components must be dockerised.

## Reference

https://lithiosapps.com/a-look-under-the-hood-of-spacexs-dragon-capsule/

https://thenewstack.io/the-hardware-and-software-used-in-space/

https://old.reddit.com/r/spacex/comments/gxb7j1/we_are_the_spacex_software_team_ask_us_anything/

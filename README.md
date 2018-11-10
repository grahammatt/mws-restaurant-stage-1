# GWG Udacity Mobile Web Specialist Certification Course
---
## Project Overview

This project converts a static restaurant reviews webpage to a mobile-ready web application. The design has been converted to flexbox to become responsive on different sized displays. The tab order has been modified and Aria attributes added to make the app accessible for screen reader use.

### Service Worker

A service worker has been implemented to create a seamless offline experience. The worker caches content on pages that have been visited and favors loading from the cache. In chrome you can use the application tab within devtools to unregister service worker, simulate an offline experience, and view items in the cache among other things.

### What do I do from here?

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8001` (or some other port, if port 8001 is already in use.) For Python 3.x, you can use `python -m http.server 8001`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

2. With your server running, visit the site: `http://localhost:8001`

3. To make modifications navigate to the project directory in the command line and run `npm install` when that is complete you can run `gulp default` to begin watching files for changes.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `MAPBOX_API_KEY` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript.
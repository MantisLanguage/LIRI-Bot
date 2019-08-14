# LIRI-Bot
## MVP
This app is designed to pull song, movie and concert data based upon a command line filter and search terms. 
### Organization
The app is laid out in 4 parts, the primary code lies within liri.js. 
Liri.js will host all 3 api calls and the functions which console log the data we are attempting to attain. 
keys.js exports the spotify key
the .env file keeps our spotify key safe
while the package.json file provides the install dependencies 

The primary liriRun function is a switch case based upon the command line media filter. 

After identifying the filter, the user may search for any amount of words in order to find their desired result. 

# Instructions

Open liri.js in your terminal
enter in the following commands:
npm init -y
npm i

Now enter in a command for your desired search, start with:

node liri.js ___1_____ ___2____

The first blank you type in the search command:
"concert-this" "spotify-this-song" "movie-this" or "do-what-it-says"

The second blank(s) you type in what you are searching for!

## Functionality
https://youtu.be/_TGPGdVrhPc


### Technology
dotenv
fs package
moment package
axios package
Spotify API
OMDB API
bandsintown API

# Developer
Sole Developer: Connor Dougherty 

// Initialization
require("dotenv").config();
var fs = require("fs");
var Spotify = require('node-spotify-api');
var axios = require("axios");
var moment = require("moment");
var keys = require("./keys.js");

// Command Line Input variables

let userInput = process.argv[2];
let userSearch = process.argv.slice(3).join(" ");

// Functionality Begins:
// Discerning the type of search being done
function liriRun(userInput, userSearch) {
    switch (userInput) {
        case "spotify-this-song":
            getSpotify(userSearch);
            break;
        case "concert-this":
            getBandsInTown(userSearch);
            break;
        case "movie-this":
            getOMDB(userSearch);
            break;
        case "do-what-it-says":
            getIt();
            break;
        default:
            console.log("Please use one of the four options: \n 'concert-this \n 'spotify-this-song' \n 'movie-this'");
            break;
    }
}

// Spotify API
function getSpotify(songName) {
    var spotify = new Spotify(keys.spotify);

    if (!songName) {
        songName = "The Sign";
    };
    spotify.search({ type: 'track', query: songName }, function (err, data) {
        if (err) {
            return console.log('error occured: ' + err);
        }

        console.log("_,.;:-+=^=+-:;.,__,.;:-+=^=+-:;.,_")
        console.log("Artist[s] Name: " + data.tracks.items[0].album.artists[0].name + "\r\n");
        console.log("Song Name: " + data.tracks.items[0].name + "\r\n");
        console.log("Song Preview Link: " + data.tracks.items[0].href + "\r\n");
        console.log("Album: " + data.tracks.items[0].album.name + "\r\n");

    })
};

// bandsintown call 
function getBandsInTown(artist) {
    var artist = userSearch;
    var bandQueryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

    axios.get(bandQueryURL).then(
        function (response) {
            console.log("_,.;:-+=^=+-:;.,__,.;:-+=^=+-:;.,_")
            console.log("Name of the venue: " + response.data[0].venue.name + "\r\n");
            console.log("Venue location: " + response.data[0].venue.city + "\r\n");
            console.log("Date of event: " + moment(response.data[0].datetime).format("MM-DD-YYYY") + "\r\n");
        })
};
// OMDB call 
function getOMDB(movie) {

    if (!movie) {
        movie = "Mr. Nobody";
    }
    var movieQueryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    axios.request(movieQueryUrl).then(
        function (response) {
            console.log("_,.;:-+=^=+-:;.,__,.;:-+=^=+-:;.,_");
            console.log("- Title: " + response.data.Title + "\r\n");
            console.log("- Year Released: " + response.data.Year + "\r\n");
            console.log("- IMDB Rating: " + response.data.imdbRating + "\r\n");
            console.log("- Rotten Tomatoes Rating: " + response.data.Ratings[1].Value + "\r\n");
            console.log("- Country Produced in: " + response.data.Country + "\r\n");
            console.log("- Language: " + response.data.Language + "\r\n");
            console.log("- Plot: " + response.data.Plot + "\r\n");
            console.log("- Actors: " + response.data.Actors + "\r\n");
        }
    )
}
// refernce to random.txt for lack of search
function getIt() {
    fs.readFile("random.txt", "utf8", function (error, data){
        if (error) {
            return console.log(error);
        }
        else {
            console.log(data);

            var randomData = data.split(",");
            liriRun(randomData[0], randomData[1]);
        }
    })
};

liriRun(userInput, userSearch);
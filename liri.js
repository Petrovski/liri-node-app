require("dotenv").config();

const keys = require("./keys.js");
const request = require("request");
const Spotify = require('node-spotify-api');
const fs = require("fs")

var input = process.argv;

var liriInput = input[2];


if (liriInput === "concert-this") {
    getConcertInfo();
    console.log("concert-this");
}

if (liriInput === "spotify-this-song") {
    getSongInfo();
    console.log("spotify-this-song");
}

if (liriInput === "movie-this") {
    getMovieInfo();
    console.log("movie-this");
}

if (liriInput === "do-what-it-says") {
    console.log("do-what-it-says");
}


function getSongInfo(song) {
 
    for (var i = 3; i < input.length; i++) {
        song = song + " " + input[i];
    }

    var spotify = new Spotify(keys.spotify);


    if (!song) {
        song = "The Sign";
    }

    spotify.search({ type: 'track', query: song, limit: 10 }, function (err, data) {

        if (err) {
            return console.log('Error occurred: ' + err);
        }

        //If no song is provided, then the app will default to "The Sign" by Ace of Base.
        if (song === "The Sign") {
            //output the default song information
            var defaultSong =
                "Artist: " + data.tracks.items[5].artists[0].name + "\r\n" +
                "Song title: " + data.tracks.items[5].name + "\r\n" +
                "Preview song: " + data.tracks.items[5].preview_url + "\r\n" +
                "Album: " + data.tracks.items[5].album.name + "\r\n"

            //Output default song info to terminal for the user to see
            console.log(defaultSong);
        } else {

            console.log("Top 10 songs on Spotify with the name, " + song);
            
            for (var i = 0; i < data.tracks.items.length; i++) {
                var trackInfo = data.tracks.items[i];

                var previewSong = trackInfo.preview_url;
                //If the song preview is null (aka not available), tell the user that the song preview is not available.
                if (previewSong === null) {
                    previewSong = "Song preview is not available for this song.";
                }

                var songResults =

                    "==========================================================================" + "\r\n" +
                    "Song #" + (i + 1) + "\r\n" +
                    "Artist: " + trackInfo.artists[0].name + "\r\n" +
                    "Song title: " + trackInfo.name + "\r\n" +
                    "Preview song: " + previewSong + "\r\n" +
                    "Album: " + trackInfo.album.name + "\r\n" +
                    "==========================================================================";

                //This will display the song info in the terminal for the user
                console.log(songResults);
            }
        }
    });
}


function getMovieInfo() {

    var movieName = input[3];

    for (var i = 3; i < input.length; i++) {

        if (i > 2 && i < input.length) {
            movieName = movieName + " " + input[i];
        }
    }

    //If no movie name is specified on the command line, then show the movie info for the movie, Mr. Nobody.
    if (!movieName) {

        movieName = "Mr Nobody";
        console.log("If you haven't watched Mr. Nobody, then you should: http://www.imdb.com/title/tt0485947/");
        console.log("It's on Netflix!")

    }

    request("http://www.omdbapi.com/?t=" + movieName + "&apikey=trilogy", function (error, response, body) {

        //If the request is successful  (status code is 200)
        if (!error && response.statusCode === 200) {
            //use JSON.parse to display movie info
            var movieInfo = JSON.parse(body);

            var movieResult =

                "Title: " + movieInfo.Title + "\n" +
                "Year movie was released: " + movieInfo.Year + "\n" +
                "IMDB movie rating (out of 10): " + movieInfo.imdbRating + "\n" +
                "Filmed in: " + movieInfo.Country + "\n" +
                "Language: " + movieInfo.Language + "\n" +
                "Plot: " + movieInfo.Plot + "\n" +
                "Actors: " + movieInfo.Actors + "\n" +
                "======================================================================================================="

            //Output the movie information from above to the terminal for the user to see
            console.log(movieResult);
        }
    });
}


function getConcertInfo() {

    var artist = input[3];

    console.log(request("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"));
}
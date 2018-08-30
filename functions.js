var request = require("request");
var keys = require("./keys.js");
var fs = require("fs");
var Spotify = require('node-spotify-api')

var Fourfunctions = function () {

    this.Concerts = function (artist) {
        var bands = keys.bandsInTown.BandsAPI;
        var bandsURL = "https://rest.bandsintown.com/artists/" + artist + "/events?" + bands;
        request(bandsURL, function (error, response, body) {
            if (error) {
                console.log("Error occurred: " + error);
                console.log('statusCode:', response && response.statusCode);
            } else {
                var data = JSON.parse(body);
                for (let i = 0; i < data.length; i++) {
                    var o = i + 1;
                    console.log("---------------------------------------------");
                    console.log("Concert Number " + o);
                    console.log("Name of the Venue: " + data[i].venue.name);
                    console.log("Venue location: " + data[i].venue.city + ", " + data[i].venue.region);
                    console.log("Date: " + data[i].datetime.slice(0, 10));
                    fs.appendFile("./log.txt", "\nConcert Number: " + o + "\nName of the Venue: " + data[i].venue.name + "\nVenue location: " + data[i].venue.city + ", " + data[i].venue.region + "\nDate: " + data[i].datetime.slice(0, 10) + "\n---------------------------------------------", "utf8", function (err) { if (err) throw err; console.log("See log for Search history") });
                };
            };
        });
    };

    this.Songs = function (song) {
        var spotify = new Spotify(keys.spotify);
        spotify.search({ type: 'track', query: song }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            };
            console.log("---------------------------------------------");
            console.log("Track Name: " + data.tracks.items[0].name);
            console.log("Album Name: " + data.tracks.items[0].album.name);
            console.log("Artist Name: " + data.tracks.items[0].artists[0].name);
            console.log("Link: " + data.tracks.items[0].href);
            console.log("---------------------------------------------");
            fs.appendFile("./log.txt", "\nSpotify Search: " + "\nTrack Name: " + data.tracks.items[0].name + "\nAlbum Name: " + data.tracks.items[0].album.name + "\nArtist Name: " + data.tracks.items[0].artists[0].name + "\nLink: " + data.tracks.items[0].href + "\n---------------------------------------------", "utf8", function (err) { if (err) throw err; console.log("See log for Search history") });
        });
    };

    this.Movies = function (title) {
        var ombdAPIKEY = keys.omdb.omdbAPI;
        var moviesURL = "http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=" + ombdAPIKEY;
        request(moviesURL, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                console.log("---------------------------------------------");
                console.log("Title: " + JSON.parse(body).Title);
                console.log("Release Date: " + JSON.parse(body).Released.slice(-4));
                console.log("IMDB Rating: " + JSON.parse(body).Ratings[0].Value);
                console.log("Rotten Tomatos Rating: " + JSON.parse(body).Ratings[1].Value);
                console.log("Country: " + JSON.parse(body).Country);
                console.log("Language: " + JSON.parse(body).Language);
                console.log("Actors: " + JSON.parse(body).Actors);
                console.log("Plot Summary: " + JSON.parse(body).Plot);
                fs.appendFile("./log.txt", "\nOMDB Search: " + "\nTitle: " + JSON.parse(body).Title + "\nRelease Date: " + JSON.parse(body).Released.slice(-4) + "\nIMDB Rating: " + JSON.parse(body).Ratings[0].Value + "\nRotten Tomatos Rating: " + JSON.parse(body).Ratings[1].Value + "\nCountry: " + JSON.parse(body).Country + "\nLanguage" + JSON.parse(body).Language + "\nActors" + JSON.parse(body).Actors + "\nPlot Summary: " + JSON.parse(body).Plot + "\n---------------------------------------------", "utf8", function (err) { if (err) throw err; console.log("See log for Search history") });
            } else if (!error) {
                console.log(response.statusCode);
            } else {
                console.log(error);
                console.log(response.statusCode);
            };
        });
    };

    this.Texts = function (nothing) {
        fs.readFile("random.txt", "utf8", function (error, data) {
            if (error) {
                return console.log(error);
            };
            var dataArr = data.split(",");
            var textInput = dataArr[1];
            var textCmd = dataArr[0];

            switch (textCmd) {
                case "concert-this":
                    var bands = keys.bandsInTown.BandsAPI;
                    var bandsURL = "https://rest.bandsintown.com/artists/" + textInput + "/events?" + bands;
                    request(bandsURL, function (error, response, body) {
                        if (error) {
                            console.log("Error occurred: " + error);
                            console.log('statusCode:', response && response.statusCode);
                        } else {
                            var data = JSON.parse(body);
                            for (let i = 0; i < data.length; i++) {
                                var o = i + 1;
                                console.log("---------------------------------------------");
                                console.log("Concert Number " + o);
                                console.log("Name of the Venue: " + data[i].venue.name);
                                console.log("Venue location: " + data[i].venue.city + ", " + data[i].venue.region);
                                console.log("Date: " + data[i].datetime.slice(0, 10));
                                fs.appendFile("./log.txt", "\nConcert Number: " + o + "\nName of the Venue: " + data[i].venue.name + "\nVenue location: " + data[i].venue.city + ", " + data[i].venue.region + "\nDate: " + data[i].datetime.slice(0, 10) + "\n---------------------------------------------", "utf8", function (err) { if (err) throw err; console.log("See log for Search history") });
                            };
                        };
                    });
                    break;
                case "spotify-this-song":
                    var spotify = new Spotify(keys.spotify);
                    spotify.search({ type: 'track', query: textInput }, function (err, data) {
                        if (err) {
                            return console.log('Error occurred: ' + err);
                        };
                        console.log("---------------------------------------------");
                        console.log("Track Name: " + data.tracks.items[0].name);
                        console.log("Album Name: " + data.tracks.items[0].album.name);
                        console.log("Artist Name: " + data.tracks.items[0].artists[0].name);
                        console.log("Link: " + data.tracks.items[0].href);
                        console.log("---------------------------------------------");
                        fs.appendFile("./log.txt", "\nSpotify Search: " + "\nTrack Name: " + data.tracks.items[0].name + "\nAlbum Name: " + data.tracks.items[0].album.name + "\nArtist Name: " + data.tracks.items[0].artists[0].name + "\nLink: " + data.tracks.items[0].href + "\n---------------------------------------------", "utf8", function (err) { if (err) throw err; console.log("See log for Search history") });
                    });
                    break;
                case "movie-this":
                    var ombdAPIKEY = keys.omdb.omdbAPI;
                    var moviesURL = "http://www.omdbapi.com/?t=" + textInput + "&y=&plot=short&apikey=" + ombdAPIKEY;
                    request(moviesURL, function (error, response, body) {
                        if (!error && response.statusCode === 200) {
                            console.log("---------------------------------------------");
                            console.log("Title: " + JSON.parse(body).Title);
                            console.log("Release Date: " + JSON.parse(body).Released.slice(-4));
                            console.log("IMDB Rating: " + JSON.parse(body).Ratings[0].Value);
                            console.log("Rotten Tomatos Rating: " + JSON.parse(body).Ratings[1].Value);
                            console.log("Country: " + JSON.parse(body).Country);
                            console.log("Language: " + JSON.parse(body).Language);
                            console.log("Actors: " + JSON.parse(body).Actors);
                            console.log("Plot Summary: " + JSON.parse(body).Plot);
                            fs.appendFile("./log.txt", "\nOMDB Search: " + "\nTitle: " + JSON.parse(body).Title + "\nRelease Date: " + JSON.parse(body).Released.slice(-4) + "\nIMDB Rating: " + JSON.parse(body).Ratings[0].Value + "\nRotten Tomatos Rating: " + JSON.parse(body).Ratings[1].Value + "\nCountry: " + JSON.parse(body).Country + "\nLanguage" + JSON.parse(body).Language + "\nActors" + JSON.parse(body).Actors + "\nPlot Summary: " + JSON.parse(body).Plot + "\n---------------------------------------------", "utf8", function (err) { if (err) throw err; console.log("See log for Search history") });
                        } else if (!error) {
                            console.log(response.statusCode);
                        } else {
                            console.log(error);
                            console.log(response.statusCode);
                        };
                    });
                    break;
                default:
                    break;
            };

        });
    };
}

module.exports = Fourfunctions;

require("dotenv").config();
var FourFunctions = require("./functions");
var keys = require("./keys.js");
var request = require("request");
var fs = require("fs");

var processInput1 = process.argv[2];
var processInput2 = process.argv.slice(3).join(" ");
processInput1.toLowerCase();

var ff = new FourFunctions();

// Concert-this code!
// -------------------------
switch (processInput1) {
    case "concert":
        console.log("concert - Query Results Below");
        ff.Concerts(processInput2);
        break;
    // -------------------------

    // Spotify-this-song code!
    // -------------------------
    case "spotify":
        console.log("spotify - Query Results Below");
        ff.Songs(processInput2);
        break;
    // -------------------------

    // Movie-this code!
    // -------------------------
    case "movie":
        console.log("movie - Query Results Below");
        ff.Movies(processInput2);
        break;
    // -------------------------

    // Do-what-it-says code!
    // -------------------------
    case "text":
        console.log("text - Query Results Below");
        ff.Texts(processInput2);
        break;
    // -------------------------
    default:
        break;
}

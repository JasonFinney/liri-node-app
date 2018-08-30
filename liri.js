require("dotenv").config();
var FourFunctions = require("./functions");
var keys = require("./keys.js");
var request = require("request");
var fs = require("fs");

var processInput1 = process.argv[2];
var processInput2 = process.argv.slice(3).join(" ");
var processInput3 = process.argv[3];
var processInput4 = process.argv.slice(4).join(" ");
processInput1.toLowerCase();
if (processInput3) {
    processInput3.toLowerCase();
}

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
    case "overwrite":
        switch (processInput3) {
            case "concert":
                processInput3 = "concert-this";
                break;
            case "movie":
                processInput3 = "movie-this";
                break;
            case "spotify":
                processInput3 = "spotify-this-song";
                break;
            default:
                break;
        }
        fs.writeFile("./random.txt", processInput3 + "," + processInput4, "utf8", function (err) { if (err) throw err; console.log("See log for Search history") })
        break;
    default:
        break;
}


# LIRI Bot

### Overview

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

### APIs USED

* Node-Spotify-API
    Music

* BandsinTown API
    Concerts

* OMBD
    Movies

### USAGE
(In the terminal)
* Please use this format:
    node liri.js command "the item you are searching for"

* The first word must be "node"

* The second word must be "liri.js"

* The third word must be a valid command:
Valid Commands - 
    * Spotify
    * Movie
    * Concert
    * Text
    * Overwrite

* The fourth through infinity words can be anything that you wish to search for


### HOW TO USE COMMANDS
* Spotify - 
    enter the name of the song you wish after the command "spotify"

    returns in the format:
    spotify - Query Results Below
    ---------------------------------------------
    Track Name: We Will Rock You - Remastered 2011
    Album Name: News Of The World (Deluxe Remastered Version)
    Artist Name: Queen
    Link: https://api.spotify.com/v1/tracks/54flyrjcdnQdco7300avMJ
    ---------------------------------------------
    See log for Search history

* Concert -
    enter the name of the artist you wish to see after the command "concert"

    returns in the format: 
    concert - Query Results Below
    ---------------------------------------------
    Concert Number 1
    Name of the Venue: Safeco Field
    Venue location: Seattle, WA
    Date: 2018-09-01
    ---------------------------------------------
    See log for Search history

* Movie - 
    enter the name of the movie you wish after the command "movie"

    returns in the format:
    movie - Query Results Below
    ---------------------------------------------
    Title: Titanic
    Release Date: 1997
    IMDB Rating: 7.8/10
    Rotten Tomatos Rating: 88%
    Country: USA
    Language: English, Swedish
    Actors: Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates
    Plot Summary: A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.
    See log for Search history

* Text - 
    no fourth word needed
    searches whatever is written in "random text"
    to change the search in random text:
    * use the overwrite command!

* Overwrite - 
    write the name of the command after the word "overwrite" followed by the search query.
    -This overwrites the text in random.txt!
    -then you can use " node liri.js text " to search it!

### Logged Search Queries!

* See log.txt to see a record of every single search query!



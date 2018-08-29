console.log('keys loaded');

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};

exports.bandsInTown = {
    BandsAPI: process.env.BANDS_API_KEY
};

exports.omdb = {
    omdbAPI: process.env.OMDB_API_KEY
};

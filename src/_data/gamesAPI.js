const EleventyFetch = require("@11ty/eleventy-fetch");
require('dotenv').config();

module.exports = async function() {
    let url = `https://helpful-truthful-continent.glitch.me/api/v1/workouts`;

    /* This returns a promise */
    return EleventyFetch(url, {
        duration: "2h", // save for 1 day
        type: "json"    // we’ll parse JSON for you
    });
};
import * as Album from "./methods/album.js";
import * as Artist from "./methods/artist.js";
import * as Genre from "./methods/genre.js";
import * as Playlist from "./methods/playlist.js";
import * as Search from "./methods/search.js";
import * as Track from "./methods/track.js";
import * as User from "./methods/user.js";

export let accessToken = "";

function setAccessToken(t) {
    token = t;
}

export {
    Album,
    Artist,
    Genre,
    Playlist,
    Search,
    Track,
    User,
    setAccessToken
}
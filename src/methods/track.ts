import { Genre } from "./genre.js";
import { Album } from "./album.js";

type url = string;

// type Track = {};
type Artist = {};

type contributor = string;

type Track = {
    id: number,
    readable: boolean,
    title: string,
    title_short: string,
    title_version: string,
    unseen: boolean,
    isrc: string,
    link: url,
    share: url,
    duration: number,
    track_position: number,
    disk_number: number,
    rank: number,
    release_date: string,
    explicit_lyrics: boolean,
    explicit_content_lyrics: number,
    explicit_content_cover: number,
    preview:url,
    bpm: number,
    gain: number,
    available_countries: string[],
    alternative: Track,
    contributors: contributor[],

    artist: Artist,
    album: Album,

    // cover: url,
    // cover_small: url,
    // cover_medium: url,
    // cover_big: url,
    // cover_xl: url,
    // md5_image: string,
    // genre_id: number,
    // genres: Genre[],
    // label: string,
    // nb_tracks: number,
    // fans: number,
    // record_type: string,
    // available: boolean,
    // tracklist: url,
    // artist: Artist,
    // tracks: Track[],
};

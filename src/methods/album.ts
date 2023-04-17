import { Genre } from "./genre.js";

type url = string;

type Track = {};
type Artist = {};

type contributor = string;

type Album = {
  id: number,
  title: string,
  upc: string,
  link: url,
  share: url,
  cover: url,
  cover_small: url,
  cover_medium: url,
  cover_big: url,
  cover_xl: url,
  md5_image: string,
  genre_id: number,
  genres: Genre[],
  label: string,
  nb_tracks: number,
  duration: number,
  fans: number,
  release_date: string,
  record_type: string,
  available: boolean,
  alternative: Album,
  tracklist: url,
  explicit_lyrics: boolean,
  explicit_content_lyrics: number,
  explicit_content_cover: number,
  contributors: contributor[],
  artist: Artist,
  tracks: Track[],
};

export {
    Album
}
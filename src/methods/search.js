import {
    getToken,
    api
} from "../request.js"

const order = [
    "RANKING",
    "TRACK_ASC",
    "TRACK_DESC",
    "ARTIST_ASC",
    "ARTIST_DESC",
    "ALBUM_ASC",
    "ALBUM_DESC",
    "RATING_ASC",
    "RATING_DESC",
    "DURATION_ASC",
    "DURATION_DESC",
];

export async function Search(query, options) {
    let opts = {};

    if (options.order)
        if (order.includes(options.order.toUpperCase()))
            opts.order = options.order.toUpperCase();


    if (options.strict) opts.strict = options.strict;

    if (options.limit) opts.limit = options.limit;

    if (options.index) opts.index = options.index;
    // console.log(opts)
    let res = await api
        .url(`/search`)
        .query({ ...getToken(), ...opts, ...{ q: query } })
        .get();

    return res;
}

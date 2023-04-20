import {
    getToken,
    api
} from "../request.js"


export async function getPlaylist(id) {
    let res = await api.url(`/playlist/${id}`)
    .query({...getToken()})
    .get();
    return res;
}

export async function getPlaylistFans(id) {
    let res = await api.url(`/playlist/${id}/fans`)
    .query({...getToken()})
    .get();
    return res;
}

export async function getPlaylistTracks(id, options = {}) {
    let res = await api.url(`/playlist/${id}/tracks`)
    .query({...getToken(),...options})
    .get();
    return res;
}

export async function getPlaylistRadio(id) {
    let res = await api.url(`/playlist/${id}/tracks`)
    .query({...getToken()})
    .get();
    return res;
}

export async function favoritePlaylist(id) {
    let res = await api.url(`/user/me/playlists`)
    .query({...getToken(), ...{playlist_id:id}})
    .post()
    return res;
}

export async function unfavoritePlaylist(id) {
    let res = await api.url(`/user/me/playlists`)
    .query({...getToken(), ...{playlist_id:id}})
    .delete()
    return res;
}
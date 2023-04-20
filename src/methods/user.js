import { api } from "../request.js";

export async function getUser(id) {
    let res = await api
        .url(`/user/${id}`)
        .query({ ...getToken() })
        .get();
    return res;
}

export async function getAlbums(id, options = {}) {
    let res = await api
        .url(`/user/${id}`)
        .query({ ...getToken(), ...options })
        .get();
    return res;
}

export async function getArtists(id, options = {}) {
    let res = await api
        .url(`/user/${id}/artists`)
        .query({ ...getToken(), ...options })
        .get();
    return res;
}

export async function getPlaylists(id, options = {}) {
    let res = await api
        .url(`/user/${id}/playlists`)
        .query({ ...getToken(), ...options })
        .get();
    return res;
}

export async function getFavorites(id, options = {}) {
    let res = await api
        .url(`/user/${id}/tracks`)
        .query({ ...getToken(), ...options })
        .get();
    return res;
}

export async function getHistory(id, options = {}) {
    let res = await api
        .url(`/user/${id}/history`)
        .query({ ...getToken(), ...options })
        .get();
    return res;
}

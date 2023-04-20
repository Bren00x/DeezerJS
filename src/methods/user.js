import {api} from "../request.js"

export async function getUser(id) {
    let res = await api.get(`/user/${id}`)
    return res;
}

export async function getAlbums(id) {
    let res = await api.get(`/user/${id}/albums`)
    return res;
}

export async function getArtists(id) {
    let res = await api.get(`/user/${id}/artists`)
    return res;
}

export async function getPlaylists(id) {
    let res = await api.get(`/user/${id}/playlists`)
    return res;
}

export async function getFavorites(id) {
    let res = await api.get(`/user/${id}/tracks`)
    return res;
}

export async function getHistory(id) {
    let res = await api.get(`/user/${id}/history`)
    return res;
}
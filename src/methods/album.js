import api from "../request.js"

export async function getAlbum(id) {
    let res = await api.get(`/album/${id}`)
    return res;
}

export async function favoriteAlbum(id) {
    let res = await api.url(`/user/me/albums`)
    .post({ "album_id": id })
    return res;
}

export async function getFans(id) {
    let res = await api.get(`/album/${id}/fans`)
    return res;
}

export async function getTracks(id) {
    let res = await api.get(`/album/${id}/tracks`)
    return res;
}
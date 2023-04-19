import api from "../request.js"

export async function getArtist(id) {
    let res = await api.get(`/artist/${id}`)
    return res;
}

export async function followArtist(id) {
    let res = await api.url(`/user/me/artist`)
    .post({ "artist_id": id })
    return res;
}
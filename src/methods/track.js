import api from "../request.js"

export async function getTrack(id) {
    let res = await api.get(`/track/${id}`)
    return res;
}

export async function favoriteTrack(id) {
    let res = await api.url(`/user/me/tracks`)
    .post({ "songs": id })
    return res;
}
import api from "../request.js"

export async function getArtist(id) {
    let res = await api.get(`/artist/${id}`)
    return res;
}
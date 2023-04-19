import api from "../request.js"

export async function getTrack(id) {
    let res = await api.get(`/track/${id}`)
    return res;
}
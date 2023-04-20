import { api, getToken } from "../request.js";

export async function getArtist(id) {
    let res = await api.get(`/artist/${id}`);
    return res;
}

export async function followArtist(id) {
    let res = await api
        .url(`/user/me/artist`)
        .query({ ...getToken(), ...{ artist_id: id } })
        .post();
    return res;
}

export async function unfollowArtist(id) {
    let res = await api
        .url(`/user/me/artist`)
        .query({ ...getToken(), ...{ artist_id: id } })
        .delete();
    return res;
}

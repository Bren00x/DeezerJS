import {
    api,
    getToken
} from "../request.js"

export async function getAlbum(id) {
    let res = await api.url(`/album/${id}`)
    .query({...getToken()})
    .get();
    return res;
}

export async function favoriteAlbum(id) {
    let res = await api.url(`/user/me/albums`)
    .query({...getToken(), ...{album_id:id}})
    .post()
    return res;
}

export async function unfavoriteAlbum(id) {
    let res = await api.url(`/user/me/albums`)
    .query({...getToken(), ...{album_id:id}})
    .delete()
    return res;
}

export async function getFans(id, options) {
    let res = await api.url(`/album/${id}/fans`)
    .query({...getToken(),...options})
    .get();
    return res;
}

export async function getTracks(id, options = {}) {
    let res = await api.url(`/album/${id}/tracks`)
    .query({...getToken(),...options})
    .get();
    return res;
}
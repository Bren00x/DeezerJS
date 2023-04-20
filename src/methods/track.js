import { getToken, api } from "../request.js";

export async function getTrack(id) {
    let res = await api
        .url(`/track/${id}`)
        .query({...getToken()})
        .get();
    return res;
}

export async function favoriteTrack(id) {
    // console.log(api.access_token, api);
    console.log();
    let res = await api
        .url(`/user/me/tracks`)
        .query({...getToken(), ...{ track_id: id }})
        .post();
    // let res = 'aah'
    return res;
}

export async function unfavoriteTrack(id) {
    // console.log(api.access_token, api);
    console.log();
    let res = await api
        .url(`/user/me/tracks`)
        .query({...getToken(), ...{ track_id: id }})
        .delete();
    // let res = 'aah'
    return res;
}

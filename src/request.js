//https://api.deezer.com/
import wretch from "wretch";
import fetch from "node-fetch";
import { URLSearchParams } from "url";
import QueryStringAddon from "wretch/addons/queryString"



export let access_token;

export function setToken(t) {
    access_token = t;
}

export function getToken() {
    let obj = {}
    if(access_token) obj.access_token = access_token
    return obj
}

const errors = {
    4: {
        error: "Quota has been reached.",
    },
    100: {
        error: "Item limit has been reached.",
    },
    200: {
        error: "An active access token must be used to query information about the current user.",
    },
    300: {
        error: "Auth token is invalid.",
    },
    500: {
        error: "Parameter error.",
    },
    501: {
        error: "Parameter is missing.",
    },
    600: {
        error: "This query is invalid.",
    },
    700: {
        error: "Service is busy.",
    },
    800: {
        error: "Request was not found.",
    },
    801: {
        error: "Item already exists.",
    },
    901: {
        error: "Not sure but 'INDIVIDUAL_ACCOUNT_NOT_ALLOWED' and 'IndividualAccountChangedNotAllowedException' seem crazy",
    },
};

export const api = wretch("https://api.deezer.com", { mode: "cors" })
    .polyfills({
        fetch: fetch,
        // FormData: require("form-data"),
        URLSearchParams: URLSearchParams,
    }).addon(QueryStringAddon)
    .errorType("json")
    .resolve(async (r) => {
        let json = await r.json();
        console.log(access_token, r._wretchReq._url)
        if (json.error) {
            console.log(json.error.code, json.error.message, json.error.type);
            throw errors[json.error.code].error;
        }
        return json;
    });


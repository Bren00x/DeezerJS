//https://api.deezer.com/
import wretch from "wretch";
import fetch from "node-fetch";
import { URLSearchParams } from "url";

const errors = {
    4: {
        error: "Quota has been reached.",
    },
    100: {
        error: "Item limit has been reached.",
    },
    200: {
        error: "Auth token is invalid.",
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
    901: {
        error: "Not sure but 'INDIVIDUAL_ACCOUNT_NOT_ALLOWED' and 'IndividualAccountChangedNotAllowedException' seem crazy",
    },
};

const api = wretch("https://api.deezer.com", { mode: "cors" })
    .polyfills({
        fetch: fetch,
        // FormData: require("form-data"),
        URLSearchParams: URLSearchParams,
    })
    .errorType("json")
    .resolve(async (r) => {
        let json = await r.json();
        if (json.error) {
            console.log(json.error.code, json.error.message, json.error.type);
            throw errors[json.error.code].error;
        }
        return json;
    });

export default api;

import fetch from "node-fetch";
import wretch from "wretch";

export async function authenticate(options) {
    let res;
    try {
        res = await wretch(
            `https://connect.deezer.com/oauth/access_token.php?app_id=${options.appId}&secret=${options.appSecret}&code=${options.code}&request_method=token&output=json`
        )
            .polyfills({
                fetch: fetch,
            })
            .resolve((r) => r.json())
            .get();
    } catch (e) {
        res = {
            error: "wrong code",
        };
    }
    return await res;
}

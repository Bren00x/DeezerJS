//https://api.deezer.com/
import wretch from "wretch";

const api = wretch("https://jsonplaceholder.typicode.com", { mode: "cors" })
  .errorType("json")
  .resolve((r) => r.json());



  export default api;
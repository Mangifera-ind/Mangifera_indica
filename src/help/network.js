import axios from "axios";

export async function ApiGet(url, params, headers= {}) {
let getCall
    try {
       getCall = await axios.get(url, {
        params: params,
        headers: headers
    });
    }
    catch(error) {
      console.log(error)
    }

return getCall;
  }
  
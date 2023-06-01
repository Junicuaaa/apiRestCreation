import { POST } from "../clientesapi.js";

let ws = async(data) =>{
    let res = await POST(data)
    console.log(res)
}

self.addEventListener("message", (e)=>{
    ws(e.data)
})
import {GET, POST} from "./js/clientesapi.js"

const FORM = document.querySelector("#form");
FORM.addEventListener("submit", async(e)=>{
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target));
    let res = await POST(data);
    console.log(data)
    FORM.reset();
})
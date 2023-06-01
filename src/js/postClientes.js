export default {
    postcliente(){
        const ws = new Worker("src/js/services/clientesPostWS.js", {type:"module"});
        ws.postMessage("hola")
        const FORM = document.querySelector("#form");
        FORM.addEventListener("submit", (e)=>{
            e.preventDefault();
            const data = Object.fromEntries(new FormData(e.target));
            ws.postMessage(data)
            FORM.reset();
        })
    }
}
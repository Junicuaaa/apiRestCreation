import reloadGet from "./getClientes.js"
export default {
    postcliente(){
        const ws = new Worker("src/js/services/clientesPostWS.js", {type:"module"});
        const FORM = document.querySelector("#form");
        FORM.addEventListener("submit", (e)=>{
            let res = window.confirm("Estás segura de guardar esa informacion?")
            if (res) {
                e.preventDefault();
                const data = Object.fromEntries(new FormData(e.target));
                ws.postMessage(data)
                FORM.reset();
                reloadGet.getAllClientes();
                location.reload();
            }
        })
    }
}
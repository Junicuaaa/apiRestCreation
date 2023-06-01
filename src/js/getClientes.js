export default {
    getAllClientes(){
        const ws = new Worker("src/js/services/clientesGetAllWS.js", {type: "module"});
        ws.postMessage("hola");
        const table = document.querySelector(".main-table");
        ws.addEventListener("message", (e)=>{
            console.log(e.data);
            table.innerHTML = null
            table.insertAdjacentHTML("afterbegin", e.data);
        })
    }
}
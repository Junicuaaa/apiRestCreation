import {GETALL} from "../clientesapi.js"

let ws = async()=>{
    let data = await GETALL();
    let dataSorted = data.reverse();
    let html = ``;
    dataSorted.forEach(element => {
        html += `
            <tr>
                <td>${element.name}</th>
                <td>${element.phone}</th>
                <td><button type="button" class="${element._id} btn btn-dark">Descripcion</button></th>
                <td><button type="button" class="${element._id} edit btn btn-info">Editar</button></th>
                <td><button type="button" class="${element._id} delete btn btn-danger">Borrar</button></th>
            </tr>
        `
        return html
    });
    return html
}

self.addEventListener("message", async(e)=>{
    let res = await ws();
    postMessage(res)
})
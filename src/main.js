const FORM = document.querySelector("#form");
FORM.addEventListener("submit", async(e)=>{
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target));
    await fetch("http://localhost:9000/api/users",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    }).then((res)=>console.log(res)).catch((error)=> console.log(error))
    FORM.reset();
})
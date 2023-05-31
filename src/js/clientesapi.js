const url = "http://localhost:9000/api/";
const header = {"Content-Type": "application/json"};

export const GET = async()=>{
    try {
        const res = await fetch(`${url}/users`);
        const data = await res.json()   
        return data
    } catch (error) {
        console.log(error);
    }
};

export const POST = async(p1)=>{
    try {
        const res = await fetch(`${url}/users`,{
            method: "POST",
            headers: header,
            body: JSON.stringify(p1)
        });
        const data = await res.json()   
        return data
    } catch (error) {
        console.log(error);
    }
}

export const GETbyName = async(name)=>{
    try {
        const res = await fetch(`${url}/users/name/${name}`);
        const data = await res.json()   
        return data
    } catch (error) {
        console.log(error);
    }
};

export const GETbyPhone = async(phone)=>{
    try {
        const res = await fetch(`${url}/users/phone/${phone}`);
        const data = await res.json()   
        return data
    } catch (error) {
        console.log(error);
    }
};


export const DELETE = async(id)=>{
    try {
        const res = await fetch(`${url}/users/${id}`, {
            method: "DELETE",
            headers: header,
        });
        const data = await res.json()   
        return data
    } catch (error) {
        console.log(error);
    }
};


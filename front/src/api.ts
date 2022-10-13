import { IUser } from "./interfaces"

export async function getAllUsers(){
    const requset = await fetch('http://127.0.0.1:3002/')
    const data =  await requset.json() as Array<IUser>
    return data
}

export async function getUser(id: number){
    const requset = await fetch(`http://127.0.0.1:3002/?id=${id}`)
    const data = await requset.json() as IUser
    console.log(requset);
    
    return data
}
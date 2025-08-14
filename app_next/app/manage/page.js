import axios from "axios"
import { headers } from "next/headers"
import Link from "next/link"

async function getContent(){
    const response = await axios.get('https://689703ea250b078c2040bc27.mockapi.io/data')
    return response.data
}

export default async function Page(){
    const headersRequest = headers()
    const user = JSON.parse(headersRequest.get('user'))
    const dataUser = await getContent()
    return(
        <div>
            <h1>{ user.email }</h1>
            <h1>Page Manage</h1>
                            <div>
            {
                dataUser.map((data,index) =>(
                    <div className="my-3" key={index}>
                        {data.id}
                        {data.name}
                        <Link href={`/manage/${data.id}`} className=" bg-amber-50 mx-4 rounded-2xl text-black p-1">Go to read content...</Link>
                    </div>
                ))
            }
        </div>
        </div>
    )
}
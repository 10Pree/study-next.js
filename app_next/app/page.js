import axios from "axios"
import Link from "next/link"

async function getContent(){
    const response = await axios.get('https://689703ea250b078c2040bc27.mockapi.io/data')
    return response.data
}

export default async function page() {
    const data = await getContent()
    console.log(data)
    return(
      <div>
                <div>
            {
                data.map((data,index) =>(
                    <div className="my-3" key={index}>
                        {data.id}
                        {data.name}
                        <Link href={`/content/${data.id}`} className=" bg-amber-50 mx-4 rounded-2xl text-black p-1">Go to read content...</Link>
                    </div>
                ))
            }
        </div>
      </div>
    )
}
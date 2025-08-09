import axios from "axios"

async function getContent(){
    const response = await axios.get('https://689703ea250b078c2040bc27.mockapi.io/data')
    return response.data
}

export default async function page() {
    const data = await getContent()
    console.log(data)
    return(
        <div>
            {
                data.map((data,index) =>(
                    <div key={index}>
                        {data.id}
                        {data.name}
                    </div>
                ))
            }
        </div>
    )
}
import axios from "axios"

async function getContent(slug) {
    const response = await axios.get(`https://689703ea250b078c2040bc27.mockapi.io/data/${slug}`)
    if(!response){
        throw new Error("cannot fetch content")
    }
    return response.data
}

export default async function page({ params}){
    const content = await getContent(params.slug)
    return(
        <div>
            <div>
                ID : {content.id}
            </div>
            <div>
                Name : {content.name}
            </div>
            <div>
                content : {content.content}
            </div>
        </div>
    )
}
'use client'
import axios from "axios"
import { useState, useEffect } from "react"

async function getData(){
    const response = await axios.get('https://689703ea250b078c2040bc27.mockapi.io/data')
    return response.data
}

export default function Page(){
    const [data, setData] = useState([])

    const initData = async() =>{
        try{
            const result = await getData()
            setData(result)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() =>{
        initData()
    }, [])
    console.log(data)
    return(
        <div>
            {
                data.map((data, index) =>(
                    <div key={index}>
                        {data.id}
                        {data.name}
                    </div>
                ))
            }
        </div>
    )
}
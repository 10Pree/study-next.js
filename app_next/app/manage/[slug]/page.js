'use client'

import axios from "axios"
import { use, useEffect, useState } from "react"

async function getContent(slug) {
    const response = await axios.get(`https://689703ea250b078c2040bc27.mockapi.io/data/${slug}`)
    if (!response) {
        throw new Error("cannot fetch content")
    }
    return response.data
}


export default function Page({ params }) {
    const { slug } = use(params)
    const [contentState, setContentState] = useState({
        name: '',
        content: ''
    })

    const initContent = async () => {
        try {
            const result = await getContent(slug)
            setContentState(result)
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setContentState((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }


    async function handleSubmit(event) {
        event.preventDefault()
        console.log(contentState)
        try {
            const response = await axios.put(`https://689703ea250b078c2040bc27.mockapi.io/data/${slug}`, contentState )
            if (!response) {
                throw new Error("cannot fetch content")
            }
            console.log("submit Successfully", response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        initContent()
    }, [])

    return (
        <form onSubmit={handleSubmit}>
            <div >
                ID : { slug }
            </div>
            <div>
                Name : {contentState.name}
                <input name="name" type="text" value={contentState.name} onChange={handleChange} />
            </div>
            <div>
                content : {contentState.content}
                <input name="content" type="text" value={contentState.content} onChange={handleChange} />
            </div>
            <button>Update</button>
        </form>
    )
}
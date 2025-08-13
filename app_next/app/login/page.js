'use client'
import { useActionState  } from "react"
import { Login } from "./actions"


export default function Page() {
    const initState = {
        message: ''
    }
    const [state, formActions, pending] = useActionState(Login, initState)
    return (
        <div>
            <form action={formActions}>
                <div>
                    <label>email</label>
                    <input className="bg-white" type="email" name="email" />
                </div>
                <div>
                    <label>password</label>
                    <input className="bg-white" type="password" name="password" />
                </div>
                <div>Message: {state.message}</div>
                <button className="p-2 bg-blue-600" type="submit">{pending ? 'กำลังเข้าสู่ระบบ…' : 'Login'}</button>
            </form>
        </div>
    )
}
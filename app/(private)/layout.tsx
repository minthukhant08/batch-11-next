import NavBar from "@/components/nav-bar"
import { redirect } from "next/navigation"
import { ReactNode } from "react"

type PublicLayoutProp = {
    children: ReactNode
}

export default function PrivateLayout({ children } : PublicLayoutProp){
    //if session not found
    //redirect to login 

    // if (false) {
    //     redirect("/")
    // }
    return <div>
        <NavBar/>
        {children}
    </div>
}
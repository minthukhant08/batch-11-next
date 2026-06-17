import NavBar from "@/components/nav-bar"
import { redirect } from "next/navigation"
import { ReactNode } from "react"

type PublicLayoutProp = {
    children: ReactNode
}

export default function PublicLayout({ children } : PublicLayoutProp){
    //if session found
    //redire to dashbaord
    // if (true) {
    //     redirect("/test")
    // }
    return <div>
        <NavBar/>
        {children}
    </div>
}
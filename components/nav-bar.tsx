import Link from "next/link";

export default function NavBar(){
    return <div className="flex w-full gap-4">
        <div>
            <Link href="/">Home</Link>
        </div>
        <div>
            <Link href="/products">Products</Link>
        </div>
        <div>
            <Link href="/about">About</Link>
        </div>
        <div>
            <Link href="/test">Test</Link>
        </div>
    </div>
}
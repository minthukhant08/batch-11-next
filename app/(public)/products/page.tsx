'use client'
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from '@/api'

export type Product = {
  id: number,
  productName: string
}

export default function Product() {
  const [ text, setText ] = useState<string>("")
  const [proudcts , setProudcts ] = useState<Product[]>([])

  const fetchProducts = async () => {
    const res = await axios.get("/products")
    const data = res.data
    
    setProudcts(data)
  }

  const createProudcts = async () => {
    await axios.post("/products", { name: text})
    router.refresh()
  }

  useEffect(() => {
    setTimeout(() => {
        fetchProducts()
    }, 2000);
      
  }, [])
  
  const router = useRouter()
  const handleClick = () => {
    console.log("test")
  }
  return (
    <div >
      Products
      <button onClick={handleClick}>go to test</button>
      <button onClick={createProudcts}>Create Product</button>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      {
        proudcts.map((p, i) => <div key={i}>{p.productName}</div>)
      }
    </div>
  );
}

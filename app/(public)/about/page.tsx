import { Product } from "../products/page";


export default async function About() {

 const test = await new Promise((resolve, reject) => {
   setTimeout(resolve, 3000);
 })


 const res = await fetch("http://localhost:3001/products")
 const data: Product[] = await res.json()
  return (
    <div >
      hello
      {
        
        data.map((d, i) => <div key={i}>{d.productName}</div>)
      }
    </div>
  );
}

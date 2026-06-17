import { productAPI } from "@/api/products";

export default async function About() {

 const test = await new Promise((resolve, reject) => {
   setTimeout(resolve, 1000);
 })

 const res = await productAPI.all()
 const data = res.data
  return (
    <div >
      hello
      {
        
        data.map((d, i) => <div key={i}>{d.productName}</div>)
      }
    </div>
  );
}

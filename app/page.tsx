import { productsAPI } from "@/api/products";
import CategoryTab from "@/components/category-tab";
import ProductCard from "@/components/product-card/page";

export default async function HomePage(){
    const products = await productsAPI.all()
    return <div>
       <CategoryTab/>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6.5 pt-6">
            {
                products.data.map((p) => <ProductCard 
                    key={p.id}
                    product={p}
                    isAdded={false}
                />)
            }
       </div>
    </div>
}
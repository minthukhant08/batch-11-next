import { productsAPI } from "@/api/products";
import CategoryTab from "@/components/category-tab";
import DialogTest from "@/components/dialog-test/dialog-test";
import ProductCard from "@/components/product-card/page";
import { Button } from "@/components/ui/button";
import { capitalize } from "@/util/string";

type SearchParams = {
    category: string
}
export default async function HomePage({ searchParams } : { searchParams: Promise<SearchParams>}){
    const { category } = await searchParams
    const products = await productsAPI.all(category ? (category == 'all' ? '' : "?category=" + capitalize(category)) : "")
    return <div>
       <CategoryTab/>
       <DialogTest/>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6.5 pt-6">
            {
                products?.data.map((p) => <ProductCard 
                    key={p.id}
                    product={p}
                />)
            }
       </div>
    </div>
}
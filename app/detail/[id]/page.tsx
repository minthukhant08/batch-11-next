import { productsAPI } from "@/api/products"
import BackButton from "@/components/back-button"
import ProductCard from "@/components/product-card/page"

type DetailParams = {
    id: string
}

export default async function DetailPage({ params }: { params: Promise<DetailParams> }) {
    const { id } = await params
    const result = await productsAPI.show(id)
    return <div>
        <BackButton/>
        {
            result ? <ProductCard product={result.data}/> : "product not found"
        }
    </div>
}
import React from 'react'
import { Product } from '@prisma/client'
function ProductsList({ products }: { products: Product[] }) {
    return (
        <div>
            product list
        </div>
    )
}

export default ProductsList

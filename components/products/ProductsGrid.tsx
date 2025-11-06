import React from 'react'
import { Product } from '@prisma/client'

function ProductsGrid({ products }: { products: Product[] }) {
    return (
        <div>
            Product List
        </div>
    )
}

export default ProductsGrid

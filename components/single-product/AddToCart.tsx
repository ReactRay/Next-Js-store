
import { Button } from '../ui/button'
import React from 'react'

function AddToCart({ productId }: { productId: string }) {
    return (
        <Button className='capitalize mt-8' size='lg'>  add to cart</Button>

    )
}

export default AddToCart

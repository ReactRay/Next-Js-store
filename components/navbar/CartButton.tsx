
import Link from 'next/link'
import { Button } from '../ui/button'
import { LuShoppingCart } from 'react-icons/lu'
import React from 'react'

async function CartButton() {

    const numItemsInCart = 9


    return (
        <Button asChild variant={'outline'} size={'icon'} className='flex justify-center items-center relative'>

            <Link href={'/'}>
                <LuShoppingCart className='w-6 h-6' />
                <span className='absolute top-0 right-0 bg-red-500 text-white w-4 h-4 rounded-full flex justify-center items-center'>
                    {numItemsInCart}
                </span>
            </Link>

        </Button>
    )
}

export default CartButton

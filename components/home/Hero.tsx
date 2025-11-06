

import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import HeroCarousel from './HeroCarousel'

function Hero() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-25 items-center'>
            <div>
                <h1 className='max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl '>
                    We are changing the way people shop
                </h1>
                <p className='mt-8 max-w-xl text-lg leading-8 text-muted-foreground'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A earum aliquam exercitationem fugiat obcaecati animi. Quisquam suscipit explicabo quod quibusdam.
                </p>
                <Button asChild size='lg' className='mt-10'>
                    <Link href='/products'>Shop Now</Link>
                </Button>
            </div>
            <HeroCarousel />
        </div>
    )
}

export default Hero


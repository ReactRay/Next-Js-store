
import { FaCode } from "react-icons/fa6";
import { Button } from "../ui/button";
import Link from "next/link";
import React from 'react'

function Logo() {
    return (
        <Button size={'icon'} asChild>
            <Link href='/' >
                <FaCode className='w-6 h-6' />
            </Link>
        </Button>
    )
}

export default Logo

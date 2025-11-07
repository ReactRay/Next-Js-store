'use client'
import { useToast } from "../ui/use-toast"
import { SignOutButton } from "@clerk/nextjs"
import Link from "next/link"
function SignOutLink() {
    const { toast } = useToast()


    function handleLogOut() {
        toast({ description: 'log out successfull' })
    }

    return (
        <SignOutButton  >
            <Link className='w-full text-left' href='/' onClick={handleLogOut}>log out</Link>
        </SignOutButton>
    )
}

export default SignOutLink

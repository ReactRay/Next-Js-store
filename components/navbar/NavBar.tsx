
import Logo from "./Logo"

import Container from "../global/Container"
import NavSearch from "./NavSearch"
import CartButton from "./CartButton"
import DarkMode from "./DarkMode"
import LinksDropDown from "./LinksDropDown"
import { Suspense } from "react"
function NavBar() {
    return (
        <nav className="border-b">
            <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8">
                <Logo />
                <Suspense>
                    <NavSearch />
                </Suspense>


                <div className="flex gap-4 items-center">
                    <CartButton />
                    <DarkMode />
                    <LinksDropDown />

                </div>

            </Container>
        </nav>
    )
}

export default NavBar

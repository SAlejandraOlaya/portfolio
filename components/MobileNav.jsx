"use client"

import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { CiMenuFries } from "react-icons/ci"

const Links = [
    {
        name: "inicio",
        path: "/"
    },
    {
        name: "servicios",
        path: "/services"
    },
    {
        name: "sobre mi",
        path: "/resume"
    },
    {
        name: "contacto",
        path: "/contact"
    }
]
const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex items-center justify-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col justify-start pt-8">
                {/*logo */}
                <div className="mb-40 text-2xl text-center mt-28">
                    <Link href="/">
                        <h1 className="text-3xl font-semibold text">Alejandra <span className="text-accent">.</span></h1>
                    </Link>

                </div>
                {/*nav */}
                <nav className="flex flex-col items-center justify-center gap-8">
                    {Links.map((link, i) => {
                        return <Link href={link.path} key={i} className={`${link.path === pathname && "text-accent border-b-2 border-accent"}text-xl capitalize hover:text-accent transition-all`}> {link.name}</Link>
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}
export default MobileNav;
import Link from "next/link"
import Image from "next/image"

const navigation = [
    { id: 1, name: "About", href: "#about" },
    { id: 2, name: "Projects", href: "#projects" },
    { id: 3, name: "Stack", href: "#techstack" },
    { id: 4, name: "Contact", href: "#" },
]

function NavBar() {
    return (
        <header className="sticky inset-x-0 top-0 z-50 p-4">
            <nav className="flex items-center justify-between max-w-3xl mx-auto p-2 lg:px-3 backdrop-blur-[32px] bg-[rgba(255,255,255,0.85)] shadow-[rgb(228,229,233)_0px_0px_0px_0.5px,rgba(228,229,233,0.6)_0px_0px_0px_1px,rgb(249,249,251)_0px_0px_0px_3.5px,rgb(243,244,247)_0px_0px_0px_4px] rounded-2xl">
                <div className="flex lg:flex-1">
                    <Link href="/" className="flex items-center gap-x-2">
                        <Image src="/img/icon.png" width={32} height={32} priority={false} className="rounded-lg" alt="muideen photo" />
                        <span className="hidden lg:block">Asiful</span>
                    </Link>
                </div>
                <div className="flex gap-x-4 pr-2">
                    {navigation.map((item) => (
                        <Link key={item.name} href={item.href} className="font-medium leading-6 text-[#171618]" title={item.name}>
                            {item.name}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    )
}

export { NavBar }
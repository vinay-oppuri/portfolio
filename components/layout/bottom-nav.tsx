import { BottomNavLinks } from "@/lib/data"
import Link from "next/link"

const BottomNav = () => {
    return (
        <nav className="fixed bottom-2 left-2 right-2  z-50 md:hidden rounded-full border backdrop-blur-md bg-background/70 px-3">
            <div className="flex h-14 justify-between items-center">
                {BottomNavLinks.map(({ href, icon: Icon, label: Label }) => {
                    return (
                        <Link
                            key={href}
                            href={href}
                            className="flex flex-col items-center justify-center text-xs text-muted-foreground gap-1 px-4 py-3"
                        >
                            <div className='flex items-center justify-center rounded-full'>
                                <Icon className="size-4" />
                            </div>
                            <div className='flex items-center justify-center rounded-full' >
                                {Label}
                            </div>
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}
export default BottomNav
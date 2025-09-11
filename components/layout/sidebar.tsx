'use client'

import Link from "next/link"
import { useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, MenuIcon } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { navLinks } from "@/lib/data"

export const Sidebar = () => {
    const [open, setOpen] = useState(false)
    const { setTheme, theme } = useTheme()

    const handleClick = () => setOpen(false)

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <MenuIcon size="16" />
                </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-[235px] px-3 bg-sidebar/80 backdrop-blur-xs text-white shadow-xl">

                <Link href="/" className="flex items-center justify-center px-7 py-3 border-b" onClick={handleClick}>
                    <Image src='./light-logo.svg' alt="Logo" width={100} height={100} className="dark:hidden h-20 md:h-25 w-20 md:w-25" />
                    <Image src='./dark-logo.svg' alt="Logo" width={100} height={100} className="not-dark:hidden h-20 md:h-25 w-20 md:w-25" />
                    <span className="text-2xl md:text-3xl font-bold text-orange-500">.AI</span>
                </Link>
                {/* Navigation */}
                <nav className="flex flex-col gap-3 mt-4">
                    {navLinks.map((item) => {
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={handleClick}
                                className={cn(
                                    "flex items-center w-full h-10 gap-3 px-4 rounded-lg text-sidebar-foreground text-sm transition-all hover:bg-white/10",
                                )}
                            >
                                <div className="flex items-center gap-5 text-rimary">
                                <item.icon className="size-5"/>
                                {item.label}
                                </div>
                            </Link>
                        )
                    })}
                </nav>

                {/* Theme Toggle */}
                <div className="mt-4 px-1 pt-6 border-t flex items-center justify-between text-sidebar-foreground">
                    <span className="text-sm font-medium">Theme</span>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        {theme === "dark" ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-blue-500" />}
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    )
}

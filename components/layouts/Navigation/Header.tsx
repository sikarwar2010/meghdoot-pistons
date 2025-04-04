"use client"
import React from "react";
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "./theme-toggle";

const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
        name: "Products",
        path: "/products",
        submenu: [
            { name: "Pistons", path: "/products/pistons" },
            { name: "Piston Pins", path: "/products/pins" },
            { name: "Piston Rings", path: "/products/rings" },
            { name: "Cylinder Liners", path: "/products/liners" },
        ],
    },
    { name: "Quality", path: "/quality" },
    { name: "Blog", path: "/blog" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
]

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300",
                scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-background",
            )}
        >
            <div className="flex h-16 items-center justify-between px-4 bg-muted">
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1689936685/logo_jjwhbb.png"
                        alt="meghdoot logo"
                        width={70}
                        height={70}
                        className="cursor-pointer px-2"
                    />
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >

                        <span className="text-2xl font-semibold font-sans">Meghdoot</span>
                        <span className="text-2xl font-semibold text-primary font-sans">Pistons</span>
                    </motion.div>
                </Link>

                <nav className="hidden md:flex items-center space-x-6">
                    {navItems.map((item) => {
                        if (item.submenu) {
                            return (
                                <DropdownMenu key={item.path}>
                                    <DropdownMenuTrigger asChild>
                                        <button
                                            className={cn(
                                                "flex items-center text-sm font-medium transition-colors hover:text-primary",
                                                pathname.startsWith(item.path) ? "text-primary" : "text-muted-foreground",
                                            )}
                                        >
                                            {item.name} <ChevronDown className="ml-1 h-4 w-4" />
                                        </button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        {item.submenu.map((subItem) => (
                                            <DropdownMenuItem key={subItem.path} asChild>
                                                <Link
                                                    href={subItem.path}
                                                    className={cn("w-full", pathname === subItem.path ? "text-primary" : "")}
                                                >
                                                    {subItem.name}
                                                </Link>
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            )
                        }

                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary relative",
                                    pathname === item.path ? "text-primary" : "text-muted-foreground",
                                )}
                            >
                                {item.name}
                                {pathname === item.path && (
                                    <motion.div
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                                        layoutId="navbar-indicator"
                                        transition={{ type: "spring", duration: 0.6 }}
                                    />
                                )}
                            </Link>
                        )
                    })}
                    <ThemeToggle />
                </nav>

                <div className="md:hidden flex items-center">
                    <ThemeToggle />
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                        <Menu className="h-6 w-6" />
                    </Button>
                </div>
            </div>

            {/* Mobile menu */}
            <motion.div
                className={cn("fixed inset-0 z-50 bg-background md:hidden", isOpen ? "block" : "hidden")}
                initial={{ opacity: 0, x: "100%" }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
                transition={{ duration: 0.3 }}
            >
                <div className="flex justify-end p-4">
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Close menu">
                        <X className="h-6 w-6" />
                    </Button>
                </div>
                <nav className="flex flex-col items-center space-y-6 p-4">
                    {navItems.map((item) => {
                        if (item.submenu) {
                            return (
                                <div key={item.path} className="w-full flex flex-col items-center">
                                    <span className="text-lg font-medium mb-2">{item.name}</span>
                                    <div className="flex flex-col items-center space-y-4 mb-4">
                                        {item.submenu.map((subItem) => (
                                            <Link
                                                key={subItem.path}
                                                href={subItem.path}
                                                onClick={() => setIsOpen(false)}
                                                className={cn(
                                                    "text-base transition-colors hover:text-primary",
                                                    pathname === subItem.path ? "text-primary" : "text-muted-foreground",
                                                )}
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )
                        }

                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "text-lg font-medium transition-colors hover:text-primary",
                                    pathname === item.path ? "text-primary" : "text-muted-foreground",
                                )}
                            >
                                {item.name}
                            </Link>
                        )
                    })}
                </nav>
            </motion.div>
        </header>
    )
}

"use client";
import React from "react";
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ExternalLink } from "lucide-react"

export default function Footer() {
    return (
        <>
            <footer className="bg-muted py-12">
                <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 mx-auto">
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <h3 className="text-lg font-bold">Meghdoot Pistons</h3>
                        </div>
                        <p className="text-sm text-muted-foreground text-justify">
                            Leading global exporter of precision-engineered automotive components since 1957, serving customers across
                            50+ countries with premium quality pistons, pins, rings, and cylinder liners.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Export Products</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/products/pistons"
                                    className="text-sm text-muted-foreground hover:text-primary flex items-center"
                                >
                                    <ExternalLink className="h-3 w-3 mr-2" />
                                    Pistons
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/products/pins"
                                    className="text-sm text-muted-foreground hover:text-primary flex items-center"
                                >
                                    <ExternalLink className="h-3 w-3 mr-2" />
                                    Piston Pins
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/products/rings"
                                    className="text-sm text-muted-foreground hover:text-primary flex items-center"
                                >
                                    <ExternalLink className="h-3 w-3 mr-2" />
                                    Piston Rings
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/products/liners"
                                    className="text-sm text-muted-foreground hover:text-primary flex items-center"
                                >
                                    <ExternalLink className="h-3 w-3 mr-2" />
                                    Cylinder Liners
                                </Link>
                            </li>
                            <li>
                                <Link href="/quality" className="text-sm text-muted-foreground hover:text-primary flex items-center">
                                    <ExternalLink className="h-3 w-3 mr-2" />
                                    Quality Standards
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Quick links</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-2">
                                <Link href={"/"} className="text-sm text-muted-foreground hover:text-primary flex items-center">
                                    <span className="text-sm text-muted-foreground">Home</span>
                                </Link>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Link href={"/about"} className="text-sm text-muted-foreground hover:text-primary flex items-center">
                                    <span className="text-sm text-muted-foreground">About</span>
                                </Link>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Link href={"/blog"} className="text-sm text-muted-foreground hover:text-primary flex items-center">
                                    <span className="text-sm text-muted-foreground">Blog</span>
                                </Link>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Link href={"/events"} className="text-sm text-muted-foreground hover:text-primary flex items-center">
                                    <span className="text-sm text-muted-foreground">Events</span>
                                </Link>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Link href={"/contact"} className="text-sm text-muted-foreground hover:text-primary flex items-center">
                                    <span className="text-sm text-muted-foreground">Contact</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-2">
                                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <span className="text-sm text-muted-foreground">
                                    6, Industrial Estate, Nunhai, Agra-282006, Uttar Pradesh India
                                </span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Phone className="h-5 w-5 text-primary" />
                                <span className="text-sm text-muted-foreground">Export Hotline: 9719029044
                                    |
                                    9760415467
                                </span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Mail className="h-5 w-5 text-primary" />
                                <span className="text-sm text-muted-foreground">meghdootpistons@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="container mt-8 pt-8 border-t mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-muted-foreground">
                            &copy; {new Date().getFullYear()} Meghdoot Pistons. All rights reserved.
                        </p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                                Development By: Ringerlabs Technologies
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

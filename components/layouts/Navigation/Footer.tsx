"use client";
import React from 'react';
import Link from "next/link"
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react"
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";


export default function Footer() {
    return (
        <>
            <footer className="bg-muted py-12">
                <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 mx-auto">
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <h3 className="text-lg font-bold">Meghdoot Pistons</h3>
                        </div>
                        <p className="text-sm text-muted-foreground text-justify capitalize">
                        MEGHDOOT PISTONS PRIVATE LIMITED is an ISO 9001:2015 certified Company. It was incorporated in the year 1967 to manufacture Pistons, GUDGEON PINS, CYLINDER LINERS/SLEEVES, CYLINDER BLOCK & PISTON RINGS suitable for Automobiles, Stationary Engine, Tractors, Trucks, Marine Engines, Heavy Duty Machines & Air, Gas and Refrigeration Compressor etc as per International Specifications, Dimensions and Quality requirements using specified Raw materials.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <FaFacebookF className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <FaTwitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <FaLinkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Export Products</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/pistons"
                                    className="text-sm text-muted-foreground hover:text-primary flex items-center"
                                >
                                    <ExternalLink className="h-3 w-3 mr-2" />
                                    Pistons
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/pistonpins"
                                    className="text-sm text-muted-foreground hover:text-primary flex items-center"
                                >
                                    <ExternalLink className="h-3 w-3 mr-2" />
                                    Piston Pins
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/pistonrings"
                                    className="text-sm text-muted-foreground hover:text-primary flex items-center"
                                >
                                    <ExternalLink className="h-3 w-3 mr-2" />
                                    Piston Rings
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/cylinderliners"
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
                                <Link href={"/"} className="text-sm text-muted-foreground flex items-center">
                                    <span className="text-sm text-muted-foreground hover:text-primary">Home</span>
                                </Link>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Link href={"/about"} className="text-sm text-muted-foreground flex items-center">
                                    <span className="text-sm text-muted-foreground hover:text-primary">About</span>
                                </Link>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Link href={"/blog"} className="text-sm text-muted-foreground flex items-center">
                                    <span className="text-sm text-muted-foreground hover:text-primary">Blog</span>
                                </Link>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Link href={"/events"} className="text-sm text-muted-foreground flex items-center">
                                    <span className="text-sm text-muted-foreground hover:text-primary">Events</span>
                                </Link>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Link href={"/contact"} className="text-sm text-muted-foreground flex items-center">
                                    <span className="text-sm text-muted-foreground hover:text-primary">Contact</span>
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
                            <p className="text-sm text-muted-foreground">
                                Development By:
                                <Link href={"https://ringerlabs.com"}>
                                    <span className="text-primary animate-pulse">
                                        Ringerlabs Technologies
                                    </span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

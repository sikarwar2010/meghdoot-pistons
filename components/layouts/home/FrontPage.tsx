'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ArrowRight, Award, CheckCircle, Factory, Shield, Truck, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const FrontPage = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    }

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    return (
        <>
            <div className="flex flex-col min-h-screen">
                {/* Hero Section */}
                <section className="relative py-20 md:py-28 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1690185819/dreamstime_xxl_21865382_yqefgr.jpg"
                            alt="Global manufacturing facility"
                            fill
                            className="object-cover object-center opacity-20 dark:opacity-10"
                            priority
                        />
                    </div>
                    <div className="container relative z-10 mx-auto">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                            className="max-w-3xl mx-auto text-center space-y-6"
                        >
                            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                                Premium Engine Components for <span className="text-primary">Global Automotive Industries</span>
                            </motion.h1>
                            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground">
                                Precision-Engineered Pistons, Pins, Piston Rings, and Cylinder Liners trusted in Automotive market across 20+ countries.
                            </motion.p>
                            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                <Button asChild size="lg">
                                    <Link href="/pistons">
                                        Explore Products <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" asChild>
                                    <Link href="/contact">Contact Us</Link>
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Global Presence */}
                <section className="py-16 bg-muted/50">
                    <div className="container mx-auto">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="text-center mb-12"
                        >
                            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-4">
                                Global Presence
                            </motion.h2>
                            <motion.p variants={fadeIn} className="text-muted-foreground max-w-2xl mx-auto">
                                Global footprint includes Five Continents (North America, South America, Asia, Europe, Africa and CIS Countries).
                                Exporting to over <span className='font-bold'>20+</span> Countries
                                Selling over <span className='font-bold'>70000 pcs</span> Annually Engine Parts
                            </motion.p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-8"
                        >
                            <Image
                                src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1743750960/world-map_al39of.avif"
                                alt="Global map with Meghdoot Pistons locations"
                                fill
                                className="object-contain"
                            />
                            {/* Map markers would be positioned here */}
                        </motion.div>
                    </div>
                </section>

                {/* Products Section */}
                <section className="py-16">
                    <div className="container mx-auto">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="text-center mb-12"
                        >
                            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-4">
                                Our Premium Products
                            </motion.h2>
                            <motion.p variants={fadeIn} className="text-muted-foreground max-w-2xl mx-auto">
                                Engineered with precision and manufactured in India with the highest quality materials to ensure optimal performance and durability.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                        >
                            {[
                                {
                                    title: "Pistons",
                                    description: "High-Performance Pistons made of Aluminium Alloy, made for maximum durability and thermal efficiency.",
                                    image: "https://res.cloudinary.com/dfvtnrisi/image/upload/v1691687902/piston_dbfew1.jpg",
                                    link: "/pistons",
                                },
                                {
                                    title: "Piston Pins",
                                    description: "Precision-manufactured pins designed for optimal load distribution and reduced friction.",
                                    image: "https://res.cloudinary.com/dfvtnrisi/image/upload/v1691858760/pistonpin_2_uzvt1d.jpg",
                                    link: "/pistonpins",
                                },
                                {
                                    title: "Piston Rings",
                                    description: "Advanced rings providing superior sealing, oil control, and heat transfer properties.",
                                    image: "https://res.cloudinary.com/dfvtnrisi/image/upload/v1691685606/dreamstime_xxl_78054868_xuyndp.jpg",
                                    link: "/pistonrings",
                                },
                                {
                                    title: "Cylinder Liners",
                                    description: "Durable liners with excellent wear resistance and thermal conductivity characteristics.",
                                    image: "https://res.cloudinary.com/dfvtnrisi/image/upload/v1744877533/cylinder_lrqpnl.jpg",
                                    link: "/cylinderliners",
                                },
                            ].map((product, index) => (
                                <motion.div key={index} variants={fadeIn}>
                                    <Card className="h-full overflow-hidden group">
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={product.image || "/placeholder.svg"}
                                                alt={product.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                        <CardContent className="p-6 flex flex-col h-[calc(100%-12rem)]">
                                            <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                                            <p className="text-muted-foreground flex-grow mb-4 text-justify">{product.description}</p>
                                            <Button asChild variant="outline" className="w-full mt-auto">
                                                <Link href={product.link}>
                                                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                                </Link>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 bg-background/40">
                    <div className="container mx-auto">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="text-center mb-12"
                        >
                            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-4">
                                Why Choose Meghdoot Pistons
                            </motion.h2>
                            <motion.p variants={fadeIn} className="text-muted-foreground max-w-2xl mx-auto">
                                With over 58 years of experience, we have established ourselves as a trusted global supplier for automotive industries worldwide.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            <motion.div variants={fadeIn}>
                                <Card>
                                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                                        <div className="p-3 rounded-full bg-primary/10">
                                            <Award className="h-8 w-8 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold">Global Quality Standards</h3>
                                        <p className="text-muted-foreground">
                                            ISO 9001:2015 certified manufacturing processes with rigorous quality
                                            control.
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            <motion.div variants={fadeIn}>
                                <Card>
                                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                                        <div className="p-3 rounded-full bg-primary/10">
                                            <Factory className="h-8 w-8 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold">Advanced Manufacturing</h3>
                                        <p className="text-muted-foreground">
                                            State-of-the-art facilities equipped with the latest technology for precision manufacturing.
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            <motion.div variants={fadeIn}>
                                <Card>
                                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                                        <div className="p-3 rounded-full bg-primary/10">
                                            <Truck className="h-8 w-8 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold">Global Distribution</h3>
                                        <p className="text-muted-foreground">
                                            Efficient logistics network ensuring timely delivery to customers across the globe with local
                                            support.
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            <motion.div variants={fadeIn}>
                                <Card>
                                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                                        <div className="p-3 rounded-full bg-primary/10">
                                            <Shield className="h-8 w-8 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold">Global Warranty Protection</h3>
                                        <p className="text-muted-foreground">
                                            Comprehensive fitment Warranty on all products, backed by excellent customer reviews and customer support.
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            <motion.div variants={fadeIn}>
                                <Card>
                                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                                        <div className="p-3 rounded-full bg-primary/10">
                                            <CheckCircle className="h-8 w-8 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold">OEM Specifications</h3>
                                        <p className="text-muted-foreground">
                                            Products manufactured to meet or exceed original equipment manufacturer specifications for global
                                            markets.
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            <motion.div variants={fadeIn}>
                                <Card>
                                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                                        <div className="p-3 rounded-full bg-primary/10">
                                            <Globe className="h-8 w-8 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold">Global R&D Network</h3>
                                        <p className="text-muted-foreground">
                                            Research centers across three continents collaborating to develop cutting-edge solutions for global
                                            markets.
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default FrontPage;

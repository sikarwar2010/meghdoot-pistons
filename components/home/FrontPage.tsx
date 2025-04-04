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
                <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1743750098/high-piston_twfiw0.png"
                            alt="Global manufacturing facility"
                            fill
                            className="object-cover opacity-20 dark:opacity-10"
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
                                Precision-engineered Pistons, Pins, Piston Rings, and Cylinder Liners trusted by automotive manufacturers
                                across 50+ countries.
                            </motion.p>
                            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                <Button asChild size="lg">
                                    <Link href="/products">
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
                                Meghdoot Piston Pvt Ltd global footprint includes more than 20 locations across four continents (South America, Far East Asia, Europe, East & West Africa and CIS Countries).
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
                                Engineered with precision and manufactured with the highest quality materials to ensure optimal
                                performance and durability.
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
                                    description: "High-performance pistons engineered for maximum durability and thermal efficiency.",
                                    image: "https://res.cloudinary.com/dfvtnrisi/image/upload/v1743756113/piston_ygly9t.png",
                                    link: "/products/pistons",
                                },
                                {
                                    title: "Piston Pins",
                                    description: "Precision-manufactured pins designed for optimal load distribution and reduced friction.",
                                    image: "https://res.cloudinary.com/dfvtnrisi/image/upload/v1743756498/piston-pins_ypvjps.png",
                                    link: "/products/pins",
                                },
                                {
                                    title: "Piston Rings",
                                    description: "Advanced rings providing superior sealing, oil control, and heat transfer properties.",
                                    image: "https://res.cloudinary.com/dfvtnrisi/image/upload/v1743756272/piston-rings_vyet7f.png",
                                    link: "/products/rings",
                                },
                                {
                                    title: "Cylinder Liners",
                                    description: "Durable liners with excellent wear resistance and thermal conductivity characteristics.",
                                    image: "https://res.cloudinary.com/dfvtnrisi/image/upload/v1743751874/cylinder-liner_gm0lqt.png",
                                    link: "/products/liners",
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
                                Why Choose Meghdoot Pistons
                            </motion.h2>
                            <motion.p variants={fadeIn} className="text-muted-foreground max-w-2xl mx-auto">
                                With over 35 years of experience, we have established ourselves as a trusted global partner for automotive
                                manufacturers worldwide.
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
                                            ISO 9001:2015, IATF 16949, and ISO 14001 certified manufacturing processes with rigorous quality
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
                                            Comprehensive warranty on all products, backed by excellent customer support in multiple languages.
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

                {/* Testimonials */}
                <section className="py-16">
                    <div className="container mx-auto">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="text-center mb-12"
                        >
                            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-4">
                                Trusted by Global Leaders
                            </motion.h2>
                            <motion.p variants={fadeIn} className="text-muted-foreground max-w-2xl mx-auto">
                                Our components power vehicles manufactured by the worlds leading automotive companies.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center"
                        >
                            {Array.from({ length: 6 }).map((_, i) => (
                                <div key={i} className="w-32 h-32 relative grayscale hover:grayscale-0 transition-all duration-300">
                                    <Image
                                        src={`/placeholder-logo.svg?text=Logo${i + 1}`}
                                        alt={`Automotive Client ${i + 1}`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mt-16 bg-muted rounded-lg p-8"
                        >
                            <div className="max-w-3xl mx-auto text-center">
                                <p className="text-lg italic mb-6">
                                    Meghdoot Pistons has been our trusted supplier for over a decade. Their commitment to quality,
                                    innovation, and global support has been instrumental in our success across international markets.
                                </p>
                                <div>
                                    <p className="font-bold">Thomas Schmidt</p>
                                    <p className="text-sm text-muted-foreground">Chief Procurement Officer, Global Motors Inc.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default FrontPage;

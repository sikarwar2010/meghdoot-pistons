"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Download, FileText, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ProductImageCarousel } from "./product-carousel"
import CustomerList from "./CustomerList"
import CustomerData from "./CustomerData"


const pistonImages = [
    {
        id: "1",
        src: "https://res.cloudinary.com/dfvtnrisi/image/upload/v1691655978/home1_tsgxb9.jpg",
        alt: "High-performance automotive piston",
    },
    {
        id: "2",
        src: "https://res.cloudinary.com/dfvtnrisi/image/upload/v1691655978/home2_hmyrxy.jpg",
        alt: "Racing piston with dome crown",
    },
    {
        id: "3",
        src: "https://res.cloudinary.com/dfvtnrisi/image/upload/v1691659786/home3_mf2azy.jpg",
        alt: "Diesel engine piston with cooling gallery",
    },
    {
        id: "4",
        src: "https://res.cloudinary.com/dfvtnrisi/image/upload/v1691655978/home4_jmxnkp.jpg",
        alt: "Lightweight forged piston for performance applications",
    },
]

export default function CylinderLinersPage() {
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
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1743751874/cylinder-liner_gm0lqt.png"
                        alt="Cylinder Liners manufacturing"
                        fill
                        className="object-cover opacity-20 dark:opacity-10"
                        priority
                    />
                </div>
                <div className="container relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-3xl mx-auto text-center space-y-6"
                    >
                        <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-bold tracking-tight">
                            Durable <span className="text-primary">Cylinder Liners</span>
                        </motion.h1>
                        <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground">
                            Exported to global markets, our cylinder liners provide exceptional wear resistance, thermal conductivity,
                            and dimensional stability for optimal engine performance.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Product Image Carousel */}
            <section className="py-12 bg-muted/30">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <ProductImageCarousel images={pistonImages} title="" />
                    </motion.div>
                </div>
            </section>

            {/* Product Overview */}
            <section className="py-16">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl font-bold">Product Overview</h2>
                            <p className="text-muted-foreground">
                                Meghdoot Pistons manufactures premium cylinder liners that are exported to automotive manufacturers
                                worldwide. Our liners are designed to provide optimal wear resistance, thermal conductivity, and
                                dimensional stability for extended engine life.
                            </p>
                            <p className="text-muted-foreground">
                                Using advanced materials and manufacturing techniques, our cylinder liners offer superior performance in
                                all operating conditions. Each liner undergoes rigorous testing to meet international quality standards
                                and your specific requirements.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                                    <span>Superior wear resistance</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                                    <span>Excellent thermal conductivity</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                                    <span>Precision-honed surfaces</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                                    <span>Consistent dimensional stability</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                                    <span>Global export compliance certified</span>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative h-[400px] rounded-lg overflow-hidden"
                        >
                            <Image
                                src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1685792698/meghdoot/4_dl12uk.jpg"
                                alt="Durable cylinder liners"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* customer List & Customer Data */}
            <div className="py-16 bg-muted/30">
                <CustomerList />
                <CustomerData />
            </div>

            {/* CTA Section */}
            <section className="py-16">
                <div className="container mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="max-w-3xl mx-auto text-center space-y-6"
                    >
                        <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold">
                            Ready to Source Premium Cylinder Liners?
                        </motion.h2>
                        <motion.p variants={fadeIn} className="text-muted-foreground text-lg">
                            Contact our export team to discuss your specific requirements and discover how our products can enhance
                            your engine performance worldwide.
                        </motion.p>
                        <motion.div variants={fadeIn} className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild>
                                <Link href="/contact">
                                    Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="/products">Explore Other Products</Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Related Products */}
            <section className="py-16 bg-muted/50">
                <div className="container mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="text-center mb-12"
                    >
                        <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-4">
                            Related Products
                        </motion.h2>
                        <motion.p variants={fadeIn} className="text-muted-foreground max-w-2xl mx-auto">
                            Complete your engine solution with our other precision-engineered components.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {[
                            {
                                title: "Pistons",
                                description: "High-performance pistons engineered for maximum durability and thermal efficiency.",
                                image: "https://res.cloudinary.com/dfvtnrisi/image/upload/v1685786189/meghdoot/piston_hgoesn.jpg",
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
                                        <p className="text-muted-foreground flex-grow mb-4">{product.description}</p>
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
        </div>
    )
}

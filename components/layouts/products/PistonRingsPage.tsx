"use client";
import React from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Download, FileText, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const PistonRingsPage = () => {
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
                        src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1743756272/piston-rings_vyet7f.png"
                        alt="Piston Rings manufacturing"
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
                        <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-bold tracking-tight">
                            Advanced <span className="text-primary">Piston Rings</span>
                        </motion.h1>
                        <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground">
                            Exported to global markets, our piston rings provide superior sealing, oil control, and heat transfer for
                            optimal engine performance.
                        </motion.p>
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
                                Meghdoot Pistons manufactures premium piston rings that are exported to automotive manufacturers
                                worldwide. Our rings are designed to provide optimal sealing, oil control, and heat transfer while
                                minimizing friction and wear.
                            </p>
                            <p className="text-muted-foreground">
                                Using advanced materials and coating technologies, our piston rings offer superior performance and
                                durability in all operating conditions. Each ring undergoes rigorous testing to meet international
                                quality standards and your specific requirements.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-primary" />
                                    <span>PVD coating for reduced friction</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-primary" />
                                    <span>Superior sealing properties</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-primary" />
                                    <span>Excellent oil control</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-primary" />
                                    <span>Enhanced durability and longevity</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-primary" />
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
                                src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1691655978/home2_hmyrxy.jpg"
                                alt="Advanced piston rings"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Ring Types */}
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
                            Piston Ring Types
                        </motion.h2>
                        <motion.p variants={fadeIn} className="text-muted-foreground max-w-2xl mx-auto">
                            We export a comprehensive range of piston rings to meet diverse engine requirements.
                        </motion.p>
                    </motion.div>

                    <Tabs defaultValue="compression" className="w-full">
                        <TabsList className="grid grid-cols-3 w-full mb-8">
                            <TabsTrigger value="compression">Compression Rings</TabsTrigger>
                            <TabsTrigger value="wiper">Wiper Rings</TabsTrigger>
                            <TabsTrigger value="oil">Oil Control Rings</TabsTrigger>
                        </TabsList>

                        <TabsContent value="compression">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="grid md:grid-cols-2 gap-8 items-center"
                            >
                                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                                    <Image
                                        src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1744096075/Compression_Ring_fw64rm.png"
                                        alt="Compression Rings"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold">Compression Rings</h3>
                                    <p className="text-muted-foreground">
                                        Our top compression rings are designed to create a gas-tight seal between the piston and cylinder
                                        wall, preventing combustion gases from leaking into the crankcase.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-primary" />
                                            <span>Chrome, plasma-sprayed, or PVD coated options</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-primary" />
                                            <span>Barrel-faced, taper-faced, and rectangular profiles</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-primary" />
                                            <span>High-temperature resistance up to 300°C</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-primary" />
                                            <span>Exported to OEMs and aftermarket worldwide</span>
                                        </li>
                                    </ul>
                                    <div className="flex gap-4 pt-2">
                                        <Button asChild>
                                            <Link href="/contact">
                                                Request Quote <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                        <Button variant="outline" asChild>
                                            <Link href="#">
                                                <Download className="mr-2 h-4 w-4" /> Download Catalog
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        </TabsContent>

                        <TabsContent value="wiper">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="grid md:grid-cols-2 gap-8 items-center"
                            >
                                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                                    <Image src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1744096219/Wiper_Rings_uebmcr.png" alt="Wiper Rings" fill className="object-cover" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold">Wiper Rings</h3>
                                    <p className="text-muted-foreground">
                                        Our second (wiper) rings are designed to scrape excess oil from the cylinder walls and provide
                                        additional sealing support to the top compression ring.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-primary" />
                                            <span>Napier, taper-faced, and reverse torsion designs</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-primary" />
                                            <span>Phosphate or chrome coating options</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-primary" />
                                            <span>Optimized scraping edge for efficient oil control</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-primary" />
                                            <span>Exported to global engine manufacturers</span>
                                        </li>
                                    </ul>
                                    <div className="flex gap-4 pt-2">
                                        <Button asChild>
                                            <Link href="/contact">
                                                Request Quote <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                        <Button variant="outline" asChild>
                                            <Link href="#">
                                                <Download className="mr-2 h-4 w-4" /> Download Catalog
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        </TabsContent>

                        <TabsContent value="oil">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="grid md:grid-cols-2 gap-8 items-center"
                            >
                                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                                    <Image
                                        src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1744096397/Oil_Control_Rings_izbhgf.png"
                                        alt="Oil Control Rings"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold">Oil Control Rings</h3>
                                    <p className="text-muted-foreground">
                                        Our oil control rings are designed to regulate the amount of oil on the cylinder walls, preventing
                                        excessive oil consumption while ensuring adequate lubrication.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-primary" />
                                            <span>Two-piece and three-piece designs</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-primary" />
                                            <span>Chrome-plated rails for extended durability</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-primary" />
                                            <span>Optimized tension for efficient oil control</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-primary" />
                                            <span>Exported to automotive markets worldwide</span>
                                        </li>
                                    </ul>
                                    <div className="flex gap-4 pt-2">
                                        <Button asChild>
                                            <Link href="/contact">
                                                Request Quote <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                        <Button variant="outline" asChild>
                                            <Link href="#">
                                                <Download className="mr-2 h-4 w-4" /> Download Catalog
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* Technical Specifications */}
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
                            Technical Specifications
                        </motion.h2>
                        <motion.p variants={fadeIn} className="text-muted-foreground max-w-2xl mx-auto">
                            Our piston rings are manufactured to precise specifications meeting international standards.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="overflow-x-auto"
                    >
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-muted">
                                    <th className="border p-3 text-left">Specification</th>
                                    <th className="border p-3 text-left">Compression Rings</th>
                                    <th className="border p-3 text-left">Wiper Rings</th>
                                    <th className="border p-3 text-left">Oil Control Rings</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border p-3 font-medium">Material</td>
                                    <td className="border p-3">Ductile Iron, Steel</td>
                                    <td className="border p-3">Ductile Iron, Cast Iron</td>
                                    <td className="border p-3">Steel, Stainless Steel</td>
                                </tr>
                                <tr>
                                    <td className="border p-3 font-medium">Coating</td>
                                    <td className="border p-3">Chrome, PVD, Plasma</td>
                                    <td className="border p-3">Phosphate, Chrome</td>
                                    <td className="border p-3">Chrome, Nitrided</td>
                                </tr>
                                <tr>
                                    <td className="border p-3 font-medium">Profile</td>
                                    <td className="border p-3">Barrel-faced, Taper-faced</td>
                                    <td className="border p-3">Napier, Taper-faced</td>
                                    <td className="border p-3">Two-piece, Three-piece</td>
                                </tr>
                                <tr>
                                    <td className="border p-3 font-medium">Diameter Range</td>
                                    <td className="border p-3">30mm - 150mm</td>
                                    <td className="border p-3">30mm - 150mm</td>
                                    <td className="border p-3">30mm - 150mm</td>
                                </tr>
                                <tr>
                                    <td className="border p-3 font-medium">Radial Wall</td>
                                    <td className="border p-3">1.2mm - 5.0mm</td>
                                    <td className="border p-3">1.5mm - 5.0mm</td>
                                    <td className="border p-3">2.0mm - 6.0mm</td>
                                </tr>
                                <tr>
                                    <td className="border p-3 font-medium">Axial Width</td>
                                    <td className="border p-3">0.8mm - 3.0mm</td>
                                    <td className="border p-3">0.8mm - 3.0mm</td>
                                    <td className="border p-3">1.5mm - 5.0mm</td>
                                </tr>
                                <tr>
                                    <td className="border p-3 font-medium">Export Standards</td>
                                    <td className="border p-3">ISO, ASTM, JIS</td>
                                    <td className="border p-3">ISO, ASTM, JIS</td>
                                    <td className="border p-3">ISO, ASTM, JIS</td>
                                </tr>
                            </tbody>
                        </table>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-8 flex justify-center"
                    >
                        <Button variant="outline" asChild>
                            <Link href="#">
                                <FileText className="mr-2 h-4 w-4" /> Download Full Specifications
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </section>

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
                            Ready to Source Premium Piston Rings?
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
                                image: "https://res.cloudinary.com/dfvtnrisi/image/upload/v1685786203/meghdoot/rings_eg65az.jpg",
                                link: "/pistonpins",
                            },
                            {
                                title: "Cylinder Liners",
                                description: "Durable liners with excellent wear resistance and thermal conductivity characteristics.",
                                image: "https://res.cloudinary.com/dfvtnrisi/image/upload/v1685792698/meghdoot/4_dl12uk.jpg",
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

export default PistonRingsPage

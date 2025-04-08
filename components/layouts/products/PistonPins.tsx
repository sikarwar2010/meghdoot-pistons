"use client";
import React from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Download, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


export default function PistonPinsPage() {
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
                            src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1743756498/piston-pins_ypvjps.png"
                            alt="Piston Pins manufacturing"
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
                                Precision <span className="text-primary">Piston Pins</span>
                            </motion.h1>
                            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground">
                                Exported to over 50 countries, our piston pins deliver optimal load distribution and reduced friction for
                                global automotive manufacturers.
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
                                    Meghdoot Pistons manufactures premium piston pins that are exported to automotive manufacturers across
                                    the globe. Our pins are designed to provide optimal load distribution, reduced friction, and extended
                                    service life in all operating conditions.
                                </p>
                                <p className="text-muted-foreground">
                                    Using advanced materials and precision manufacturing techniques, our piston pins offer superior
                                    strength, wear resistance, and dimensional stability. Each pin undergoes rigorous testing to meet
                                    international quality standards and your specific requirements.
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                        <span>High-strength steel construction</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                        <span>Diamond-like carbon coating options</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                        <span>Precision ground and polished</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                        <span>Optimized weight-to-strength ratio</span>
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
                                    src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1691659786/home3_mf2azy.jpg"
                                    alt="Precision piston pins"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Product Categories */}
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
                                Piston Pin Categories
                            </motion.h2>
                            <motion.p variants={fadeIn} className="text-muted-foreground max-w-2xl mx-auto">
                                We export a wide range of piston pins to meet the diverse needs of our global customers.
                            </motion.p>
                        </motion.div>

                        <Tabs defaultValue="standard" className="w-full">
                            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-8">
                                <TabsTrigger value="standard">Standard</TabsTrigger>
                                <TabsTrigger value="performance">Performance</TabsTrigger>
                                <TabsTrigger value="heavy-duty">Heavy-Duty</TabsTrigger>
                                <TabsTrigger value="specialized">Specialized</TabsTrigger>
                            </TabsList>

                            <TabsContent value="standard">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="grid md:grid-cols-2 gap-8 items-center"
                                >
                                    <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                                        <Image
                                            src="/placeholder.svg?height=800&width=800"
                                            alt="Standard Piston Pins"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-bold">Standard Piston Pins</h3>
                                        <p className="text-muted-foreground">
                                            Our standard piston pins are designed for passenger vehicles and light commercial applications. They
                                            offer excellent durability and performance across a wide range of operating conditions.
                                        </p>
                                        <ul className="space-y-2">
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary" />
                                                <span>Case-hardened carbon steel construction</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary" />
                                                <span>Precision ground to tight tolerances</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary" />
                                                <span>Available in full-floating and semi-floating designs</span>
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

                            <TabsContent value="performance">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="grid md:grid-cols-2 gap-8 items-center"
                                >
                                    <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                                        <Image
                                            src="/placeholder.svg?height=800&width=800"
                                            alt="Performance Piston Pins"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-bold">Performance Piston Pins</h3>
                                        <p className="text-muted-foreground">
                                            Our high-performance piston pins are engineered for racing and high-output engines, offering maximum
                                            strength with reduced weight for optimal performance.
                                        </p>
                                        <ul className="space-y-2">
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary" />
                                                <span>Chrome-moly steel or tool steel construction</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary" />
                                                <span>DLC (Diamond-Like Carbon) coating option</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary" />
                                                <span>Hollow designs for weight reduction</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary" />
                                                <span>Exported to racing teams and performance builders globally</span>
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

                            <TabsContent value="heavy-duty">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="grid md:grid-cols-2 gap-8 items-center"
                                >
                                    <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                                        <Image
                                            src="/placeholder.svg?height=800&width=800"
                                            alt="Heavy-Duty Piston Pins"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-bold">Heavy-Duty Piston Pins</h3>
                                        <p className="text-muted-foreground">
                                            Our heavy-duty piston pins are designed for commercial trucks, construction equipment, and
                                            industrial applications, offering exceptional durability and longevity.
                                        </p>
                                        <ul className="space-y-2">
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary" />
                                                <span>High-alloy steel construction</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary" />
                                                <span>Deep case hardening for extended wear resistance</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary" />
                                                <span>Designed for high-load applications</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary" />
                                                <span>Exported to commercial vehicle manufacturers worldwide</span>
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

                            <TabsContent value="specialized">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="grid md:grid-cols-2 gap-8 items-center"
                                >
                                    <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                                        <Image
                                            src="/placeholder.svg?height=800&width=800"
                                            alt="Specialized Piston Pins"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-bold">Specialized Piston Pins</h3>
                                        <p className="text-muted-foreground">
                                            Our specialized piston pins are custom-designed for unique applications such as marine engines,
                                            aviation, and specialized industrial equipment.
                                        </p>
                                        <ul className="space-y-2">
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary" />
                                                <span>Custom materials for specific applications</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary" />
                                                <span>Corrosion-resistant options for marine environments</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary" />
                                                <span>Specialized coatings for extreme conditions</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary" />
                                                <span>Exported to specialized manufacturers globally</span>
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
                                Our piston pins are manufactured to precise specifications meeting international standards.
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
                                        <th className="border p-3 text-left">Standard Series</th>
                                        <th className="border p-3 text-left">Performance Series</th>
                                        <th className="border p-3 text-left">Heavy-Duty Series</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border p-3 font-medium">Material</td>
                                        <td className="border p-3">Case-hardened Carbon Steel</td>
                                        <td className="border p-3">Chrome-moly Steel</td>
                                        <td className="border p-3">High-alloy Steel</td>
                                    </tr>
                                    <tr>
                                        <td className="border p-3 font-medium">Diameter Range</td>
                                        <td className="border p-3">8mm - 30mm</td>
                                        <td className="border p-3">12mm - 25mm</td>
                                        <td className="border p-3">20mm - 50mm</td>
                                    </tr>
                                    <tr>
                                        <td className="border p-3 font-medium">Surface Finish</td>
                                        <td className="border p-3">Ra 0.2-0.4 μm</td>
                                        <td className="border p-3">Ra 0.1-0.2 μm</td>
                                        <td className="border p-3">Ra 0.2-0.3 μm</td>
                                    </tr>
                                    <tr>
                                        <td className="border p-3 font-medium">Hardness</td>
                                        <td className="border p-3">58-62 HRC</td>
                                        <td className="border p-3">60-64 HRC</td>
                                        <td className="border p-3">62-65 HRC</td>
                                    </tr>
                                    <tr>
                                        <td className="border p-3 font-medium">Case Depth</td>
                                        <td className="border p-3">0.5-1.0 mm</td>
                                        <td className="border p-3">0.8-1.2 mm</td>
                                        <td className="border p-3">1.0-1.5 mm</td>
                                    </tr>
                                    <tr>
                                        <td className="border p-3 font-medium">Design Type</td>
                                        <td className="border p-3">Solid, Semi-floating</td>
                                        <td className="border p-3">Hollow, Full-floating</td>
                                        <td className="border p-3">Solid, Full-floating</td>
                                    </tr>
                                    <tr>
                                        <td className="border p-3 font-medium">Export Standards</td>
                                        <td className="border p-3">ISO, ASTM, JIS</td>
                                        <td className="border p-3">ISO, ASTM, FIA</td>
                                        <td className="border p-3">ISO, SAE, DIN</td>
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
                                Ready to Source Premium Piston Pins?
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
                                    image: "/placeholder.svg?height=600&width=600",
                                    link: "/products/pistons",
                                },
                                {
                                    title: "Piston Rings",
                                    description: "Advanced rings providing superior sealing, oil control, and heat transfer properties.",
                                    image: "/placeholder.svg?height=600&width=600",
                                    link: "/products/rings",
                                },
                                {
                                    title: "Cylinder Liners",
                                    description: "Durable liners with excellent wear resistance and thermal conductivity characteristics.",
                                    image: "/placeholder.svg?height=600&width=600",
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
        </>
    );
}

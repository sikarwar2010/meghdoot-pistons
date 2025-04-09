"use client";
import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


const PistonsPage = () => {
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
        <div>
            <div className="flex flex-col min-h-screen">
                {/* Hero Section */}
                <section className="relative py-20 md:py-28 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1743750098/high-piston_twfiw0.png"
                            alt="Pistons manufacturing"
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
                                High-Performance <span className="text-primary">Pistons</span>
                            </motion.h1>
                            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground">
                                Engineered for maximum performance, durability, and thermal efficiency in the most demanding applications.
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
                                    Meghdoot Pistons manufactures a comprehensive range of high-quality pistons for automotive, industrial,
                                    and marine applications. Our pistons are designed to deliver optimal performance, fuel efficiency, and
                                    durability in all operating conditions.
                                </p>
                                <p className="text-muted-foreground">
                                    Using advanced materials and manufacturing techniques, our pistons offer superior thermal management,
                                    reduced friction, and enhanced power output. Each piston undergoes rigorous testing to ensure it meets
                                    our exacting standards and your specific requirements.
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                        <span>Superior thermal efficiency</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                        <span>Reduced friction and wear</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                        <span>Enhanced power output</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                        <span>Extended service life</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                        <span>Global technical support</span>
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
                                    src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1691655978/home1_tsgxb9.jpg"
                                    alt="High-performance pistons"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Product Categories */}
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
                                Piston Categories
                            </motion.h2>
                            <motion.p variants={fadeIn} className="text-muted-foreground max-w-2xl mx-auto">
                                We offer a wide range of pistons to meet the diverse needs of our global customers.
                            </motion.p>
                        </motion.div>

                        <Tabs defaultValue="automotive" className="w-full">
                            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-8">
                                <TabsTrigger value="automotive">Normal Type Piston</TabsTrigger>
                                <TabsTrigger value="racing">Non-Magnetic Alfin Ring Type Piston</TabsTrigger>
                                <TabsTrigger value="industrial">Oil-Cooling Type Piston</TabsTrigger>
                                <TabsTrigger value="marine">Steel Strip Type Piston</TabsTrigger>
                            </TabsList>

                            <TabsContent value="automotive">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="grid md:grid-cols-2 gap-8 items-center"
                                >
                                    {/* <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                                        <Image
                                            src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1743876991/Automotive-pistons_yuhu7o.png"
                                            alt="Automotive Pistons"
                                            fill
                                            className="object-cover"
                                        />
                                    </div> */}
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-bold">Normal Type Piston</h3>
                                        <p className="text-muted-foreground">
                                            The standard piston made from aluminum or cast iron, typically used in general engines.
                                        </p>
                                        <ul className="space-y-2">
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary" />
                                                <span>Lightweight (especially aluminum)</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary" />
                                                <span>Good heat conductivity</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary" />
                                                <span>Simple design without special reinforcements.</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary" />
                                                <span>Usage: Common in low to medium-duty engines (motorcycles, cars)</span>
                                            </li>
                                        </ul>
                                        <div className="flex gap-4 pt-2">
                                            <Button asChild>
                                                <Link href="/contact">
                                                    Request Quote <ArrowRight className="ml-2 h-4 w-4" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            </TabsContent>

                            <TabsContent value="racing">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="grid md:grid-cols-2 gap-8 items-center"
                                >
                                    {/* <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                                        <Image
                                            src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1743876992/industrial-piston_uxqauk.png"
                                            alt="Racing Pistons"
                                            fill
                                            className="object-cover"
                                        />
                                    </div> */}
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-bold">Non-Magnetic Alfin Ring Type Piston</h3>
                                        <p className="text-muted-foreground">
                                            A piston with an Alfin ring insert, which is a steel ring cast into the aluminum piston crown.
                                        </p>
                                        <ul className="space-y-2">
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary" />
                                                <span>Non-magnetic means it won’t interfere with magnetic sensors (e.g., in diesel engines)</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary" />
                                                <span>Alfin ring provides better strength and wear resistance at the top ring groove</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary" />
                                                <span>Withstands high temperatures and pressures</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary" />
                                                <span>Usage: Heavy-duty diesel engines where ring groove wear is a concern</span>
                                            </li>
                                        </ul>
                                        <div className="flex gap-4 pt-2">
                                            <Button asChild>
                                                <Link href="/contact">
                                                    Request Quote <ArrowRight className="ml-2 h-4 w-4" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            </TabsContent>

                            <TabsContent value="industrial">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="grid md:grid-cols-2 gap-8 items-center"
                                >
                                    {/* <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                                        <Image
                                            src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1743876991/racing-piston_p6rnaj.png"
                                            alt="Industrial Pistons"
                                            fill
                                            className="object-cover"
                                        />
                                    </div> */}
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-bold">Oil-Cooling Type Piston</h3>
                                        <p className="text-muted-foreground">
                                            A piston designed with internal oil passages or oil galleries to allow oil to cool the piston crown.
                                        </p>
                                        <ul className="space-y-2">
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary" />
                                                <span>Maintains optimal piston temperature</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary" />
                                                <span>Reduces thermal stresses and the risk of piston seizure</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary" />
                                                <span>Usage: High-performance or turbocharged engines.</span>
                                            </li>
                                        </ul>
                                        <div className="flex gap-4 pt-2">
                                            <Button asChild>
                                                <Link href="/contact">
                                                    Request Quote <ArrowRight className="ml-2 h-4 w-4" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            </TabsContent>

                            <TabsContent value="marine">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="grid md:grid-cols-2 gap-8 items-center"
                                >
                                    {/* <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                                        <Image
                                            src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1743876992/marine-piston_mewehz.png"
                                            alt="Marine Pistons"
                                            fill
                                            className="object-cover"
                                        />
                                    </div> */}
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-bold">Steel Strip Type Piston</h3>
                                        <p className="text-muted-foreground">
                                            A piston that incorporates steel strips or inserts in the piston skirt or ring grooves.
                                        </p>
                                        <ul className="space-y-2">
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary" />
                                                <span>Provides extra strength and durability where needed.</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary" />
                                                <span>Helps maintain shape and ring groove clearance under heat.</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary" />
                                                <span>Reduces thermal expansion mismatch.</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary" />
                                                <span>Usage: High-compression engines or applications where strength and durability are key.</span>
                                            </li>
                                        </ul>
                                        <div className="flex gap-4 pt-2">
                                            <Button asChild>
                                                <Link href="/contact">
                                                    Request Quote <ArrowRight className="ml-2 h-4 w-4" />
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
                                Technical Specifications
                            </motion.h2>
                            <motion.p variants={fadeIn} className="text-muted-foreground max-w-2xl mx-auto">
                                Our pistons are manufactured to precise specifications using advanced materials and technologies.
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
                                        <th className="border p-3 text-left">Type of Piston</th>
                                        <th className="border p-3 text-left">Material</th>
                                        <th className="border p-3 text-left">Special Features</th>
                                        <th className="border p-3 text-left">Max Operating Temp</th>
                                        <th className="border p-3 text-left">Applications</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border p-3 font-medium">Normal Type</td>
                                        <td className="border p-3">Cast Aluminum Alloy / Cast Iron</td>
                                        <td className="border p-3">Lightweight, good thermal conductivity, simple design</td>
                                        <td className="border p-3">~300°C – 350°C</td>
                                        <td className="border p-3">General-purpose engines (bikes, cars)</td>
                                    </tr>
                                    <tr>
                                        <td className="border p-3 font-medium">Non-Magnetic Alfin Ring</td>
                                        <td className="border p-3">Aluminum alloy + Alfin (steel) insert</td>
                                        <td className="border p-3">Steel ring groove, non-magnetic, wear-resistant</td>
                                        <td className="border p-3">~350°C – 400°C</td>
                                        <td className="border p-3">Diesel engines, heavy-duty trucks</td>
                                    </tr>
                                    <tr>
                                        <td className="border p-3 font-medium">Oil-Cooling Type</td>
                                        <td className="border p-3">Aluminum alloy with internal oil gallery</td>
                                        <td className="border p-3">Oil passage or cooling gallery for piston crown cooling</td>
                                        <td className="border p-3">~400°C – 450°C</td>
                                        <td className="border p-3">Turbocharged & performance engines</td>
                                    </tr>
                                    <tr>
                                        <td className="border p-3 font-medium">Steel Strip Type</td>
                                        <td className="border p-3">Aluminum alloy + steel insert</td>
                                        <td className="border p-3">Steel reinforcement in skirt/ring grooves, high wear resistance</td>
                                        <td className="border p-3">~350°C – 400°C</td>
                                        <td className="border p-3">High load & high RPM engines</td>
                                    </tr>
                                </tbody>
                            </table>
                        </motion.div>
                    </div>
                </section>

                {/* Manufacturing Process */}
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
                                Manufacturing Process
                            </motion.h2>
                            <motion.p variants={fadeIn} className="text-muted-foreground max-w-2xl mx-auto">
                                Our state-of-the-art manufacturing process ensures consistent quality and performance.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {[
                                {
                                    step: "1",
                                    title: "Material Selection",
                                    description: "Premium aluminum alloys are selected based on the specific application requirements.",
                                },
                                {
                                    step: "2",
                                    title: "Casting/Forging",
                                    description:
                                        "Pistons are either cast or forged depending on the performance requirements and application.",
                                },
                                {
                                    step: "3",
                                    title: "CNC Machining",
                                    description:
                                        "Precision CNC machines create the exact dimensions and features required for optimal performance.",
                                },
                                {
                                    step: "4",
                                    title: "Surface Treatments",
                                    description:
                                        "Specialized coatings and treatments are applied to enhance durability and reduce friction.",
                                },
                                {
                                    step: "5",
                                    title: "Heat Treatment",
                                    description:
                                        "Controlled heating and cooling processes optimize the mechanical properties of the piston.",
                                },
                                {
                                    step: "6",
                                    title: "Quality Inspection",
                                    description: "Rigorous testing and inspection ensure each piston meets our exacting standards.",
                                },
                                {
                                    step: "7",
                                    title: "Performance Testing",
                                    description:
                                        "Sample pistons from each batch undergo performance testing in simulated operating conditions.",
                                },
                                {
                                    step: "8",
                                    title: "Packaging & Shipping",
                                    description: "Pistons are carefully packaged to protect them during global shipping to our customers.",
                                },
                            ].map((step, index) => (
                                <motion.div key={index} variants={fadeIn}>
                                    <Card>
                                        <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                                                {step.step}
                                            </div>
                                            <h3 className="text-xl font-bold">{step.title}</h3>
                                            <p className="text-muted-foreground">{step.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
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
                                Ready to Enhance Your Engine Performance?
                            </motion.h2>
                            <motion.p variants={fadeIn} className="text-muted-foreground text-lg">
                                Contact our global team to discuss your specific piston requirements and discover how our products can
                                enhance your engine performance worldwide.
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
        </div>
    )
}

export default PistonsPage;

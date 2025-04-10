"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Award, CheckCircle, FileText, Globe, Shield, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function QualityPage() {
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
                        src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1690180341/quality_2_x3zki5.jpg"
                        alt="Quality control laboratory"
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
                            Our Commitment to <span className="text-primary">Quality</span>
                        </motion.h1>
                        <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground">
                            Delivering world-class automotive components that meet the highest international standards and exceed
                            customer expectations.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Quality Policy */}
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
                            <h2 className="text-3xl font-bold">Quality Policy</h2>
                            <p className="text-muted-foreground">
                                At Meghdoot Pistons, quality is not just a department it is a mindset that permeates every aspect of our
                                operations. Our comprehensive quality policy is built on the principles of continuous improvement,
                                rigorous testing, and unwavering commitment to excellence.
                            </p>
                            <p className="text-muted-foreground">
                                We are dedicated to manufacturing products that consistently meet or exceed customer requirements and
                                comply with all applicable regulatory standards. This commitment has established us as a trusted global
                                exporter of automotive components.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                                    <span>Zero-defect manufacturing philosophy</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                                    <span>100% inspection of critical dimensions</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                                    <span>Advanced statistical process control</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                                    <span>Continuous employee training and development</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                                    <span>Regular supplier quality audits</span>
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
                                src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1690180341/quality_2_x3zki5.jpg"
                                alt="Quality inspection process"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Certifications */}
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
                            Certifications & Compliance
                        </motion.h2>
                        <motion.p variants={fadeIn} className="text-muted-foreground max-w-2xl mx-auto">
                            Our commitment to quality is reflected in our ISO 9001:2015 certification, ensuring that our processes and
                            products consistently meet the highest international standards.
                        </motion.p>
                    </motion.div>

                    <div className="grid md:grid-cols-1 gap-12 items-center justify-items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6 max-w-2xl"
                        >
                            <Image
                                src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1691934350/MEGHDOOT_PISTONS_PVT._LTD._QMS_page-0001_pgjr6g.png"
                                alt="Meghdoot Pistons Quality Management System"
                                width={500}
                                height={500}
                                className="mx-auto"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Quality Control Process */}
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
                            Quality Control Process
                        </motion.h2>
                        <motion.p variants={fadeIn} className="text-muted-foreground max-w-2xl mx-auto">
                            Our comprehensive quality control process ensures that every product meets our exacting standards before
                            being exported to global markets.
                        </motion.p>
                    </motion.div>

                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 md:block hidden"></div>

                        <div className="space-y-12">
                            {[
                                {
                                    step: "1",
                                    title: "Raw Material Inspection",
                                    description:
                                        "Every batch of raw materials undergoes rigorous testing for chemical composition, mechanical properties, and dimensional accuracy before entering our production process.",
                                },
                                {
                                    step: "2",
                                    title: "In-Process Quality Checks",
                                    description:
                                        "Throughout the manufacturing process, our quality engineers conduct regular checks using advanced measurement tools to ensure adherence to specifications.",
                                },
                                {
                                    step: "3",
                                    title: "Statistical Process Control",
                                    description:
                                        "We implement SPC techniques to monitor process variations and make real-time adjustments, ensuring consistent quality across production runs.",
                                },
                                {
                                    step: "4",
                                    title: "Dimensional Verification",
                                    description:
                                        "Using precision measuring instruments including CMMs (Coordinate Measuring Machines), we verify that all critical dimensions meet the required specifications.",
                                },
                                {
                                    step: "5",
                                    title: "Surface Treatment Inspection",
                                    description:
                                        "All surface treatments and coatings are tested for adhesion, thickness, and wear resistance to ensure optimal performance and longevity.",
                                },
                                {
                                    step: "6",
                                    title: "Functional Testing",
                                    description:
                                        "Sample products from each batch undergo functional testing in simulated operating conditions to verify performance under real-world scenarios.",
                                },
                                {
                                    step: "7",
                                    title: "Final Inspection",
                                    description:
                                        "Our quality assurance team conducts a comprehensive final inspection before products are cleared for packaging and export.",
                                },
                                {
                                    step: "8",
                                    title: "Documentation & Traceability",
                                    description:
                                        "Complete quality documentation is maintained for each batch, ensuring full traceability from raw material to finished product.",
                                },
                            ].map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row flex-col" : "md:flex-row-reverse flex-col"}`}
                                >
                                    <div
                                        className={`md:w-1/2 w-full ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} mb-4 md:mb-0`}
                                    >
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-bold">{step.title}</h3>
                                            <p className="text-muted-foreground">{step.description}</p>
                                        </div>
                                    </div>
                                    <div className="md:absolute relative left-1/2 transform -translate-x-1/2 md:mb-0 mb-4 z-10">
                                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                                            {step.step}
                                        </div>
                                    </div>
                                    <div className="md:w-1/2 w-full"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Customer Testimonials */}
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
                            What Our Customers Say
                        </motion.h2>
                        <motion.p variants={fadeIn} className="text-muted-foreground max-w-2xl mx-auto">
                            Our commitment to quality has earned us the trust of automotive manufacturers worldwide.
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
                                quote:
                                    "Meghdoot Pistons has consistently delivered high-quality components that meet our stringent requirements. Their commitment to quality and on-time delivery has made them a valued supplier for our European operations.",
                                name: "Thomas Schmidt",
                                position: "Procurement Director",
                                company: "European Motors GmbH",
                            },
                            {
                                quote:
                                    "We've been importing piston components from Meghdoot for over a decade. Their quality control processes are exceptional, resulting in products that consistently exceed our expectations and performance standards.",
                                name: "Robert Johnson",
                                position: "Quality Assurance Manager",
                                company: "American Automotive Inc.",
                            },
                            {
                                quote:
                                    "As a leading automotive manufacturer in Asia, we demand the highest quality from our suppliers. Meghdoot Pistons has proven to be a reliable partner, delivering premium components that enhance our engine performance.",
                                name: "Hiroshi Tanaka",
                                position: "Supply Chain Director",
                                company: "Asian Motors Corporation",
                            },
                        ].map((testimonial, index) => (
                            <motion.div key={index} variants={fadeIn}>
                                <Card className="h-full">
                                    <CardContent className="p-6 flex flex-col h-full">
                                        <div className="mb-6 text-4xl text-primary">"</div>
                                        <p className="text-muted-foreground italic flex-grow mb-6">{testimonial.quote}</p>
                                        <div>
                                            <p className="font-bold">{testimonial.name}</p>
                                            <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                                            <p className="text-sm text-primary">{testimonial.company}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary text-primary-foreground">
                <div className="container mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="max-w-3xl mx-auto text-center space-y-6"
                    >
                        <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold">
                            Experience the Meghdoot Quality Difference
                        </motion.h2>
                        <motion.p variants={fadeIn} className="text-primary-foreground/80 text-lg">
                            Join leading automotive manufacturers worldwide who trust Meghdoot Pistons for their critical engine
                            components. Our commitment to quality ensures your products perform at their best.
                        </motion.p>
                        <motion.div variants={fadeIn} className="pt-4">
                            <Button size="lg" variant="secondary" asChild>
                                <Link href="/contact">Request Quality Documentation</Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

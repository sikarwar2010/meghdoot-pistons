"use client";
import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormState((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500))

        toast.success("Message Sent", {
            description: "Thank you for contacting us. We'll get back to you shortly.",
        });

        setFormState({
            name: "",
            email: "",
            phone: "",
            company: "",
            message: "",
        })
        setIsSubmitting(false)
    }

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
            <section className="py-12 md:py-16">
                <div className="container mx-auto">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-3xl mx-auto text-center space-y-6"
                    >
                        <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-bold tracking-tight">
                            Get in <span className="text-primary">Touch</span>
                        </motion.h1>
                        <motion.p variants={fadeIn} className="text-lg text-muted-foreground">
                            Have questions about our products or services? We are here to help. Reach out to us using any of the
                            methods below.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-8">
                <div className="container mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-3 gap-6"
                    >
                        <motion.div variants={fadeIn}>
                            <Card>
                                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <MapPin className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold">Visit Us</h3>
                                    <p className="text-muted-foreground">
                                        6 Industrial Estate, Nunhai,
                                        <br />
                                        Agra, Uttar Pradesh,
                                        <br />
                                        India - 282006
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div variants={fadeIn}>
                            <Card>
                                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Phone className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold">Call Us</h3>
                                    <p className="text-muted-foreground">
                                        Sales: +91 97190 29044 | +91 99971 10005
                                        <br />
                                        Office: 0562 2990513
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div variants={fadeIn}>
                            <Card>
                                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Mail className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold">Email Us</h3>
                                    <p className="text-muted-foreground">
                                        Info: meghdootpistons@gmail.com
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form and Map */}
            <section className="py-12">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl font-bold">Send Us a Message</h2>
                            <p className="text-muted-foreground">
                                Fill out the form below and our team will get back to you as soon as possible.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone Number</Label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            value={formState.phone}
                                            onChange={handleChange}
                                            placeholder="+1 (555) 123-4567"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="company">Company</Label>
                                        <Input
                                            id="company"
                                            name="company"
                                            value={formState.company}
                                            onChange={handleChange}
                                            placeholder="Your Company Ltd."
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        placeholder="How can we help you?"
                                        rows={5}
                                        required
                                    />
                                </div>

                                <Button type="submit" size="lg" disabled={isSubmitting}>
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </Button>
                            </form>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="h-[400px] md:h-full min-h-[400px] rounded-lg overflow-hidden"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.05990841508096!3d28.494863982472626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19c7991acaf9%3A0x95d2d613a35219a9!2sSector%205%2C%20Gurugram%2C%20Haryana%20122001!5e0!3m2!1sen!2sin!4v1623825278107!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                aria-label="Map showing our location"
                            ></iframe>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

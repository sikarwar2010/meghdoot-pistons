"use client"
import { Card, CardContent, } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Calendar, Clock, MapPin } from "lucide-react"
import Image from "next/image"


// Sample events data
const upcomingEvents = [
    {
        id: 1,
        title: "Automotive Expo 2023",
        description:
            "Join us at the largest automotive components exhibition in Asia. Visit our booth to explore our latest product innovations.",
        image: "https://res.cloudinary.com/dfvtnrisi/image/upload/v1724230074/meghdootlogo.jpg",
        date: "August 15-18, 2023",
        time: "10:00 AM - 6:00 PM",
        location: "Exhibition Center, New Delhi, India",
        type: "Exhibition",
    },
]

export default function EventsPage() {
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
                            Events & <span className="text-primary">Exhibitions</span>
                        </motion.h1>
                        <motion.p variants={fadeIn} className="text-lg text-muted-foreground">
                            Stay updated with our upcoming events, exhibitions, webinars, and product launches.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Featured Event */}
            <section className="py-8">
                <div className="container mx-auto flex justify-center ">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card className="overflow-hidden w-full sm:w-[500px] md:w-[700px] lg:w-[900px]">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] w-full">
                                    <Image
                                        src={upcomingEvents[0].image || "/placeholder.svg"}
                                        alt={upcomingEvents[0].title}
                                        fill
                                        priority
                                        className="object-contain p-2"
                                    />
                                </div>
                                <CardContent className="p-6 flex flex-col justify-center space-y-4">
                                    <div>
                                        <span className="text-sm font-medium text-primary">{upcomingEvents[0].type}</span>
                                        <h2 className="text-2xl md:text-3xl font-bold mt-2">{upcomingEvents[0].title}</h2>
                                    </div>
                                    <p className="text-muted-foreground">{upcomingEvents[0].description}</p>
                                    <div className="space-y-2 text-sm text-muted-foreground">
                                        <div className="flex items-center">
                                            <Calendar className="h-4 w-4 mr-2" />
                                            <span>{upcomingEvents[0].date}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="h-4 w-4 mr-2" />
                                            <span>{upcomingEvents[0].time}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <MapPin className="h-4 w-4 mr-2" />
                                            <span>{upcomingEvents[0].location}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

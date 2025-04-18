'use client';
import React from 'react';
import { Phone, Mail, Clock, CalendarClock } from 'lucide-react';
import Link from 'next/link';

const TopBar = () => {
    return (
        <div className="bg-background text-black dark:text-white py-1.5 text-xs sm:text-sm">
            <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
                <div className="hidden sm:flex flex-wrap items-center gap-4 mb-1 sm:mb-0 ">
                    <div className="flex items-center gap-1.5">
                        <Phone size={14} className="text-white/80" />
                        <span>+91 97190 29044 | +91 97604 15467</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Mail size={14} className="text-white/80" />
                        <span>meghdootpistons@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Clock size={14} className="text-white/80" />
                        <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
                    </div>
                </div>

                <div className="flex items-center gap-1.5">
                    <Link href="/events" className="flex items-center gap-2 text-black dark:text-white transition-colors">
                        <CalendarClock size={14} className="text-white/80" />
                        <span className="font-medium">Latest Event: </span>
                        <span className="animate-pulse">AutoMechanika, Istanbul - 11 june to 15 June 2025 Hall 10, Booth A160</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopBar;

'use client';
import React from 'react';
import { Phone, Mail, Clock, CalendarClock } from 'lucide-react';
import Link from 'next/link';

const TopBar = () => {
    return (
        <div className="bg-primary text-primary-foreground py-1.5 text-xs sm:text-sm">
            <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
                <div className="flex flex-wrap items-center gap-4 mb-1 sm:mb-0">
                    <div className="flex items-center gap-1.5">
                        <Phone size={14} className="text-white/80" />
                        <span>+91 97190 29044 | +91 99971 10005</span>
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
                    <Link href="/events" className="flex items-center gap-1.5 hover:text-white transition-colors">
                        <CalendarClock size={14} className="text-white/80" />
                        <span className="font-medium">Latest Event: </span>
                        <span className="animate-pulse">Auto Expo 2025 - Visit us at Hall 3, Booth 42</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopBar;

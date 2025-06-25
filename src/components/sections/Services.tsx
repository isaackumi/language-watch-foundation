'use client';

import { siteContent } from '@/data/content';
import { Book, Mic, Languages, Radio, Users, Edit, ChevronRight, ArrowRight, Sparkles, Target, Award, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const iconMap = {
    book: Book,
    mic: Mic,
    languages: Languages,
    radio: Radio,
    users: Users,
    edit: Edit,
};

export default function Services() {
    const [hoveredService, setHoveredService] = useState<number | null>(null);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const serviceStats = [
        { icon: Target, value: "100+", label: "Projects Completed" },
        { icon: Award, value: "50+", label: "Expert Trainers" },
        { icon: Heart, value: "1000+", label: "Happy Clients" },
        { icon: Sparkles, value: "95%", label: "Success Rate" }
    ];

    return (
        <section id="services" className="py-24 bg-gradient-to-b from-white to-primary-50/30 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <motion.h2
                        className="text-4xl sm:text-5xl font-extrabold stylish-title text-dark-500 mb-6 flex items-center justify-center gap-2"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                        >
                            <Users className="w-8 h-8 text-primary-500" />
                        </motion.div>
                        <span className="relative inline-block">
                            Our Services
                            <motion.span
                                className="absolute left-0 -bottom-1 w-full h-2 bg-gradient-to-r from-primary-300 to-primary-500 rounded-full"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.5, 1, 0.5]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </span>
                    </motion.h2>
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-8 rounded-full"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.p
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Comprehensive language and communication services to help you excel in your professional and personal life.
                    </motion.p>
                </motion.div>

                {/* Service Stats */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {serviceStats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white/70 backdrop-blur-lg rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <stat.icon className="w-8 h-8 text-primary-500 mx-auto mb-4" />
                            <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
                            <div className="text-sm text-gray-600">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {siteContent.services.map((service, index) => {
                        const Icon = iconMap[service.icon as keyof typeof iconMap] || Book;
                        return (
                            <motion.div
                                key={service.title}
                                variants={itemVariants}
                                className="group bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full relative overflow-hidden"
                                onHoverStart={() => setHoveredService(index)}
                                onHoverEnd={() => setHoveredService(null)}
                            >
                                <motion.div
                                    animate={{
                                        scale: hoveredService === index ? 1.2 : 1,
                                        rotate: hoveredService === index ? 10 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Icon className="h-16 w-16 text-primary-100 absolute right-4 top-4 opacity-30 group-hover:opacity-50 transition-all duration-300" />
                                </motion.div>
                                <div className="flex items-center justify-center mb-6 z-10">
                                    <Icon className="h-10 w-10 text-primary-500 group-hover:text-primary-600 transition-colors duration-300" />
                                </div>
                                <h4 className="text-xl font-extrabold stylish-title text-dark-500 mb-4 group-hover:text-primary-500 transition-colors duration-300 z-10">
                                    {service.title}
                                </h4>
                                <p className="text-gray-600 leading-relaxed flex-1 text-justify z-10">
                                    {service.description}
                                </p>
                                <Link
                                    href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="mt-6 inline-flex items-center gap-2 px-6 py-2 rounded-md bg-primary-500 text-white font-semibold shadow hover:bg-primary-600 transition-colors duration-300 btn-primary z-10 group"
                                >
                                    Learn More
                                    <motion.div
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </motion.div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
} 
'use client';

import { siteContent } from '@/data/content';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Users, Award, Target, Lightbulb, User, ChevronRight, Quote, CheckCircle, MessageSquare, Globe, Heart, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function About() {
    const [hoveredObjective, setHoveredObjective] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(false);

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

    const objectives = [
        {
            icon: Target,
            title: "Promote Decorous Language",
            description: "Foster respectful and appropriate language use in media and public discourse",
            color: "from-blue-500 to-blue-600",
            stats: "100+ Media Engagements"
        },
        {
            icon: Globe,
            title: "Cultural Awareness",
            description: "Enhance understanding of cultural communication and language nuances",
            color: "from-green-500 to-green-600",
            stats: "50+ Cultural Events"
        },
        {
            icon: Heart,
            title: "Peace & Unity",
            description: "Promote national peace and cohesion through mindful communication",
            color: "from-red-500 to-red-600",
            stats: "1000+ Community Members"
        },
        {
            icon: BookOpen,
            title: "Language Education",
            description: "Provide comprehensive training in effective communication skills",
            color: "from-purple-500 to-purple-600",
            stats: "200+ Training Sessions"
        },
        {
            icon: MessageSquare,
            title: "Professional Excellence",
            description: "Develop expertise in public speaking and media communication",
            color: "from-yellow-500 to-yellow-600",
            stats: "500+ Professionals Trained"
        }
    ];

    return (
        <section id="about" className="py-24 bg-gradient-to-b from-primary-50/60 to-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Animated, gradient-underlined section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <motion.h2
                        className="text-4xl sm:text-5xl font-extrabold tracking-tight stylish-title mb-6 flex items-center justify-center gap-2 relative"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                        >
                            <Lightbulb className="w-8 h-8 text-primary-500" />
                        </motion.div>
                        <span className="relative inline-block">
                            About Us
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
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-justify"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <span className="float-left text-5xl font-bold text-primary-500 mr-3 leading-none select-none" style={{ fontFamily: 'serif' }}>
                            {siteContent.about.description.charAt(0)}
                        </span>
                        {siteContent.about.description.slice(1)}
                    </motion.p>
                </motion.div>

                {/* Objectives Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {objectives.map((objective, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="relative bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center group overflow-hidden hover:shadow-2xl transition-all duration-300"
                            onHoverStart={() => setHoveredObjective(index)}
                            onHoverEnd={() => setHoveredObjective(null)}
                        >
                            <motion.div
                                className={`absolute inset-0 bg-gradient-to-br ${objective.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                                animate={{
                                    scale: hoveredObjective === index ? 1.1 : 1,
                                    rotate: hoveredObjective === index ? 5 : 0
                                }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.div
                                animate={{
                                    scale: hoveredObjective === index ? 1.2 : 1,
                                    rotate: hoveredObjective === index ? 10 : 0
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <objective.icon className="w-16 h-16 text-primary-200 absolute right-4 top-4 opacity-20 group-hover:opacity-30 transition-all duration-300" />
                            </motion.div>
                            <h3 className="text-2xl font-extrabold stylish-title text-primary-600 mb-4 group-hover:underline group-hover:decoration-primary-400 group-hover:underline-offset-8 transition-all duration-300">
                                {objective.title}
                            </h3>
                            <p className="text-gray-700 text-justify leading-relaxed mb-4">
                                {objective.description}
                            </p>
                            <motion.div
                                className="text-sm text-primary-600 font-semibold"
                                animate={{
                                    y: hoveredObjective === index ? -5 : 0
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {objective.stats}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Mission & Vision */}
                <motion.div
                    className="grid md:grid-cols-2 gap-8 mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        variants={itemVariants}
                        className="relative bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center group overflow-hidden hover:shadow-2xl transition-all duration-300"
                    >
                        <motion.div
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        >
                            <Award className="w-16 h-16 text-primary-200 absolute right-4 top-4 opacity-20 group-hover:scale-110 group-hover:opacity-30 transition-all duration-300" />
                        </motion.div>
                        <h3 className="text-2xl font-extrabold stylish-title text-primary-600 mb-4 group-hover:underline group-hover:decoration-primary-400 group-hover:underline-offset-8 transition-all duration-300">
                            Mission Statement
                        </h3>
                        <p className="text-gray-700 text-justify leading-relaxed">
                            {siteContent.about.mission}
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="relative bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center group overflow-hidden hover:shadow-2xl transition-all duration-300"
                    >
                        <motion.div
                            animate={{ rotate: [0, -5, 5, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        >
                            <Lightbulb className="w-16 h-16 text-primary-200 absolute right-4 top-4 opacity-20 group-hover:scale-110 group-hover:opacity-30 transition-all duration-300" />
                        </motion.div>
                        <h3 className="text-2xl font-extrabold stylish-title text-primary-600 mb-4 group-hover:underline group-hover:decoration-primary-400 group-hover:underline-offset-8 transition-all duration-300">
                            Our Vision
                        </h3>
                        <p className="text-gray-700 text-justify leading-relaxed">
                            {siteContent.about.vision}
                        </p>
                    </motion.div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center"
                >
                    <Link
                        href="/about"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-primary-600 text-white font-semibold shadow-lg hover:bg-primary-700 transition-colors duration-300 group"
                    >
                        <span>Learn More About Us</span>
                        <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
} 
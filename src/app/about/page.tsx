'use client';

import { siteContent } from '@/data/content';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Mic, Users, MessageSquare, Award, ArrowRight, ChevronRight,
    Target, Globe, Heart, BookOpen, Star, Flag, Eye,
    Volume2, GraduationCap, Users2, BookOpenCheck, MessageCircle,
    Briefcase, Lightbulb, BarChart3, Target as TargetIcon
} from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
    const objectives = [
        {
            icon: Target,
            title: "Promote Decorous Language",
            description: "Foster respectful and appropriate language use in media and public discourse"
        },
        {
            icon: Globe,
            title: "Cultural Awareness",
            description: "Enhance understanding of cultural communication and language nuances"
        },
        {
            icon: Heart,
            title: "Peace & Unity",
            description: "Promote national peace and cohesion through mindful communication"
        },
        {
            icon: BookOpen,
            title: "Language Education",
            description: "Provide comprehensive training in effective communication skills"
        },
        {
            icon: Star,
            title: "Professional Excellence",
            description: "Develop expertise in public speaking and media communication"
        }
    ];

    const activities = [
        {
            icon: Volume2,
            title: "Speaking Club",
            subtitle: "#kasadɛ, Kasahwam, #YԑnhwԑYԑnKasaYie",
            description: "Programs that draw attention to power of the spoken words. Organizes reading, writing & speaking skills workshop for its members.",
            features: ["Reading Skills", "Writing Skills", "Speaking Skills", "Workshop Sessions"]
        },
        {
            icon: GraduationCap,
            title: "NAWA Language & Culture Club",
            subtitle: "Efie Nimdeɛ (Children & Youth Club)",
            description: "Reading and writing activities that promote the learning of their language (mother tongue), cultural values, etiquettes, politeness strategies and speaking skills in general.",
            features: ["Mother Tongue Learning", "Cultural Values", "Etiquette Training", "Speaking Skills"]
        },
        {
            icon: MessageCircle,
            title: "NAWA Public Lectures",
            description: "Research, Publications, Workshops, Public Lectures (Language use in media, politics, law court, church, chief palace, health care, business etc.)",
            features: ["Research", "Publications", "Workshops", "Public Lectures"]
        },
        {
            icon: Users2,
            title: "Skills/Training",
            subtitle: "Communicative Competence",
            description: "Public Speaking, Political & Socio-Cultural Context, Effective Communication, Voice & Speech (Strategic & Effective Communication Consult – SEFFCOM CONSULT).",
            features: ["Public Speaking", "Political Context", "Socio-Cultural Training", "Voice & Speech"]
        },
        {
            icon: BookOpenCheck,
            title: "KASA - Word Therapy & Peace Outreach",
            description: "Mediation, Advice, Counseling Services on sensitive/delicate utterances, effective communication in marriage & family life, workplaces, customer services/relations etc.",
            features: ["Mediation", "Counseling", "Family Communication", "Workplace Relations"]
        }
    ];

    const seffcomServices = [
        {
            icon: Briefcase,
            title: "Professional Training",
            description: "Comprehensive training programs for effective communication in professional settings",
            features: ["Public Speaking", "Business Communication", "Leadership Skills"]
        },
        {
            icon: Lightbulb,
            title: "Strategic Communication",
            description: "Expert guidance on developing and implementing effective communication strategies",
            features: ["Strategy Development", "Message Crafting", "Audience Analysis"]
        },
        {
            icon: BarChart3,
            title: "Performance Analysis",
            description: "Detailed analysis and feedback on communication effectiveness and impact",
            features: ["Impact Assessment", "Performance Metrics", "Improvement Plans"]
        },
        {
            icon: TargetIcon,
            title: "Custom Solutions",
            description: "Tailored communication solutions for specific organizational needs",
            features: ["Needs Assessment", "Custom Programs", "Implementation Support"]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>

                <div className="container mx-auto px-4 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-white"
                        >
                            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                                <span className="text-sm font-medium">About Us</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                {siteContent.about.title}
                            </h1>
                            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                                {siteContent.about.description}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="#mission"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white text-primary-900 font-semibold hover:bg-gray-100 transition-colors duration-300"
                                >
                                    Our Mission
                                    <ChevronRight className="w-5 h-5" />
                                </Link>
                                <Link
                                    href="#seffcom"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary-700 text-white font-semibold hover:bg-primary-600 transition-colors duration-300"
                                >
                                    SEFFCOM CONSULT
                                    <ChevronRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </motion.div>

                        {/* Right Column - Visual Elements */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                {/* Feature Cards */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
                                >
                                    <Mic className="w-8 h-8 text-primary-300 mb-4" />
                                    <h3 className="text-xl font-semibold text-white mb-2">Public Speaking</h3>
                                    <p className="text-gray-200">Master the art of confident communication</p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
                                >
                                    <MessageSquare className="w-8 h-8 text-primary-300 mb-4" />
                                    <h3 className="text-xl font-semibold text-white mb-2">Language Training</h3>
                                    <p className="text-gray-200">Enhance your linguistic capabilities</p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
                                >
                                    <Users className="w-8 h-8 text-primary-300 mb-4" />
                                    <h3 className="text-xl font-semibold text-white mb-2">Cultural Awareness</h3>
                                    <p className="text-gray-200">Understand cultural communication nuances</p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
                                >
                                    <Award className="w-8 h-8 text-primary-300 mb-4" />
                                    <h3 className="text-xl font-semibold text-white mb-2">Professional Development</h3>
                                    <p className="text-gray-200">Advance your communication career</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <motion.div
                            animate={{
                                y: [0, 12, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="w-1.5 h-1.5 bg-white rounded-full mt-2"
                        />
                    </div>
                </motion.div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto space-y-16">
                    {/* Objectives Section */}
                    <section className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold text-primary-900 mb-8">Our Objectives</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {objectives.map((objective, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-primary-50 p-6 rounded-lg"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <objective.icon className="w-6 h-6 text-primary-600" />
                                        <h3 className="font-semibold text-primary-900">{objective.title}</h3>
                                    </div>
                                    <p className="text-gray-600">{objective.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Mission & Vision */}
                    <section id="mission" className="relative">
                        {/* Decorative Element */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary-200 transform -translate-x-1/2 hidden md:block" />

                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white p-8 rounded-lg shadow-lg relative"
                            >
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                                    <Flag className="w-6 h-6 text-primary-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-primary-900 mb-4">Our Mission</h2>
                                <p className="text-gray-600 leading-relaxed">{siteContent.about.mission}</p>
                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <h3 className="text-lg font-semibold text-primary-900 mb-3">Key Focus Areas</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2 text-gray-600">
                                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                                            Media discourse observation
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-600">
                                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                                            Political communication analysis
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-600">
                                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                                            Public speaking education
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white p-8 rounded-lg shadow-lg relative"
                            >
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                                    <Eye className="w-6 h-6 text-primary-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-primary-900 mb-4">Our Vision</h2>
                                <p className="text-gray-600 leading-relaxed">{siteContent.about.vision}</p>
                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <h3 className="text-lg font-semibold text-primary-900 mb-3">Our Goals</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2 text-gray-600">
                                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                                            Become leading language experts
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-600">
                                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                                            Promote polite speech nationwide
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-600">
                                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                                            Influence positive communication
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* SEFFCOM CONSULT Section */}
                    <section id="seffcom" className="bg-white p-8 rounded-lg shadow-lg">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-primary-900 mb-4">SEFFCOM CONSULT</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Strategic & Effective Communication Consult - Your partner in professional communication excellence
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-gray-50 p-6 rounded-lg"
                            >
                                <h3 className="text-xl font-semibold text-primary-900 mb-4">Our Expertise</h3>
                                <p className="text-gray-600 mb-6">
                                    SEFFCOM CONSULT specializes in providing comprehensive communication solutions for organizations and individuals. We combine academic expertise with practical experience to deliver results-driven communication strategies.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-primary-100 p-2 rounded-full">
                                            <Award className="w-5 h-5 text-primary-600" />
                                        </div>
                                        <span className="text-gray-700">Professional Excellence</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="bg-primary-100 p-2 rounded-full">
                                            <Users className="w-5 h-5 text-primary-600" />
                                        </div>
                                        <span className="text-gray-700">Team Collaboration</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="bg-primary-100 p-2 rounded-full">
                                            <MessageSquare className="w-5 h-5 text-primary-600" />
                                        </div>
                                        <span className="text-gray-700">Strategic Communication</span>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-gray-50 p-6 rounded-lg"
                            >
                                <h3 className="text-xl font-semibold text-primary-900 mb-4">Our Approach</h3>
                                <p className="text-gray-600 mb-6">
                                    We take a holistic approach to communication consulting, focusing on both individual and organizational needs. Our methodology combines research-based insights with practical implementation strategies.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-primary-100 p-2 rounded-full">
                                            <Target className="w-5 h-5 text-primary-600" />
                                        </div>
                                        <span className="text-gray-700">Goal-Oriented Solutions</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="bg-primary-100 p-2 rounded-full">
                                            <BookOpen className="w-5 h-5 text-primary-600" />
                                        </div>
                                        <span className="text-gray-700">Research-Based Methods</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="bg-primary-100 p-2 rounded-full">
                                            <Star className="w-5 h-5 text-primary-600" />
                                        </div>
                                        <span className="text-gray-700">Quality Assurance</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                            {seffcomServices.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
                                >
                                    <div className="bg-primary-100 p-3 rounded-lg w-fit mb-4">
                                        <service.icon className="w-6 h-6 text-primary-600" />
                                    </div>
                                    <h4 className="text-lg font-semibold text-primary-900 mb-2">
                                        {service.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm mb-4">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>

                        <div className="text-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-primary-600 text-white font-semibold shadow-lg hover:bg-primary-700 transition-colors duration-300"
                            >
                                Get in Touch
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </section>

                    {/* Activities Section */}
                    <section className="bg-white p-8 rounded-lg shadow-lg">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-primary-900 mb-4">Our Activities</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Discover our comprehensive range of programs and initiatives designed to promote effective communication and cultural understanding.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {activities.map((activity, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary-100 p-3 rounded-lg">
                                            <activity.icon className="w-6 h-6 text-primary-600" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-primary-900 mb-1">
                                                {activity.title}
                                            </h3>
                                            {activity.subtitle && (
                                                <p className="text-sm text-primary-600 mb-3">
                                                    {activity.subtitle}
                                                </p>
                                            )}
                                            <p className="text-gray-600 mb-4">
                                                {activity.description}
                                            </p>
                                            <div className="grid grid-cols-2 gap-2">
                                                {activity.features.map((feature, featureIndex) => (
                                                    <div
                                                        key={featureIndex}
                                                        className="flex items-center gap-2 text-sm text-gray-600"
                                                    >
                                                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                                                        {feature}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Call to Action */}
                        <div className="text-center mt-12">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-primary-600 text-white font-semibold shadow-lg hover:bg-primary-700 transition-colors duration-300"
                            >
                                Join Our Programs
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
} 
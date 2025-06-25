'use client';

import { siteContent } from '@/data/content';
import Link from 'next/link';
import Image from 'next/image';
import { User, ArrowRight, Users, Award, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TeamPreview() {
    // Show founder and first two advisory board members
    const previewMembers = [
        {
            name: siteContent.team.founder.name,
            role: siteContent.team.founder.title,
            bio: siteContent.team.founder.bio,
            image: '/images/doc.jpeg',
            achievements: ["20+ Years Experience", "100+ Publications", "50+ Awards"]
        },
        ...siteContent.team.advisoryBoard.slice(0, 2).map(member => ({
            name: member.name,
            role: member.role,
            bio: '',
            image: '',
            achievements: ["Expert in Field", "Published Author", "Industry Leader"]
        })),
    ];

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

    return (
        <section id="team-preview" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
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
                    className="text-center mb-16"
                >
                    <motion.h2
                        className="text-4xl sm:text-5xl font-display font-bold text-dark-500 mb-6 flex items-center justify-center gap-2"
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
                            Meet Our Team
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
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        A few of our dedicated language and communication experts.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {previewMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            variants={itemVariants}
                            className="group bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="relative h-64 overflow-hidden rounded-t-2xl">
                                {member.image ? (
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-primary-100 flex items-center justify-center">
                                        <User className="w-24 h-24 text-primary-300" />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                                    <p className="text-primary-200">{member.role}</p>
                                </div>
                            </div>
                            <div className="p-6">
                                {member.bio && (
                                    <p className="text-gray-600 mb-4 line-clamp-3">{member.bio}</p>
                                )}
                                <div className="space-y-2">
                                    {member.achievements.map((achievement, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                            <Star className="w-4 h-4 text-primary-500" />
                                            <span>{achievement}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <Link
                        href="/team"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-primary-600 text-white font-semibold shadow-lg hover:bg-primary-700 transition-colors duration-300 group"
                    >
                        <span>View Full Team</span>
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
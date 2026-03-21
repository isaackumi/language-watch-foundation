'use client';

import { siteContent } from '@/data/content';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, Flag, Eye, ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const { about } = siteContent;

  return (
    <div className="min-h-screen bg-surface">
      {/* Back link */}
      <div className="fixed top-24 left-4 z-40">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-sm text-gray-700 font-semibold hover:bg-white hover:shadow-md transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section - yellow banner with jagged edge */}
      <section className="relative min-h-[50vh] bg-banner banner-jagged overflow-hidden">
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="inline-block bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-bold text-gray-800">About Us</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-title text-gray-900 mb-6 max-w-3xl"
          >
            {siteContent.meta.fullTitle}
          </motion.h1>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#mission"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-gray-900 font-bold hover:bg-gray-100 shadow-md transition-colors duration-300"
            >
              Our Mission
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              href="#activities"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-800 text-white font-bold hover:bg-primary-700 transition-colors duration-300"
            >
              Our Activities & Services
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-700/40 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-1.5 h-1.5 bg-gray-700 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* About paragraphs */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-primary-500 pb-2 inline-block">
            About Us
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            {about.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="relative py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-2xl flex-shrink-0">
              <Image
                src={siteContent.teamMembers.founder.image}
                alt={siteContent.teamMembers.founder.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-widest text-primary-600 mb-2">
                {siteContent.teamMembers.founder.title}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {siteContent.teamMembers.founder.name}
              </h2>
              <p className="text-primary-600 font-semibold mb-4 italic">
                {siteContent.teamMembers.founder.subtitle}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {siteContent.teamMembers.founder.bio}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-primary-600" />
            </div>
            <h2 className="text-2xl font-bold text-primary-900 mb-4 border-b-2 border-primary-200 pb-2">
              {about.vision.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">{about.vision.text}</p>
          </motion.section>

          <motion.section
            id="mission"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
              <Flag className="w-7 h-7 text-primary-600" />
            </div>
            <h2 className="text-2xl font-bold text-primary-900 mb-4 border-b-2 border-primary-200 pb-2">
              {about.mission.title}
            </h2>
            <p className="font-semibold text-gray-700 mb-3">{about.mission.intro}</p>
            <ul className="space-y-2 text-gray-600">
              {about.mission.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">⮚</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        </div>

        {/* Objectives */}
        <section className="mt-16 bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold text-primary-900 mb-8 border-b-2 border-primary-200 pb-2">
            {about.objectives.title}
          </h2>
          <ul className="space-y-4 text-gray-600">
            {about.objectives.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-primary-500 mt-1"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Other Activities & Services */}
        <section id="activities" className="mt-16 bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold text-primary-900 mb-8 border-b-2 border-primary-200 pb-2">
            {about.activities.title}
          </h2>
          <div className="space-y-8">
            {about.activities.items.map((item, i) => (
              <div key={i} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                <h3 className="text-lg font-bold text-primary-900 mb-2">⮚ {item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary-600 text-white font-bold shadow-lg hover:bg-primary-700 transition-colors duration-300"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

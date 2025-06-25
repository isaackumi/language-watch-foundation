import { siteContent } from '@/data/content';
import Link from 'next/link';
import Image from 'next/image';

export default function TeamPage() {
    return (
        <section className="py-24 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl sm:text-5xl font-display font-bold text-dark-500 mb-6">
                        Our Team
                    </h2>
                    <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Meet our dedicated team of language and communication experts.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {siteContent.team.members.map((member) => (
                        <div
                            key={member.slug}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                        >
                            <div className="relative h-80">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-display font-semibold text-dark-500 mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-primary-500 font-medium mb-4">
                                    {member.role}
                                </p>
                                <p className="text-gray-600 mb-6 line-clamp-3">
                                    {member.bio}
                                </p>
                                <Link
                                    href={`/team/${member.slug}`}
                                    className="inline-block mt-2 text-primary-500 hover:text-primary-600 font-medium transition-colors duration-300"
                                >
                                    View Profile
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 
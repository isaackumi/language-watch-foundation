import { siteContent } from '@/data/content';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const member = siteContent.team.members.find((m) => m.slug === slug);
    if (!member) return notFound();

    return (
        <section className="py-24 bg-white min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl mb-8 md:mb-0">
                        <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex-1">
                        <h1 className="text-4xl font-display font-bold text-dark-500 mb-2">{member.name}</h1>
                        <p className="text-primary-500 font-medium mb-4">{member.role}</p>
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">{member.bio}</p>
                        <div className="flex space-x-4">
                            {member.social.linkedin && (
                                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z" /></svg>
                                </a>
                            )}
                            {member.social.twitter && (
                                <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636a9.936 9.936 0 0 0 2.457-2.548z" /></svg>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 
import { siteContent } from '@/data/content';
import Image from 'next/image';
import { User, Users, Globe, Award, Briefcase, MapPin, ArrowRight } from 'lucide-react';

function MemberCard({ name, role, bio, image }: { name: string; role: string; bio?: string; image?: string }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 card-hover flex flex-col h-full">
            <div className="relative h-56 flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100">
                {image ? (
                    <Image src={image} alt={name} fill className="object-cover group-hover:scale-105 transition-transform duration-700 rounded-t-2xl" />
                ) : (
                    <User className="w-20 h-20 text-primary-400" />
                )}
            </div>
            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-display font-semibold text-dark-500 mb-1 flex items-center gap-2">
                    <User className="w-5 h-5 text-primary-500" /> {name}
                </h3>
                <p className="text-primary-500 font-medium mb-2 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-primary-400" /> {role}
                </p>
                {bio && <p className="text-gray-600 mb-4 line-clamp-2">{bio}</p>}
            </div>
        </div>
    );
}

export default function Team() {
    const founder = siteContent.team.founder;
    const advisory = siteContent.team.advisoryBoard;
    const associates = siteContent.team.associates;
    const outreach = siteContent.team.outreach;
    const it = siteContent.team.it;
    const research = siteContent.team.research;
    const translation = siteContent.team.translation;
    const regional = siteContent.team.regional;
    const international = siteContent.team.international;

    return (
        <section id="team" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl sm:text-5xl font-display font-bold text-dark-500 mb-6 flex items-center justify-center gap-2">
                        <Users className="w-8 h-8 text-primary-500" /> Our Team
                    </h2>
                    <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Meet our dedicated team of language and communication experts.
                    </p>
                </div>

                {/* Founder */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-primary-600 mb-6 flex items-center gap-2"><Award className="w-6 h-6 text-primary-400" /> Founder & CEO</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <MemberCard name={founder.name} role={founder.title} bio={founder.bio} image={'/images/doc.jpeg'} />
                    </div>
                </div>

                {/* Advisory Board */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-primary-600 mb-6 flex items-center gap-2"><Users className="w-6 h-6 text-primary-400" /> Advisory Board</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {advisory.map((member) => (
                            <MemberCard key={member.name} name={member.name} role={member.role} />
                        ))}
                    </div>
                </div>

                {/* Associates */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-primary-600 mb-6 flex items-center gap-2"><Users className="w-6 h-6 text-primary-400" /> Associates</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {associates.map((member) => (
                            <MemberCard key={member.name} name={member.name} role={member.role} />
                        ))}
                    </div>
                </div>

                {/* Outreach & Media */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-primary-600 mb-6 flex items-center gap-2"><Users className="w-6 h-6 text-primary-400" /> Outreach, Media & PR</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <MemberCard name={outreach.manager} role="Outreach & Programs Manager" />
                        {outreach.media.map((name) => (
                            <MemberCard key={name} name={name} role="Media & PR Officer" />
                        ))}
                    </div>
                </div>

                {/* IT & Graphic Design */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-primary-600 mb-6 flex items-center gap-2"><User className="w-6 h-6 text-primary-400" /> IT & Graphic Design</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {it.map((name) => (
                            <MemberCard key={name} name={name} role="IT & Graphic Design" />
                        ))}
                    </div>
                </div>

                {/* Research & Publications */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-primary-600 mb-6 flex items-center gap-2"><User className="w-6 h-6 text-primary-400" /> Data, Research & Publications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {research.map((name) => (
                            <MemberCard key={name} name={name} role="Research & Publications" />
                        ))}
                    </div>
                </div>

                {/* Translation Team */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-primary-600 mb-6 flex items-center gap-2"><User className="w-6 h-6 text-primary-400" /> Language & Translation Team</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {translation.map((name) => (
                            <MemberCard key={name} name={name} role="Language & Translation" />
                        ))}
                    </div>
                </div>

                {/* Regional Team Leaders */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-primary-600 mb-6 flex items-center gap-2"><MapPin className="w-6 h-6 text-primary-400" /> Regional Team Leaders</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.entries(regional).map(([region, names]) =>
                            names.map((name: string) => (
                                <MemberCard key={region + name} name={name} role={region} />
                            ))
                        )}
                    </div>
                </div>

                {/* International Reps */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold text-primary-600 mb-6 flex items-center gap-2"><Globe className="w-6 h-6 text-primary-400" /> International Representatives</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.entries(international).map(([country, names]) =>
                            names.map((name: string) => (
                                <MemberCard key={country + name} name={name} role={country} />
                            ))
                        )}
                    </div>
                </div>

                <div className="text-center mt-12">
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-primary-500 text-white font-semibold rounded-full shadow hover:bg-primary-600 transition-colors duration-300 btn-primary"
                    >
                        Contact the Team <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
} 
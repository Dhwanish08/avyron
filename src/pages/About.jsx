import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-charcoal dark:text-gray-100 antialiased transition-colors duration-300">

            {/* Header / Hero Section */}
            <header className="bg-cream dark:bg-background-dark/50 py-24 md:py-32 pt-40">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-charcoal dark:text-white tracking-tight mb-6">
                        About <span className="text-primary">Avyron</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        We bridge the gap between visionary ideas and measurable market success.
                    </p>
                </div>
            </header>

            {/* Section 1: Our Story */}
            <section className="py-20 md:py-32 bg-white dark:bg-background-dark">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="flex items-center justify-center mb-8">
                        <div className="h-1 w-12 bg-primary rounded-full"></div>
                    </div>
                    <h2 className="text-3xl font-bold text-center mb-10 dark:text-white">Our Story</h2>
                    <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-loose text-center">
                        <p>
                            Founded on the belief that every brand has a unique story waiting to be told, Avyron Agency started as a small collective of three creative minds in a shared workspace. Our journey began with a single mission: to provide high-impact marketing strategies that don't just look good but drive actual growth.
                        </p>
                        <p>
                            Over the last decade, we have evolved into a full-service growth powerhouse. We've helped startups find their voice and established enterprises rediscover their spark. Our growth-focused philosophy ensures that every pixel we move and every line of code we write serves a strategic purpose.
                        </p>
                        <p>
                            Today, Avyron stands as a testament to the power of persistence and data-backed creativity. We aren't just an agency; we are your strategic partners in the digital landscape.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 2: Mission & Vision */}
            <section className="py-20 bg-background-light dark:bg-background-dark/80">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Mission Card */}
                        <div className="bg-white dark:bg-background-dark p-10 rounded-xl shadow-sm border border-gray-100 dark:border-primary/10 hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                                <span className="material-icons text-primary text-3xl">rocket_launch</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 dark:text-white">Our Mission</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                To empower brands through strategic innovation, combining cutting-edge technology with human-centric design to create lasting market impact and sustainable growth.
                            </p>
                        </div>
                        {/* Vision Card */}
                        <div className="bg-white dark:bg-background-dark p-10 rounded-xl shadow-sm border border-gray-100 dark:border-primary/10 hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                                <span className="material-icons text-primary text-3xl">visibility</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 dark:text-white">Our Vision</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                To be the global leader in accessible, data-backed marketing, setting the standard for how brands interact with their audiences in an ever-evolving digital world.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Why Choose Us */}
            <section className="py-20 md:py-32 bg-white dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 dark:text-white">Why Choose Us</h2>
                        <p className="text-gray-500 dark:text-gray-400">The pillars of our agency excellence.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div className="text-center group p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 dark:bg-primary/5 group-hover:bg-primary/10 transition-colors">
                                <span className="material-icons text-gray-400 dark:text-gray-500 group-hover:text-primary transition-colors text-3xl">insights</span>
                            </div>
                            <h4 className="font-bold text-xl mb-3 dark:text-white">Data-driven decisions</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">We use hard analytics to guide every strategic move we make.</p>
                        </div>
                        <div className="text-center group p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 dark:bg-primary/5 group-hover:bg-primary/10 transition-colors">
                                <span className="material-icons text-gray-400 dark:text-gray-500 group-hover:text-primary transition-colors text-3xl">lightbulb</span>
                            </div>
                            <h4 className="font-bold text-xl mb-3 dark:text-white">Creative thinking</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Out-of-the-box solutions that capture attention and drive engagement.</p>
                        </div>
                        <div className="text-center group p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 dark:bg-primary/5 group-hover:bg-primary/10 transition-colors">
                                <span className="material-icons text-gray-400 dark:text-gray-500 group-hover:text-primary transition-colors text-3xl">trending_up</span>
                            </div>
                            <h4 className="font-bold text-xl mb-3 dark:text-white">Affordable growth</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Premium quality services with scalable pricing for any business size.</p>
                        </div>
                        <div className="text-center group p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 dark:bg-primary/5 group-hover:bg-primary/10 transition-colors">
                                <span className="material-icons text-gray-400 dark:text-gray-500 group-hover:text-primary transition-colors text-3xl">auto_fix_high</span>
                            </div>
                            <h4 className="font-bold text-xl mb-3 dark:text-white">End-to-end execution</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">From initial concept to final launch and ongoing optimization.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Team Culture */}
            <section className="py-20 bg-background-light dark:bg-background-dark/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="relative rounded-2xl overflow-hidden aspect-[21/9] mb-12 shadow-2xl">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-uh_tHDU62EfRQ3WlXjVMgoVVylJqakMuQQr30Vfc_pGdXS35nay6b3nwBkvodn-XVOSGMcopaibdPD1-LxWZp36TO5bH9FzE5tF2hDKEG_DYuUfVuiKLXvdJJ34-j2ElLqzWDX24gH8P-GKx8q7srana0VyuWIcV6r-ZxFgb0HETSRv81gkMtW_H61xZzihRO7CkY_ZGDQKNqGotYBxa4WS6wSoKXGT8v9Xs6LOeuenH-JhkJbmZkqyim2tjHqcbMcLaJ8G4C5A"
                            alt="Avyron Team"
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8 md:p-16">
                            <div className="text-white max-w-2xl">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our People-First Culture</h2>
                                <p className="text-lg text-gray-200">
                                    Behind every successful campaign is a dedicated team of experts. We foster an environment where creativity thrives and every voice matters.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div className="p-6 bg-white dark:bg-background-dark/30 rounded-lg border border-transparent hover:border-primary/20 transition-colors">
                            <div className="text-4xl font-bold text-primary mb-1">50+</div>
                            <div className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wider">Creative Experts</div>
                        </div>
                        <div className="p-6 bg-white dark:bg-background-dark/30 rounded-lg border border-transparent hover:border-primary/20 transition-colors">
                            <div className="text-4xl font-bold text-primary mb-1">120+</div>
                            <div className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wider">Projects Delivered</div>
                        </div>
                        <div className="p-6 bg-white dark:bg-background-dark/30 rounded-lg border border-transparent hover:border-primary/20 transition-colors">
                            <div className="text-4xl font-bold text-primary mb-1">15</div>
                            <div className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wider">Industry Awards</div>
                        </div>
                        <div className="p-6 bg-white dark:bg-background-dark/30 rounded-lg border border-transparent hover:border-primary/20 transition-colors">
                            <div className="text-4xl font-bold text-primary mb-1">98%</div>
                            <div className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wider">Client Retention</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="bg-primary py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Let’s Work Together</h2>
                    <p className="text-white/80 text-xl mb-12 max-w-xl mx-auto">
                        Ready to take your brand to the next level? Our team is standing by to help you grow.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/contact" className="bg-white text-primary font-bold px-10 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-lg shadow-black/10">
                            Get Started
                        </Link>
                        <Link to="/portfolio" className="bg-transparent border-2 border-white/30 text-white font-bold px-10 py-4 rounded-lg hover:bg-white/10 transition-colors">
                            View Portfolio
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;

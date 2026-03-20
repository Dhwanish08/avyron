import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-charcoal dark:text-gray-100 font-display transition-colors duration-300">

            {/* Header Section */}
            <header className="bg-cream-bg dark:bg-charcoal/20 py-24 px-6 bg-cream">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-6xl md:text-8xl font-black text-charcoal dark:text-white mb-6">Our Work</h1>
                    <p className="text-xl md:text-2xl text-charcoal/70 dark:text-gray-400 max-w-2xl leading-relaxed">
                        Elevating brands through strategic design, digital excellence, and high-impact marketing campaigns.
                    </p>
                </div>
            </header>

            {/* Filter Bar */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-wrap gap-4 items-center">
                    <button className="px-8 py-3 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/20 transition-all">All Projects</button>
                    <button className="px-8 py-3 bg-white dark:bg-background-dark border border-primary/20 hover:border-primary text-charcoal dark:text-gray-300 rounded-full font-semibold transition-all">Branding</button>
                    <button className="px-8 py-3 bg-white dark:bg-background-dark border border-primary/20 hover:border-primary text-charcoal dark:text-gray-300 rounded-full font-semibold transition-all">Ads</button>
                    <button className="px-8 py-3 bg-white dark:bg-background-dark border border-primary/20 hover:border-primary text-charcoal dark:text-gray-300 rounded-full font-semibold transition-all">Events</button>
                    <button className="px-8 py-3 bg-white dark:bg-background-dark border border-primary/20 hover:border-primary text-charcoal dark:text-gray-300 rounded-full font-semibold transition-all">Social Media</button>
                </div>
            </section>

            {/* Project Grid */}
            <section className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Card 1 */}
                    <div className="group cursor-pointer">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-200 mb-6">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9ksy2nG2hyOezS2N0Vv7ex94uopy_6iRqM4sYUJ-OnaOV_OFYLluENWIat22xl5u2k_4emd8N6gt2tEkMhErHYenctI_2GBOjXq8bbjYDfQHbQe26JfTyTOP9jmsnGd6xN06Dhr--tCLlWefIvQEQrnT1MZaUctuR1GhFbh48qz_gEINXZEkym7ILPttydkdeVy07CW55w2fB0l1nmRXbNCEok-gvbUmxJfPdbUZYnkNITzuKiJZ7vMSV4pYm-RyXYIzniinV-GU"
                                alt="Eco-Brand Identity design showcase"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        <h3 className="text-2xl font-bold text-charcoal dark:text-white mb-2">Eco-Brand Identity</h3>
                        <p className="text-charcoal/60 dark:text-gray-400 mb-4 line-clamp-2">Complete visual overhaul for a sustainable tech company focusing on carbon neutrality.</p>
                        <a href="#" className="text-primary font-bold flex items-center group-hover:underline">
                            View Case Study <span className="material-icons text-sm ml-1">arrow_forward</span>
                        </a>
                    </div>

                    {/* Card 2 */}
                    <div className="group cursor-pointer">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-200 mb-6">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU2KCDmZ22EBQCOlfgrQ5u3BNk9FQJCvcz8WMAF2B78z1iOYzBqAgfPdEOrZ3SshNXmAAQSX7Gd3Oy6eQOOjW33xjRfE3IGPg0Z8onWa9m1K1d2Q173gd32Cb2Tdw1OTbk9xTRQHmHxiUxw6rWX8hOO7Ljitf6v1ELpQDpEx9PHhhpDe8mf5PE72PJPjJI4AbL_SgXfzNRShEY3_w8_CvGCr7YL1xbjisA5pCgTGnvYuQRvRFK1bdeQNUcazlps6tuD93tn8HjW1Y"
                                alt="Modern office social media campaign"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-charcoal dark:text-white mb-2">Social Growth Strategy</h3>
                        <p className="text-charcoal/60 dark:text-gray-400 mb-4 line-clamp-2">How we increased engagement by 400% for a leading SaaS productivity platform.</p>
                        <a href="#" className="text-primary font-bold flex items-center group-hover:underline">
                            View Case Study <span className="material-icons text-sm ml-1">arrow_forward</span>
                        </a>
                    </div>

                    {/* Card 3 */}
                    <div className="group cursor-pointer">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-200 mb-6">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAToVNi8U6WWDz3Mzt3ORiU_GIR5uuc7zAHQ-Vl82EuIVzGhYewO1RolC3UCcjmP-pC65-SvBb8JnUMuDGuEZHmPlST3FNW17q_Wy9p3572zYmEOAk947mN9flj1orBIbM-n8Pv4_U7xx_1425jGgYhaf3fyGeb-ZxlmFrvegJm-9AE-OAquJAGeOSaZWYdALLqhN5OHICTqGAaZ7_oYQz4TfD24rTScsS6Zkdsw3zB5MPao0rgIi-7g1E0nQZ20Sa7G0iBSsBYehQ"
                                alt="Summit 2024 Event"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-charcoal dark:text-white mb-2">Summit 2024 Event</h3>
                        <p className="text-charcoal/60 dark:text-gray-400 mb-4 line-clamp-2">Full-scale event marketing and branding for the year's biggest tech summit.</p>
                        <a href="#" className="text-primary font-bold flex items-center group-hover:underline">
                            View Case Study <span className="material-icons text-sm ml-1">arrow_forward</span>
                        </a>
                    </div>

                    {/* Card 4 */}
                    <div className="group cursor-pointer">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-200 mb-6">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJUfUGQe9Khd8O2RWT0twKg-VXvRcvoF8Z5PSstLT3BbsArgHMhocxjudZQ2M4jp8RFvwH-AITU5BKEu-gHbpsmxgpsp1W5KtbXsUrD0pnjEx97qfH-6ZHvwECYQq8Jf-7KQqYHQT4tbWAqHElI_an1CMXjMz9VhK9MdyvyRLPknCYGCsVZizZ818-cWYtvkOZicy3BMXHpRGFpESm4-iRk5oezlYvMZMIxdcj0GibfDcKGceEjkS6dTyg_LgZ0X0D2a6CaRHuPxw"
                                alt="Ads Analytics"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-charcoal dark:text-white mb-2">Performance Ads Engine</h3>
                        <p className="text-charcoal/60 dark:text-gray-400 mb-4 line-clamp-2">Scaling a lifestyle brand from $10k to $100k monthly revenue through paid ads.</p>
                        <a href="#" className="text-primary font-bold flex items-center group-hover:underline">
                            View Case Study <span className="material-icons text-sm ml-1">arrow_forward</span>
                        </a>
                    </div>

                    {/* Card 5 */}
                    <div className="group cursor-pointer">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-200 mb-6">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2tM4hYuWE3qiUC2jaUVfjfLHnBscdZRyLIBif-jw8V8YY-sXsuRg-WUtAJH51ezRmrj5ocZlMMz6Gazbz1uT7tmiIlKat9PkTcsDvG3IXt4FG_BDfG_NjoBU80x9D4hOQzyt4PUGPqONouEu8aG1lAQZ57kRw3mSGOFbmZbYE_0OyPVpN_wA0QlVyOMpd_YaXdknX1Bn51Sx_JRZkOoQNdltSD9mC-f7Lq9HP3xpMPmF4xPOMH2oRfejigZN1xdZpvesswMp8iCM"
                                alt="Graphic Design"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-charcoal dark:text-white mb-2">Neo-Retail Brand System</h3>
                        <p className="text-charcoal/60 dark:text-gray-400 mb-4 line-clamp-2">Redefining the shopping experience through bold typography and vibrant color palettes.</p>
                        <a href="#" className="text-primary font-bold flex items-center group-hover:underline">
                            View Case Study <span className="material-icons text-sm ml-1">arrow_forward</span>
                        </a>
                    </div>

                    {/* Card 6 */}
                    <div className="group cursor-pointer">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-200 mb-6">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWqy_LZjLTbaqfgXxS8HzBcSciHWE5MxpbQ5qqLF4DiYbQox0Qr3essT5IbDle4l3BXBogTxjXGm4GxdTZHLHn1IaKCPC3lF6zyEpJV7qSWSd4Vo9v49GjNi1QtMddfoeZlrtZkFYm4mWcwfMG3scMDUCFRzNKZ-lyNFUsou_hm6bkABhHiaSJ9lbjuCCs1A3y99iYy6O3QZz2kRcvrx_12splWKMHAAaIHCcl8yQJfWAN7KqqfDiGVX2-f6o_qf1vTOYN7DBHCUQ"
                                alt="UI Design"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-charcoal dark:text-white mb-2">FinTech UI Overhaul</h3>
                        <p className="text-charcoal/60 dark:text-gray-400 mb-4 line-clamp-2">Modernizing complex banking tools for the next generation of digital-first users.</p>
                        <a href="#" className="text-primary font-bold flex items-center group-hover:underline">
                            View Case Study <span className="material-icons text-sm ml-1">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Featured Case Study Section */}
            <section className="bg-charcoal text-white py-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Left: Project Image */}
                        <div className="w-full lg:w-1/2 relative">
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa0lRkKGTk6iri5nGvtnpKeZYyL2bpVXUfjG57lXWeVnpYnzz5M4XgENjxo5pjbcYnf45d6u_1p7vE0aNZrN_W2X0pPzN-kC8_jAurnKLoKfCBzMbGay74nQP77jIWsXqTmEvECZqP-JoeDMJW0K3CF5taY05y87qSSjB8SgDuWEd_z6mxGphF_ADIarBO0zriUkFEL_fprjTc04XidhatMF6z_-rqKZj_-pnBKZccJG8cNfMZQC3udlkOc3M1pPsn0d9_-xmlQk8"
                                    alt="Eco-Brand main project visual"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                            <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/10 rounded-full blur-2xl"></div>
                        </div>
                        {/* Right: Details */}
                        <div className="w-full lg:w-1/2 space-y-10">
                            <div>
                                <span className="inline-block py-1 px-3 bg-primary text-xs font-bold uppercase tracking-widest rounded mb-4">Featured Success Story</span>
                                <h2 className="text-4xl md:text-5xl font-black mb-6">The Eco-Brand Transformation</h2>
                                <p className="text-gray-400 text-lg leading-relaxed">How we repositioned a traditional energy provider as a leader in sustainable innovation for the modern consumer.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-primary font-bold uppercase text-sm tracking-widest mb-2">Challenge</h4>
                                    <p className="text-gray-300">Stagnant user growth and outdated brand perception in a rapidly evolving green market.</p>
                                </div>
                                <div>
                                    <h4 className="text-primary font-bold uppercase text-sm tracking-widest mb-2">Solution</h4>
                                    <p className="text-gray-300">A multi-channel digital campaign focused on transparent impact reporting and human-centric design.</p>
                                </div>
                            </div>
                            <div className="pt-6 border-t border-white/10">
                                <h4 className="text-primary font-bold uppercase text-sm tracking-widest mb-6">Key Results</h4>
                                <div className="flex flex-wrap gap-8">
                                    <div>
                                        <span className="block text-4xl font-black">+150%</span>
                                        <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">Leads Generated</span>
                                    </div>
                                    <div>
                                        <span className="block text-4xl font-black">2.4M</span>
                                        <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">Social Impressions</span>
                                    </div>
                                    <div>
                                        <span className="block text-4xl font-black">45%</span>
                                        <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">Growth in Revenue</span>
                                    </div>
                                </div>
                            </div>
                            <button className="flex items-center space-x-2 text-white font-bold group">
                                <span className="text-lg">Read full case study</span>
                                <span className="material-icons group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="px-6 py-20">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-primary rounded-3xl p-12 md:p-20 flex flex-col items-center text-center relative overflow-hidden">
                        {/* Abstract BG patterns */}
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Ready to Be Our Next Success Story?</h2>
                            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                                Let's collaborate to build a brand that stands out and drives real business results.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact" className="bg-white text-primary px-10 py-5 rounded-xl font-black text-lg hover:scale-105 transition-transform shadow-xl">
                                    Book Strategy Call
                                </Link>
                                <Link to="/services" className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-xl font-black text-lg hover:bg-white/10 transition-colors">
                                    Our Process
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;

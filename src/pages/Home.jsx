import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <section className="bg-cream pt-20 pb-32">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h1 className="text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
                            Grow Your Brand With <span className="text-primary">Smart Marketing</span>
                        </h1>
                        <p className="text-xl font-medium text-charcoal/70 tracking-wide uppercase">
                            Personal Branding | Events | Performance Marketing
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="bg-primary hover:bg-red-700 text-white px-8 py-4 rounded font-bold text-lg transition-all text-center shadow-lg shadow-primary/25">
                                Get Started
                            </Link>
                            <Link to="/portfolio" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded font-bold text-lg transition-all text-center">
                                View Our Work
                            </Link>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-primary/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAExjfbk0aVtMAYtuA_4FRTIvls9N1ujZMlXKSycqMuyNCry_UJ88xFPm7rezEVC7X9xyzKRNEHiSpLI6pdaKRw2I67F8CkRcWLbOmXk8FHNji5uuhuSijjWwTwefnrTo00HROHENpDuaGN6_zQuft7UqCYRsw6XKLpmNyXGvAs0GppgTk4D0Yk_m5LhmNv_bVHtkh4qhEo7yAvbKyjseGVPkeD6Y8WXGj-bd2XfXkEz2FXoMdbMwXCy8xDwIJwS0xzwe0REBgTeYc"
                            alt="Strategic Marketing"
                            className="relative rounded-2xl shadow-2xl w-full h-[550px] object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-extrabold mb-16">Expert Solutions</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="p-8 rounded-xl bg-cream border border-warm-gray transition-hover hover:border-primary hover:shadow-xl hover:-translate-y-1 duration-300">
                            <span className="material-symbols-outlined text-5xl text-primary mb-6">person</span>
                            <h3 className="text-2xl font-bold mb-4">Personal Branding</h3>
                            <p className="text-charcoal/70 leading-relaxed">Elevate your executive presence and authority in your niche with strategic narrative building.</p>
                        </div>
                        <div className="p-8 rounded-xl bg-cream border border-warm-gray transition-hover hover:border-primary hover:shadow-xl hover:-translate-y-1 duration-300">
                            <span className="material-symbols-outlined text-5xl text-primary mb-6">draw</span>
                            <h3 className="text-2xl font-bold mb-4">Creative & Content</h3>
                            <p className="text-charcoal/70 leading-relaxed">Compelling visual storytelling and high-converting copy that resonates with your core audience.</p>
                        </div>
                        <div className="p-8 rounded-xl bg-cream border border-warm-gray transition-hover hover:border-primary hover:shadow-xl hover:-translate-y-1 duration-300">
                            <span className="material-symbols-outlined text-5xl text-primary mb-6">ads_click</span>
                            <h3 className="text-2xl font-bold mb-4">Performance Ads</h3>
                            <p className="text-charcoal/70 leading-relaxed">Data-driven ad campaigns focused on maximizing ROI and scaling your customer acquisition.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-cream">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-extrabold text-center mb-16">Who We Work With</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-8 rounded shadow-sm border border-warm-gray hover:border-primary transition-colors">
                            <h4 className="text-xl font-bold mb-2">Small Businesses</h4>
                            <p className="text-charcoal/60 text-sm">Local leaders looking to scale digital presence.</p>
                        </div>
                        <div className="bg-white p-8 rounded shadow-sm border border-warm-gray hover:border-primary transition-colors">
                            <h4 className="text-xl font-bold mb-2">Startups</h4>
                            <p className="text-charcoal/60 text-sm">Aggressive growth for venture-backed companies.</p>
                        </div>
                        <div className="bg-white p-8 rounded shadow-sm border border-warm-gray hover:border-primary transition-colors">
                            <h4 className="text-xl font-bold mb-2">Corporates</h4>
                            <p className="text-charcoal/60 text-sm">Enterprise-level brand strategy and global reach.</p>
                        </div>
                        <div className="bg-white p-8 rounded shadow-sm border border-warm-gray hover:border-primary transition-colors">
                            <h4 className="text-xl font-bold mb-2">Personal Brands</h4>
                            <p className="text-charcoal/60 text-sm">Founders and creators building lasting legacies.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white border-y border-warm-gray">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        <div className="group">
                            <div className="text-5xl font-extrabold text-charcoal mb-2 group-hover:text-primary transition-colors">2x</div>
                            <p className="text-primary font-bold uppercase text-sm tracking-widest">Growth</p>
                        </div>
                        <div className="group">
                            <div className="text-5xl font-extrabold text-charcoal mb-2 group-hover:text-primary transition-colors">3x</div>
                            <p className="text-primary font-bold uppercase text-sm tracking-widest">ROAS</p>
                        </div>
                        <div className="group">
                            <div className="text-5xl font-extrabold text-charcoal mb-2 group-hover:text-primary transition-colors">1M+</div>
                            <p className="text-primary font-bold uppercase text-sm tracking-widest">Impressions</p>
                        </div>
                        <div className="group">
                            <div className="text-5xl font-extrabold text-charcoal mb-2 group-hover:text-primary transition-colors">40%</div>
                            <p className="text-primary font-bold uppercase text-sm tracking-widest">Lead Boost</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-cream">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-extrabold text-center mb-16">Client Success</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-10 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                            <div className="flex text-primary mb-4">
                                <span className="material-symbols-outlined">star</span><span className="material-symbols-outlined">star</span><span className="material-symbols-outlined">star</span><span className="material-symbols-outlined">star</span><span className="material-symbols-outlined">star</span>
                            </div>
                            <p className="text-charcoal/80 italic mb-6">"Avyron transformed our digital approach. Our lead quality has never been higher."</p>
                            <div className="font-bold text-charcoal">Sarah Jenkins</div>
                            <div className="text-sm text-charcoal/60">CEO, TechStart</div>
                        </div>
                        <div className="bg-white p-10 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                            <div className="flex text-primary mb-4">
                                <span className="material-symbols-outlined">star</span><span className="material-symbols-outlined">star</span><span className="material-symbols-outlined">star</span><span className="material-symbols-outlined">star</span><span className="material-symbols-outlined">star</span>
                            </div>
                            <p className="text-charcoal/80 italic mb-6">"The performance ads team is world-class. We saw a 3x return within the first two months."</p>
                            <div className="font-bold text-charcoal">Marcus Thorne</div>
                            <div className="text-sm text-charcoal/60">Marketing Director, Global Retail</div>
                        </div>
                        <div className="bg-white p-10 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                            <div className="flex text-primary mb-4">
                                <span className="material-symbols-outlined">star</span><span className="material-symbols-outlined">star</span><span className="material-symbols-outlined">star</span><span className="material-symbols-outlined">star</span><span className="material-symbols-outlined">star</span>
                            </div>
                            <p className="text-charcoal/80 italic mb-6">"Their personal branding strategy helped me land three keynote speaking spots this year."</p>
                            <div className="font-bold text-charcoal">Elena Rodriguez</div>
                            <div className="text-sm text-charcoal/60">Founder, Visionary Lab</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-primary py-24">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">Let’s Build Your Growth Strategy</h2>
                    <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                        Join 100+ brands that have scaled their revenue with our proven marketing frameworks.
                    </p>
                    <Link to="/contact" className="bg-white text-primary hover:bg-cream px-12 py-5 rounded font-extrabold text-xl transition-all shadow-xl inline-block hover:scale-105">
                        Get Your Free Audit
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Home;

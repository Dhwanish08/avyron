import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-300">

            {/* Hero Header Section */}
            <section className="pt-40 pb-24 bg-cream dark:bg-primary/5">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
                        Our Services
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                        Helping brands and leaders scale through strategic storytelling and data-driven marketing.
                    </p>
                    <div className="mt-10 flex justify-center gap-4">
                        <div className="h-1 w-20 bg-primary rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* Main Content: Services Pillars */}
            <main className="py-24 space-y-32">
                {/* Pillar 1: Personal Branding */}
                <section className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="material-icons text-lg">person_outline</span>
                                Identity & Influence
                            </div>
                            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">Personal Branding</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                We build authoritative digital presences for founders, executives, and visionaries. Our strategy turns your professional experience into a magnetic personal brand that attracts opportunities.
                            </p>
                            <ul className="space-y-4 mb-10">
                                <li className="flex items-start gap-3">
                                    <span className="material-icons text-primary mt-1">check_circle</span>
                                    <span className="font-medium">LinkedIn Profile Optimization & Management</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-icons text-primary mt-1">check_circle</span>
                                    <span className="font-medium">Long-term Brand Strategy & Positioning</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-icons text-primary mt-1">check_circle</span>
                                    <span className="font-medium">Thought Leadership Content Production</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-icons text-primary mt-1">check_circle</span>
                                    <span className="font-medium">Public Figure Digital Profile Building</span>
                                </li>
                            </ul>
                            <Link to="/contact" className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2 w-fit">
                                Discuss Your Project
                                <span className="material-icons">arrow_forward</span>
                            </Link>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-primary/10 rounded-xl transition-all group-hover:bg-primary/20"></div>
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH5ge6qQDNwXnP4By6baTNPo3afIPwCpml5UhljU55ce8YJhoWupiB2O6Ig9jT8EPxit_R_946MW-LWWgFl_egmLPdIZ3h3gm_VpME5ppprBBzBBte-vgrULybOQIN-LD5W7LC9aErRyjst0pgzO3z6nv77LNDygfSadgg__LW5rjyqCN0SjeadGD8FIFdg-IfwCgSO6e-iejAXONFoECi8_hdOq6DsTILGlg5ihAiPvsv4h7GjkIpMkom22tui-smW0MLbjxVFMk"
                                    alt="Personal Branding"
                                    className="relative rounded-xl shadow-2xl w-full h-[450px] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pillar 2: Creative & Content */}
                <section className="bg-primary/5 dark:bg-white/5 py-24">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-primary/10 rounded-xl transition-all group-hover:bg-primary/20"></div>
                                    <img
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAubfMcaEPq-n1EWI6pOSOcvj2WogZK8EHsP-ow5fAVu0TdhLGVFxiQDYCULk8WlALTSaR_wrUv5YYVrLbbmRJYKCZXjP6ZoRrwwOHVRS77ddKq8z4E1VrMZxGxd8FsbmoA-dsD82LmkRX_kbgL9CAtNIHtJ91yCevE3FvsxZGxZu9vkA65UF2xBnPZAmxw1PDhoJWbubMqnLKz8zhBfRWpakqnWYVkevo82X5TTacOpbCuYT3V-butdSODxqVA3zgHul8XrEnMlZY"
                                        alt="Creative and Content"
                                        className="relative rounded-xl shadow-2xl w-full h-[450px] object-cover"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-4">
                                    <span className="material-icons text-lg">palette</span>
                                    Visual Storytelling
                                </div>
                                <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">Creative & Content</h2>
                                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                    High-impact visual assets that capture attention and drive engagement. From aesthetic social feeds to high-conversion ad creatives, we design for the modern consumer.
                                </p>
                                <ul className="space-y-4 mb-10">
                                    <li className="flex items-start gap-3">
                                        <span className="material-icons text-primary mt-1">check_circle</span>
                                        <span className="font-medium">High-Conversion Ad Creatives (Static & Motion)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-icons text-primary mt-1">check_circle</span>
                                        <span className="font-medium">Social Media Aesthetic & Content Planning</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-icons text-primary mt-1">check_circle</span>
                                        <span className="font-medium">Professional Brand Photoshoots & Video</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-icons text-primary mt-1">check_circle</span>
                                        <span className="font-medium">Event Content Coverage & Brand Activations</span>
                                    </li>
                                </ul>
                                <Link to="/contact" className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2 w-fit">
                                    Discuss Your Project
                                    <span className="material-icons">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pillar 3: Performance Marketing */}
                <section className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-4">
                                <span className="material-icons text-lg">trending_up</span>
                                Data-Driven Growth
                            </div>
                            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">Performance Marketing</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                Precision-targeted campaigns designed to maximize ROI. We combine technical expertise with creative testing to scale your business across the most effective digital channels.
                            </p>
                            <ul className="space-y-4 mb-10">
                                <li className="flex items-start gap-3">
                                    <span className="material-icons text-primary mt-1">check_circle</span>
                                    <span className="font-medium">Meta Ads (Instagram & Facebook) Management</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-icons text-primary mt-1">check_circle</span>
                                    <span className="font-medium">Google Search & Display Campaign Strategy</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-icons text-primary mt-1">check_circle</span>
                                    <span className="font-medium">Advanced Retargeting & Funnel Optimization</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-icons text-primary mt-1">check_circle</span>
                                    <span className="font-medium">Weekly Performance Reporting & Attribution</span>
                                </li>
                            </ul>
                            <Link to="/contact" className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2 w-fit">
                                Discuss Your Project
                                <span className="material-icons">arrow_forward</span>
                            </Link>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-primary/10 rounded-xl transition-all group-hover:bg-primary/20"></div>
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr2_qaMvqNbCyVP6tTzlOo5LSvX5tPjjbindDAur0OnOneVZdCo019FfYlBLPB5AUESna57tH4v2UP2i6cS72CjaxxY4_nxm-eVAgipwg6xk6rlupHt275b7myxrVOCf4j2vJjqRsqEbpIXF21gTPRCpwwr_dbcqT9Pk-Vh1mlCtW_r5_XJ0sX9Y1lLAds9sTJrXqwLrUIRax2JS9TzgdaSLaFQWz1WCHkcjZMM_wqAux7pb2oMtilpdnnEynznZR46M4CzzD3sgs"
                                    alt="Performance Marketing"
                                    className="relative rounded-xl shadow-2xl w-full h-[450px] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Bottom CTA */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to transform your brand's digital presence?</h2>
                    <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                        Join 50+ industry leaders who have scaled their impact and revenue with our strategic approach.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contact" className="bg-primary text-white px-10 py-5 rounded-xl font-bold text-xl hover:scale-105 transition-transform">
                            Book a Strategy Call
                        </Link>
                        <Link to="/portfolio" className="bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all">
                            View Case Studies
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;

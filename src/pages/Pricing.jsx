import { Link } from 'react-router-dom';

const Pricing = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-gray-100 antialiased transition-colors duration-300">

            {/* Hero Section */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-gray-900 dark:text-white">
                        Simple, <span className="text-primary">Growth-Focused</span> Pricing
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Transparent packages designed to scale your brand. No hidden fees, just pure marketing performance tailored for your business needs.
                    </p>
                </div>
            </section>

            {/* Pricing Grid */}
            <section className="pb-32 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {/* Starter Plan */}
                    <div className="bg-white dark:bg-gray-800/40 border border-primary/10 rounded-xl p-8 flex flex-col hover:shadow-2xl hover:shadow-primary/5 transition-all group">
                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-2">Starter Plan</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Foundations for small businesses and solo ventures.</p>
                        </div>
                        <div className="mb-8">
                            <span className="text-4xl font-extrabold">$1,250</span>
                            <span className="text-gray-500 text-sm">/month</span>
                        </div>
                        <div className="flex-grow space-y-4 mb-10">
                            <div className="flex items-start gap-3">
                                <span className="material-icons text-primary text-sm mt-1">check_circle</span>
                                <span className="text-sm text-gray-700 dark:text-gray-300">8 Custom Social Posts</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="material-icons text-primary text-sm mt-1">check_circle</span>
                                <span className="text-sm text-gray-700 dark:text-gray-300">Basic Ad Management</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="material-icons text-primary text-sm mt-1">check_circle</span>
                                <span className="text-sm text-gray-700 dark:text-gray-300">Monthly Performance Reports</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="material-icons text-primary text-sm mt-1">check_circle</span>
                                <span className="text-sm text-gray-700 dark:text-gray-300">Standard Email Support</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="material-icons text-primary/30 text-sm mt-1">cancel</span>
                                <span className="text-sm text-gray-400">Strategy Sessions</span>
                            </div>
                        </div>
                        <Link to="/contact" className="w-full py-4 px-6 border-2 border-primary/20 hover:border-primary text-primary font-bold rounded-lg transition-all text-sm uppercase tracking-wider text-center">
                            Contact for Custom Quote
                        </Link>
                    </div>

                    {/* Growth Plan (Featured) */}
                    <div className="bg-white dark:bg-gray-800/60 border-2 border-primary rounded-xl p-8 flex flex-col relative shadow-xl shadow-primary/10 scale-105 z-10">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                            Most Popular
                        </div>
                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-2 text-primary">Growth Plan</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Scaling strategies for established brands seeking expansion.</p>
                        </div>
                        <div className="mb-8">
                            <span className="text-4xl font-extrabold">$3,500</span>
                            <span className="text-gray-500 text-sm">/month</span>
                        </div>
                        <div className="flex-grow space-y-4 mb-10">
                            <div className="flex items-start gap-3">
                                <span className="material-icons text-primary text-sm mt-1 font-bold">check_circle</span>
                                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">16 Custom Social Posts</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="material-icons text-primary text-sm mt-1 font-bold">check_circle</span>
                                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">Full Paid Ad Management</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="material-icons text-primary text-sm mt-1 font-bold">check_circle</span>
                                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">Bi-Weekly Strategy Calls</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="material-icons text-primary text-sm mt-1 font-bold">check_circle</span>
                                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">Advanced Analytics Dashboard</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="material-icons text-primary text-sm mt-1 font-bold">check_circle</span>
                                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">Priority Email & Chat</span>
                            </div>
                        </div>
                        <Link to="/contact" className="w-full py-4 px-6 bg-primary text-white font-bold rounded-lg hover:opacity-95 shadow-lg shadow-primary/30 transition-all text-sm uppercase tracking-wider text-center">
                            Contact for Custom Quote
                        </Link>
                    </div>

                    {/* Performance Plan */}
                    <div className="bg-white dark:bg-gray-800/40 border border-primary/10 rounded-xl p-8 flex flex-col hover:shadow-2xl hover:shadow-primary/5 transition-all group">
                        <div className="mb-8">
                            <h3 class="text-xl font-bold mb-2">Performance Plan</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Dominance through custom full-funnel dominance strategy.</p>
                        </div>
                        <div className="mb-8">
                            <span className="text-4xl font-extrabold">$7,900</span>
                            <span className="text-gray-500 text-sm">/month</span>
                        </div>
                        <div className="flex-grow space-y-4 mb-10">
                            <div className="flex items-start gap-3">
                                <span className="material-icons text-primary text-sm mt-1">check_circle</span>
                                <span className="text-sm text-gray-700 dark:text-gray-300">Daily Custom Content</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="material-icons text-primary text-sm mt-1">check_circle</span>
                                <span className="text-sm text-gray-700 dark:text-gray-300">Advanced Custom Targeting</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="material-icons text-primary text-sm mt-1">check_circle</span>
                                <span className="text-sm text-gray-700 dark:text-gray-300">Full Funnel CRO Strategy</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="material-icons text-primary text-sm mt-1">check_circle</span>
                                <span className="text-sm text-gray-700 dark:text-gray-300">Dedicated Account Manager</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="material-icons text-primary text-sm mt-1">check_circle</span>
                                <span className="text-sm text-gray-700 dark:text-gray-300">Weekly Performance Syncs</span>
                            </div>
                        </div>
                        <Link to="/contact" className="w-full py-4 px-6 border-2 border-primary/20 hover:border-primary text-primary font-bold rounded-lg transition-all text-sm uppercase tracking-wider text-center">
                            Contact for Custom Quote
                        </Link>
                    </div>
                </div>
            </section>

            {/* Support Section */}
            <section className="bg-primary/5 dark:bg-primary/10 py-20">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex-1">
                        <h2 className="text-3xl font-extrabold mb-4">Need a tailored solution?</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400">If our standard plans don't quite fit your vision, our team can build a custom roadmap designed specifically for your brand goals.</p>
                    </div>
                    <div className="flex-shrink-0">
                        <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-all group">
                            Schedule a Consultation
                            <span className="material-icons transition-transform group-hover:translate-x-1">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;

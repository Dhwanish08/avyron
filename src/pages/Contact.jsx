import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        budget: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        // TODO: Integrate EmailJS or Firebase here
        alert('Thank you! Your message has been sent. We will get back to you shortly.');
        setFormData({
            fullName: '',
            company: '',
            email: '',
            phone: '',
            budget: '',
            service: '',
            message: ''
        });
    };

    return (
        <div className="bg-background-light dark:bg-background-dark text-neutral-dark dark:text-neutral-light min-h-screen font-display transition-colors duration-300">
            <main className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
                {/* Header Section */}
                <header className="mb-16 lg:mb-20 max-w-3xl">
                    <h1 className="text-5xl lg:text-7xl font-extrabold text-neutral-dark dark:text-white leading-[1.1] mb-6">
                        Let’s Start Growing <br />
                        <span className="text-primary italic tracking-tight">Your Brand</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-neutral-text dark:text-neutral-light/70 max-w-xl">
                        Ready to transform your digital presence? We combine data-driven strategy with bold creative to scale your business.
                    </p>
                </header>

                {/* Main Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    {/* Left Column: Contact Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-white dark:bg-neutral-dark/30 p-8 lg:p-10 rounded-xl shadow-sm border border-primary/5">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold uppercase tracking-wider text-neutral-text dark:text-neutral-light/60">Full Name</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full bg-background-light dark:bg-neutral-dark/50 border-transparent focus:border-primary focus:ring-1 focus:ring-primary rounded px-4 py-3 text-neutral-dark dark:text-white outline-none transition-all"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold uppercase tracking-wider text-neutral-text dark:text-neutral-light/60">Company</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Avyron Inc."
                                            className="w-full bg-background-light dark:bg-neutral-dark/50 border-transparent focus:border-primary focus:ring-1 focus:ring-primary rounded px-4 py-3 text-neutral-dark dark:text-white outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold uppercase tracking-wider text-neutral-text dark:text-neutral-light/60">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@company.com"
                                            className="w-full bg-background-light dark:bg-neutral-dark/50 border-transparent focus:border-primary focus:ring-1 focus:ring-primary rounded px-4 py-3 text-neutral-dark dark:text-white outline-none transition-all"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold uppercase tracking-wider text-neutral-text dark:text-neutral-light/60">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+1 (555) 000-0000"
                                            className="w-full bg-background-light dark:bg-neutral-dark/50 border-transparent focus:border-primary focus:ring-1 focus:ring-primary rounded px-4 py-3 text-neutral-dark dark:text-white outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold uppercase tracking-wider text-neutral-text dark:text-neutral-light/60">Budget Range</label>
                                        <select
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleChange}
                                            className="w-full bg-background-light dark:bg-neutral-dark/50 border-transparent focus:border-primary focus:ring-1 focus:ring-primary rounded px-4 py-3 text-neutral-dark dark:text-white outline-none transition-all"
                                        >
                                            <option value="">Select Budget</option>
                                            <option value="5k-10k">$5k - $10k</option>
                                            <option value="10k-25k">$10k - $25k</option>
                                            <option value="25k-50k">$25k - $50k</option>
                                            <option value="50k+">$50k+</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold uppercase tracking-wider text-neutral-text dark:text-neutral-light/60">Service Interested In</label>
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full bg-background-light dark:bg-neutral-dark/50 border-transparent focus:border-primary focus:ring-1 focus:ring-primary rounded px-4 py-3 text-neutral-dark dark:text-white outline-none transition-all"
                                        >
                                            <option value="">Select Service</option>
                                            <option value="branding">Full Branding</option>
                                            <option value="performance">Performance Marketing</option>
                                            <option value="social">Social Media Strategy</option>
                                            <option value="web">Web Development</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold uppercase tracking-wider text-neutral-text dark:text-neutral-light/60">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your goals and current challenges..."
                                        rows="5"
                                        className="w-full bg-background-light dark:bg-neutral-dark/50 border-transparent focus:border-primary focus:ring-1 focus:ring-primary rounded px-4 py-3 text-neutral-dark dark:text-white outline-none transition-all resize-none"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center space-x-2"
                                >
                                    <span>Send Project Proposal</span>
                                    <span className="material-icons text-sm">arrow_forward</span>
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right Column: Contact Info & CTAs */}
                    <div className="lg:col-span-5 flex flex-col justify-between">
                        <div className="space-y-12">
                            {/* Contact Channels */}
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">Contact Channels</h3>
                                    <div className="space-y-6">
                                        <div className="flex items-start space-x-4 group">
                                            <div className="bg-primary/10 p-2 rounded group-hover:bg-primary group-hover:text-white transition-colors">
                                                <span className="material-icons text-primary group-hover:text-white">alternate_email</span>
                                            </div>
                                            <div>
                                                <p className="text-xs uppercase tracking-widest text-neutral-text/60 dark:text-neutral-light/40 font-bold mb-1">Email us</p>
                                                <a href="mailto:hello@avyron.com" className="text-xl font-medium hover:text-primary transition-colors">hello@avyron.com</a>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-4 group">
                                            <div className="bg-primary/10 p-2 rounded group-hover:bg-primary group-hover:text-white transition-colors">
                                                <span className="material-icons text-primary group-hover:text-white">call</span>
                                            </div>
                                            <div>
                                                <p className="text-xs uppercase tracking-widest text-neutral-text/60 dark:text-neutral-light/40 font-bold mb-1">Call us</p>
                                                <a href="tel:+15550000000" className="text-xl font-medium hover:text-primary transition-colors">+1 (555) 000-0000</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* WhatsApp CTA */}
                                <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg">
                                            <span className="material-icons">chat</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-neutral-dark dark:text-white">Need a quick reply?</h4>
                                            <p className="text-sm text-neutral-text dark:text-neutral-light/60">Our experts are online on WhatsApp.</p>
                                        </div>
                                    </div>
                                    <a href="#" className="inline-flex items-center justify-center w-full bg-white dark:bg-neutral-dark border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 rounded-lg transition-all">
                                        Chat with an Expert
                                    </a>
                                </div>
                            </div>

                            {/* Location / Office */}
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">Our Headquarters</h3>
                                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 grayscale hover:grayscale-0 transition-all duration-500">
                                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0IseNDLI8Yt1oKKUXXyO5HAd2zWaMaBvM8a4NNJHI6t2WSG_oOK9L8yXcpU8NoqFoCKmfoSacY9CM4MhAMerzLgPu77V6lUOxNMuMxEth_cwjIav6gAVgXo5LjuiMf5TagSv9pAVy6IitIEJkSSXYTTPwrXqPS8UL-F4O7yR3QvXqJGi_5XTpzjQAgB1KE9SqXJ28B8qkJc2hgVb-mORiafy6jITMuWELg16VkcRBKiknQ0jMb5elJ8dUcN97T9bZjuvMHmLLt0A" alt="Office Interior" className="w-full h-full object-cover" />
                                </div>
                                <p className="text-neutral-text dark:text-neutral-light/70 italic">
                                    Ahmedabad<br />
                                    Memnagar
                                </p>
                            </div>
                        </div>

                        {/* Social & Secondary */}
                        <div className="mt-16 pt-8 border-t border-primary/10">
                            <div className="flex items-center justify-between">
                                <div className="flex space-x-6">
                                    <a href="#" className="text-neutral-text/60 hover:text-primary transition-colors flex items-center group">
                                        <span className="material-icons mr-1 group-hover:scale-110 transition-transform">language</span>
                                        <span className="text-sm font-semibold uppercase tracking-widest">LinkedIn</span>
                                    </a>
                                    <a href="#" className="text-neutral-text/60 hover:text-primary transition-colors flex items-center group">
                                        <span className="material-icons mr-1 group-hover:scale-110 transition-transform">camera_alt</span>
                                        <span className="text-sm font-semibold uppercase tracking-widest">Instagram</span>
                                    </a>
                                </div>
                                <div className="hidden sm:block text-xs font-medium text-neutral-text/40 dark:text-neutral-light/30 uppercase tracking-[0.2em]">
                                    EST. 2024
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Map Placeholder */}
            <section className="w-full bg-neutral-light/30 dark:bg-neutral-dark/50 mt-12 overflow-hidden border-y border-primary/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
                    <div className="relative w-full h-80 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer group">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeID5slNfb705RTNuIx7bm7vwGr4zmXZEKR6rTqiPKDyajOKSxNGp3pCNDxzwbnClNsZBy2GIEO4vXP77lUO8G6b1QYGKJtNq91Rv_BiIjOnIJQzFW4dABM7s95OFVN8COiCjSZflMR180jVV6ncyHQH0wNSmwStQDITo0mNz1Wk8GrofJF97Bz6f7jVNDEywQmgTzppfvvpIz2-2ys2wc7uJtdM8OGy95-YsdHwqZP4h_1h51mlx8a6chMEhu1yDKOPdPAGIhCmY" alt="Map Location" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white dark:bg-background-dark p-4 rounded-xl shadow-2xl flex items-center space-x-3 border-2 border-primary group-hover:scale-110 transition-transform">
                                <span className="material-icons text-primary">location_on</span>
                                <span className="font-bold text-neutral-dark dark:text-white">Visit Avyron LA</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;

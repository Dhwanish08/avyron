import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-charcoal text-white py-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                                <span className="text-white font-bold text-xl">A</span>
                            </div>
                            <span className="text-2xl font-extrabold tracking-tight">Avyron</span>
                        </div>
                        <p className="text-white/60 leading-relaxed">
                            Leading marketing agency focused on sustainable growth and high-impact digital strategies.
                        </p>
                    </div>
                    <div>
                        <h5 className="font-bold mb-6 text-lg">Services</h5>
                        <ul className="space-y-4 text-white/60">
                            <li><Link to="/services" className="hover:text-primary transition-colors">Personal Branding</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">Performance Ads</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">Event Marketing</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">Creative Strategy</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold mb-6 text-lg">Quick Links</h5>
                        <ul className="space-y-4 text-white/60">
                            <li><Link to="/portfolio" className="hover:text-primary transition-colors">Our Results</Link></li>
                            <li><Link to="/portfolio" className="hover:text-primary transition-colors">Success Stories</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold mb-6 text-lg">Newsletter</h5>
                        <p className="text-white/60 text-sm mb-4">Weekly insights on marketing and growth.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Email"
                                className="bg-white/10 border-white/20 rounded px-4 py-2 w-full focus:ring-1 focus:ring-primary focus:outline-none transition-all placeholder:text-white/30"
                            />
                            <button className="bg-primary hover:bg-red-700 px-4 py-2 rounded text-sm font-bold transition-colors">Join</button>
                        </div>
                    </div>
                </div>
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
                    <p>© 2024 Avyron Agency. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

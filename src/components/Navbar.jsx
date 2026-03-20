import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-primary rounded flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-white font-bold text-xl">A</span>
                    </div>
                    <span className="text-2xl font-extrabold tracking-tight text-charcoal dark:text-white uppercase group-hover:text-primary transition-colors">Avyron</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link to="/" className="font-medium hover:text-primary transition-colors">Home</Link>
                    <Link to="/services" className="font-medium hover:text-primary transition-colors">Services</Link>
                    <Link to="/portfolio" className="font-medium hover:text-primary transition-colors">Case Studies</Link>
                    <Link to="/pricing" className="font-medium hover:text-primary transition-colors">Pricing</Link>
                    <Link to="/about" className="font-medium hover:text-primary transition-colors">About</Link>
                    <Link to="/contact" className="bg-primary hover:bg-red-700 text-white px-6 py-2.5 rounded font-semibold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40">
                        Get a Free Audit
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-charcoal dark:text-white focus:outline-none">
                        <span className="material-symbols-outlined text-3xl">menu</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-background-dark border-t border-primary/10 absolute w-full left-0 top-20 shadow-xl py-4 px-6 flex flex-col gap-4">
                    <Link to="/" className="font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/services" className="font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Services</Link>
                    <Link to="/portfolio" className="font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Case Studies</Link>
                    <Link to="/pricing" className="font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Pricing</Link>
                    <Link to="/about" className="font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/contact" className="bg-primary text-white px-6 py-2.5 rounded font-semibold text-center mt-2" onClick={() => setIsOpen(false)}>
                        Get a Free Audit
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AlertTriangle, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f172a] text-center px-4">
            <Helmet>
                <title>404 - Page Not Found | Nashed Tuned</title>
                <meta name="robots" content="noindex" />
            </Helmet>

            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/90 to-[#586e45]/10"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
                {/* Decorative blobs */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>
            </div>

            <div className="relative z-10 glass-panel p-8 sm:p-12 rounded-sm border-l-4 border-l-red-600 max-w-2xl w-full mx-auto shadow-2xl skew-x-[-2deg]">
                <div className="skew-x-[2deg]">
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 bg-red-600/20 rounded-full flex items-center justify-center border border-red-600/50">
                            <AlertTriangle className="w-10 h-10 text-red-500" />
                        </div>
                    </div>

                    <h1 className="text-6xl sm:text-8xl font-black text-white mb-2 italic tracking-tighter">404</h1>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#586e45] uppercase tracking-widest mb-6">Wrong Gear</h2>

                    <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                        Looks like you spun out. The page you're looking for might have been moved or doesn't exist. Let's get you back on track.
                    </p>

                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold uppercase italic tracking-wide transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(220,38,38,0.4)]"
                    >
                        <ArrowLeft className="w-5 h-5" /> Back to Safety
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;

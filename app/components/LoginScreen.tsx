'use client';

import { useState, KeyboardEvent } from 'react';
import useAppStore from '@/store';
import Image from 'next/image';

export default function LoginScreen() {
    const [password, setPassword] = useState('');
    const [isShaking, setIsShaking] = useState(false);
    const { currentUser, login } = useAppStore();

    const handleLogin = () => {
        // Simple login - just proceed (no actual password validation)
        login();
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    };

    const handleProfileClick = () => {
        // Focus on password input when profile is clicked
        const input = document.getElementById('password-input') as HTMLInputElement;
        if (input) {
            input.focus();
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 animate-gradient-shift">
                <div className="absolute inset-0 backdrop-blur-3xl bg-black/30" />
            </div>

            {/* Floating Orbs */}
            <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float-delayed" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse-slow" />

            {/* Login Card */}
            <div className="relative z-10 flex flex-col items-center">
                {/* Profile Avatar */}
                <div
                    className={`mb-8 cursor-pointer transition-all duration-300 hover:scale-105 ${isShaking ? 'animate-shake' : ''}`}
                    onClick={handleProfileClick}
                >
                    <div className="relative group">
                        {/* Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-75 group-hover:opacity-100 blur-lg transition-opacity duration-300" />

                        {/* Avatar Container */}
                        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm bg-white/10">
                            <Image
                                src={currentUser.avatar}
                                alt={currentUser.name}
                                width={128}
                                height={128}
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* User Name */}
                <h2 className="text-3xl font-semibold text-white mb-2 tracking-wide drop-shadow-lg">
                    {currentUser.name}
                </h2>

                {/* Password Input Container */}
                <div className="mt-6 w-80">
                    <div className="relative group">
                        {/* Input Glow */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-focus-within:opacity-75 blur transition-opacity duration-300" />

                        {/* Input Field */}
                        <input
                            id="password-input"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Enter to continue"
                            className="relative w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-all duration-300 text-center"
                            autoFocus
                        />
                    </div>

                    {/* Hint Text */}
                    <p className="text-white/60 text-sm text-center mt-4 animate-pulse-slow">
                        Press Enter or click to login
                    </p>
                </div>

                {/* Login Button */}
                <button
                    onClick={handleLogin}
                    className="mt-8 group relative px-8 py-3 overflow-hidden rounded-full transition-all duration-300 hover:scale-105"
                >
                    {/* Button Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-75 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Button Content */}
                    <span className="relative text-white font-semibold tracking-wide flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        Login
                    </span>
                </button>
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-8 left-0 right-0 text-center">
                <p className="text-white/40 text-sm">
                    Macintosh OS
                </p>
            </div>

            <style jsx>{`
                @keyframes gradient-shift {
                    0%, 100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px) translateX(0px);
                    }
                    33% {
                        transform: translateY(-20px) translateX(10px);
                    }
                    66% {
                        transform: translateY(10px) translateX(-10px);
                    }
                }

                @keyframes float-delayed {
                    0%, 100% {
                        transform: translateY(0px) translateX(0px);
                    }
                    33% {
                        transform: translateY(15px) translateX(-15px);
                    }
                    66% {
                        transform: translateY(-10px) translateX(10px);
                    }
                }

                @keyframes pulse-slow {
                    0%, 100% {
                        opacity: 0.2;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.3;
                        transform: scale(1.05);
                    }
                }

                @keyframes shake {
                    0%, 100% {
                        transform: translateX(0);
                    }
                    25% {
                        transform: translateX(-10px);
                    }
                    75% {
                        transform: translateX(10px);
                    }
                }

                .animate-gradient-shift {
                    background-size: 200% 200%;
                    animation: gradient-shift 15s ease infinite;
                }

                .animate-float {
                    animation: float 20s ease-in-out infinite;
                }

                .animate-float-delayed {
                    animation: float-delayed 25s ease-in-out infinite;
                }

                .animate-pulse-slow {
                    animation: pulse-slow 4s ease-in-out infinite;
                }

                .animate-shake {
                    animation: shake 0.5s ease-in-out;
                }
            `}</style>
        </div>
    );
}

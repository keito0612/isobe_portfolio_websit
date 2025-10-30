'use client';
import React, { FC, ReactNode, useState } from 'react';

interface NavBarProps {
    onSectionClick: (id: string) => void;
    children: ReactNode;
}

const NavBar = ({ onSectionClick, children }: NavBarProps) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <>
            <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50 border-b-2 border-gray-900">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <button
                            onClick={() => onSectionClick('top')}
                            className="text-xl font-black text-gray-900 hover:text-blue-600 transition-colors"
                        >
                            isobe.dev
                        </button>

                        <div className="hidden md:flex items-center space-x-6">
                            {[
                                { id: 'top', label: 'Home' },
                                { id: 'about', label: 'About' },
                                { id: 'project', label: 'Project' },
                                { id: 'experience', label: 'Career' }
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => onSectionClick(item.id)}
                                    className="text-gray-700 hover:text-blue-600 transition-colors font-bold"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden text-gray-900 p-2"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {mobileMenuOpen && (
                        <div className="md:hidden pb-4 space-y-2">
                            {[
                                { id: 'top', label: 'Home' },
                                { id: 'about', label: 'About' },
                                { id: 'project', label: 'Project' },
                                { id: 'experience', label: 'Career' }
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => onSectionClick(item.id)}
                                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 font-bold"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    )}
                </nav>
            </header>
            {children}
        </>
    )
}

export default NavBar;
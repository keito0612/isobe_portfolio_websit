import { User, Github, Linkedin, Mail } from 'lucide-react';

interface TopSectionProps {
    onScrollToSection: (sectionId: string) => void;
}

export const TopSection = ({ onScrollToSection }: TopSectionProps) => {
    const socialLinks = [
        { icon: <Github />, href: 'https://github.com/keito0612' },
        { icon: <Linkedin />, href: '#' },
        { icon: <Mail />, href: '#' }
    ];

    return (
        <section
            id="top"
            className="min-h-screen flex flex-col items-center justify-center text-center pt-16 px-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
        >
            <div className="max-w-4xl text-white">
                <div className="mb-8">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                        <User className="w-16 h-16 sm:w-20 sm:h-20 text-gray-900" />
                    </div>
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-4">
                    ようこそ、isobeのサイトへ
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl mb-8 font-bold">
                    Web Developer / Engineer
                </p>
                <p className="text-lg sm:text-xl mb-12 opacity-90 font-medium">
                    楽しくコード書いてます！よろしくお願いします 🚀
                </p>

                <div className="flex gap-4 justify-center mb-16">
                    {socialLinks.map((social, i) => (
                        <a
                            key={i}
                            href={social.href}
                            className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-gray-900 hover:bg-yellow-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-gray-900"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>

                <button
                    onClick={() => onScrollToSection('about')}
                    className="inline-block text-white font-bold animate-bounce"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default TopSection;
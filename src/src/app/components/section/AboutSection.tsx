import { Zap } from 'lucide-react';
import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 border-4 border-gray-900">
                    <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-8 flex items-center gap-3">
                        <Zap className="text-yellow-400" />
                        About Me
                    </h2>

                    <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                        <p>
                            どうも！isobeです 👋
                        </p>
                        <p>
                            このサイトは、僕が今まで作ってきたものとか、経歴とかをまとめたポートフォリオです。
                        </p>
                        <p>
                            使う人が「おっ、いいね！」って思ってくれるようなものを作るのが好きです。
                            技術も大事だけど、やっぱり使ってて楽しいものが一番だと思ってます！
                        </p>
                        <p>
                            気になるものがあったら、ぜひチェックしてみてください 😊
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;
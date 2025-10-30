import { Experience } from '@/app/types';
import { Briefcase } from 'lucide-react';
import React from 'react'

const ExperienceSection = () => {
    const experience: Experience[] = [
        {
            company: 'テック株式会社',
            title: 'シニアフロントエンドエンジニア',
            period: '2022年4月 - 現在',
            description: 'React と Next.js を使った大規模Webアプリの開発をリードしてます。チームのみんなと楽しく開発中！'
        },
        {
            company: 'スタートアップ合同会社',
            title: 'フルスタックエンジニア',
            period: '2020年4月 - 2022年3月',
            description: 'フロントもバックエンドも色々やってました。新しいサービスの立ち上げに関われて楽しかったです。'
        },
        {
            company: 'ソフトウェア開発株式会社',
            title: 'ジュニアエンジニア',
            period: '2018年4月 - 2020年3月',
            description: 'Webアプリ開発の基礎を学びました。初めてのチーム開発で色々勉強になりました！'
        }
    ];
    return (
        <section id="experience" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 flex items-center justify-center gap-3">
                        <Briefcase className="text-purple-500" />
                        Career
                    </h2>
                    <p className="text-lg text-gray-600 font-bold">これまでの経歴</p>
                </div>

                <div className="space-y-6">
                    {experience.map((exp, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-4 border-gray-900"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 border-2 border-gray-900">
                                    <div className="w-4 h-4 bg-white rounded-full"></div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-1">{exp.title}</h3>
                                    <p className="text-blue-600 font-bold mb-2">{exp.company}</p>
                                    <p className="text-gray-500 text-sm font-semibold mb-3">{exp.period}</p>
                                    <p className="text-gray-700 leading-relaxed font-medium">{exp.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection;
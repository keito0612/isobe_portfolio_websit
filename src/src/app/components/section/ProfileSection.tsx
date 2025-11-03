
import { Profile } from '@/app/types';
import React from 'react';
const ProfileSection = () => {
    const profiles: Profile[] = [
        {
            company: "久留米工業大学・工学部・情報ネットワーク科",
            title: '久留米工業大学・工学部・情報ネットワーク科を卒業',
            period: '2023年4月',
            description: null,
            year: '2023~',
            image: '/profile3.jpg'
        },
        {
            company: '合同会社LaunchCraft',
            title: 'webエンジニアと講師',
            period: '2023年10月 - 2024年9月',
            description: 'エンジニアとプログラミングの講師を担当',
            year: '2023~',
            image: '/profile2.jpg'
        },
        {
            company: '株式会社サイコンピューター',
            title: 'システムエンジニア',
            period: '2025年2月 - 2025年11月',
            description: '主に、バックエンドエンジニアとして、webアプリケーションを開発をしておりました。',
            year: '2024~',
            image: '/profile1.jpg'
        },
    ];

    return (
        <section id="profile" className="py-20 px-4 bg-gray-50">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl sm:text-6xl font-black text-gray-800 mb-4">
                        Profile
                    </h2>
                    <p className="text-lg text-gray-600">
                        せっかくなので私のこれまでの人生を一緒に振り返りましょう。
                    </p>
                </div>

                <div className="relative">
                    {/* タイムラインの縦線 */}
                    <div className="absolute left-8 sm:left-32 top-0 bottom-0 w-1 bg-blue-800"></div>

                    <div className="space-y-16">
                        {profiles.map((profile, index) => (
                            <div key={index} className="relative">
                                {/* 年代表示 */}
                                <div className="absolute left-0 sm:left-0 top-0 text-2xl sm:text-3xl font-bold text-gray-600 w-24 sm:w-28">
                                    {profile.year}
                                </div>

                                {/* タイムラインのドット */}
                                <div className="absolute left-7 sm:left-[7.5rem] top-8 w-4 h-4 bg-blue-800 rounded-full border-4 border-gray-50"></div>

                                {/* コンテンツエリア */}
                                <div className="ml-16 sm:ml-36">
                                    {/* プロフィール画像 */}
                                    <div className="mb-4">
                                        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-200">
                                            <img
                                                src={profile.image}
                                                alt={profile.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* 情報カード */}
                                    <div className="space-y-3">
                                        <div className="bg-blue-600 bg-opacity-70 text-white p-4 rounded-lg shadow-md">
                                            <p className="font-bold text-lg">{profile.title}</p>
                                        </div>
                                        {
                                            profile.description &&
                                            <div className="bg-blue-600 bg-opacity-70 text-white p-4 rounded-lg shadow-md">
                                                <p className="font-bold text-lg">{profile.description}</p>
                                            </div>
                                        }
                                    </div>

                                    {/* 会社名と期間 */}
                                    <div className="mt-3 text-gray-600">
                                        <p className="font-semibold">{profile.company}</p>
                                        <p className="text-sm">{profile.period}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;
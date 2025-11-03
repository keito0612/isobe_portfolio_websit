import { Project } from '@/app/types';
import { Code } from 'lucide-react';
import React from 'react';

interface ProjectModalProps {
    selectProject: (id: number) => void;
}

const ProjectSection = ({ selectProject }: ProjectModalProps) => {
    const projects: Project[] = [
        {
            title: 'ScanBook',
            description: '本や漫画、紙のドキュメントを簡単にスキャンし、デジタル形式で管理・閲覧できるアプリ',
            image: 'https://via.placeholder.com/400x300/FF6B9D/FFFFFF?text=E-Commerce',
            tech: ['SwiftUI', 'swift', 'Firebase', 'coredata'],
            link: 'https://github.com/keito0612/ScanBook',
            detailDescription: 'ScanBook は、本・漫画・紙のドキュメントを手軽にデジタル化し、まとめて管理できるスキャンアプリです。\nカメラで読み取ったページは自動で補正され、漫画ビューアのような快適な画面でスムーズに閲覧できます。\n また、パスコードロックによるセキュリティ保護、キーワード検索による必要な情報の素早い検索、iCloud同期による安全なバックアップなど、日常的に使いやすい機能を備えています。\n紙の本棚をそのままスマホに移すように、どこでも快適に読み返せることを目指したアプリです。'
        },
        {
            title: 'タスク管理アプリ',
            description: 'リアルタイム同期機能を持つプロジェクト管理ツール',
            image: 'https://via.placeholder.com/400x300/4ECDC4/FFFFFF?text=Task+App',
            tech: ['React', 'Firebase', 'Material-UI'],
            link: '#',
            detailDescription: 'チーム全体でタスクを共有・管理できるプロジェクト管理ツールです。リアルタイムで更新が反映されるので便利です。'
        },
        {
            title: 'データ可視化ダッシュボード',
            description: 'ビジネスメトリクスを視覚化する分析ツール',
            image: 'https://via.placeholder.com/400x300/95E1D3/FFFFFF?text=Dashboard',
            tech: ['React', 'D3.js', 'Node.js'],
            link: '#',
            detailDescription: '複雑なビジネスデータを直感的に理解できるダッシュボードアプリケーションです。グラフがかっこいい！'
        },
        {
            title: 'ポートフォリオサイト',
            description: 'モダンでレスポンシブなポートフォリオサイト',
            image: 'https://via.placeholder.com/400x300/F38181/FFFFFF?text=Portfolio',
            tech: ['Next.js', 'Tailwind CSS'],
            link: '#',
            detailDescription: 'エンジニアやデザイナー向けの洗練されたポートフォリオサイトです。シンプルで見やすいデザインを心がけました。'
        },
        {
            title: 'Slack Bot',
            description: 'チーム向けの便利なSlack Bot',
            image: 'https://via.placeholder.com/400x300/AA96DA/FFFFFF?text=Slack+Bot',
            tech: ['Node.js', 'Slack API'],
            link: '#',
            detailDescription: 'チームのコミュニケーションを効率化するSlack Botです。毎日使ってもらえるものを目指しました。'
        },
        {
            title: 'ブログシステム',
            description: 'マークダウンエディタ搭載のブログプラットフォーム',
            image: 'https://via.placeholder.com/400x300/FCBAD3/FFFFFF?text=Blog',
            tech: ['Next.js', 'MDX', 'PostgreSQL'],
            link: '#',
            detailDescription: 'マークダウン記法で簡単にブログ記事を作成できるプラットフォームです。書くのが楽しくなるエディタです！'
        }
    ];
    return (
        <section id="project" className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 flex items-center justify-center gap-3">
                        <Code className="text-blue-500" />
                        Projects
                    </h2>
                    <p className="text-lg text-gray-600 font-bold">こんなもの作ってきました</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-4 border-gray-900 hover:-translate-y-2"
                        >
                            <div className="aspect-video bg-gray-100 overflow-hidden border-b-4 border-gray-900">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-black text-gray-900 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 font-semibold">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-yellow-200 text-gray-900 rounded-lg text-xs font-bold border-2 border-gray-900"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <button
                                    onClick={() => { selectProject(index) }}
                                    className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-bold text-sm transition-all border-2 border-gray-900 shadow-md hover:shadow-lg"
                                >
                                    詳しく見る →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectSection;
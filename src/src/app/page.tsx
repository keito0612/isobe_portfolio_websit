'use client';
import Image from "next/image";
import { useState } from "react";
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, Zap } from 'lucide-react';
import { Experience, Project } from "./types";
import Footer from "./components/Footer";
import ProjectModal from "./components/project/ProjectModal";
import NavBar from "./components/NavBar";
import TopSection from "./components/section/TopSection";
import AboutSection from "./components/section/AboutSection";
import ProjectSection from "./components/section/ProjectSection";
import ExperienceSection from "./components/section/ExperienceSection";
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: 'Eコマースプラットフォーム',
      description: 'Next.js と TypeScript を使用した高速なオンラインショップ',
      image: 'https://via.placeholder.com/400x300/FF6B9D/FFFFFF?text=E-Commerce',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      link: '#',
      detailDescription: 'ユーザーフレンドリーなUIと高速なパフォーマンスを実現したEコマースプラットフォームです。使いやすさを第一に考えて設計しました。'
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar onSectionClick={scrollToSection} >
        <TopSection onScrollToSection={scrollToSection} />
        <AboutSection />
        <ProjectSection selectProject={(id: number) =>
          setSelectedProject(id)
        } />

        {/* Experienceセクション */}
        <ExperienceSection />
        <Footer />
      </NavBar>

      {/* モーダル */}
      {selectedProject !== null && (
        <ProjectModal project={projects[selectedProject]} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}

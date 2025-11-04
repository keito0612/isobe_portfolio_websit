'use client';
import Image from "next/image";
import { useState } from "react";
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, Zap } from 'lucide-react';
import { Project } from "./types";
import Footer from "./components/Footer";
import ProjectModal from "./components/project/ProjectModal";
import NavBar from "./components/NavBar";
import TopSection from "./components/section/TopSection";
import AboutSection from "./components/section/AboutSection";
import ProjectSection from "./components/section/ProjectSection";
import ProfileSection from "./components/section/ProfileSection";
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: 'ScanBook',
      description: '本や漫画、紙のドキュメントを簡単にスキャンし、デジタル形式で管理・閲覧できるアプリ',
      image: '/scan_book_icon.png',
      tech: ['SwiftUI', 'swift', 'Firebase', 'coredata'],
      link: 'https://github.com/keito0612/ScanBook',
      pageImages: ['/scanBookImages/1.png', '/scanBookImages/2.png', '/scanBookImages/3.png'],
      detailDescription: 'ScanBook は、本・漫画・紙のドキュメントを手軽にデジタル化し、まとめて管理できるスキャンアプリです。\nカメラで読み取ったページは自動で補正され、漫画ビューアのような快適な画面でスムーズに閲覧できます。\n また、パスコードロックによるセキュリティ保護、キーワード検索による必要な情報の素早い検索、iCloud同期による安全なバックアップなど、日常的に使いやすい機能を備えています。\n紙の本棚をそのままスマホに移すように、どこでも快適に読み返せることを目指したアプリです。'
    },
    {
      title: 'budgetLife',
      description: 'ライフゲージを使ってわかりやすく支出と貯金を管理できる家計簿アプリ',
      image: '/budget_icon.jpg',
      tech: ['flutter', 'Firebase', 'sqlite'],
      link: 'https://github.com/keito0612/budget_life',
      pageImages: ['/budgetLifeImages/1.png', '/budgetLifeImages/2.png', '/budgetLifeImages/3.png'],
      detailDescription: 'ライフゲージで自分がどれくらい貯金したのかと、自分がどれくらい使ったのかを一目でわかるようにしたアプリです。'
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
        <ProjectSection projects={projects} selectProject={(id: number) =>
          setSelectedProject(id)
        } />
        <ProfileSection />
        <Footer />
      </NavBar>

      {/* モーダル */}
      {selectedProject !== null && (
        <ProjectModal project={projects[selectedProject]} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}

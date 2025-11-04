import { Project } from '@/app/types';
import { Code } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
interface ProjectModalProps {
    projects: Project[];
    selectProject: (id: number) => void;
}

const ProjectSection = ({ projects, selectProject }: ProjectModalProps) => {
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
                            <div className="aspect-video bg-gray-100 overflow-hidden border-b-4 border-gray-900 relative">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
import { Project } from '@/app/types';
import Image from 'next/image';
import React from 'react';

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden flex flex-col border-4 border-gray-900 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-4 flex justify-between items-center border-b-4 border-gray-900">
                    <h3 className="text-xl font-black text-white">
                        {project.title}
                    </h3>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 bg-white hover:bg-yellow-300 rounded-lg flex items-center justify-center transition-colors text-gray-900 font-black border-2 border-gray-900"
                    >
                        ✕
                    </button>
                </div>

                <div className="overflow-y-auto flex-1 bg-gray-50">
                    <div className="grid md:grid-cols-2 gap-6 p-6">
                        <div className="space-y-5">
                            <div className="bg-white rounded-xl p-5 border-4 border-gray-900 shadow-md">
                                <p className="text-gray-700 text-sm leading-relaxed font-medium">
                                    {project.detailDescription}
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-5 border-4 border-gray-900 shadow-md">
                                <h4 className="text-base font-black text-gray-900 mb-3">使用技術</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-yellow-200 text-gray-900 rounded-lg text-sm font-bold border-2 border-gray-900"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2 sm:space-y-3">
                            <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden border-2 sm:border-4 border-gray-900 shadow-md">
                                <div className="relative w-full aspect-[16/9] sm:aspect-[4/3]">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        priority // メイン画像には優先読み込み
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-1 sm:gap-2">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="bg-white rounded overflow-hidden sm:rounded-lg border border-gray-900 sm:border-2">
                                        <div className="relative w-full aspect-video">
                                            <Image
                                                src={project.image}
                                                alt={`${project.title} thumbnail ${i}`}
                                                fill
                                                sizes="(max-width: 640px) 33vw, (max-width: 1024px) 16vw, 11vw"
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ProjectModal;
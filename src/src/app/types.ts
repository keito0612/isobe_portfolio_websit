import { Section } from "lucide-react";

export interface Project {
    title: string;
    description: string;
    image: string;
    tech: string[],
    link: string,
    detailDescription: string;
}

export interface Profile {
    company: string | null,
    year: string;
    title: string;
    period: string;
    description: string | null;
    image: string;
}
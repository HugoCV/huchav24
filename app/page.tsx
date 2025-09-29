"use client";

import Image from "next/image";
import {
  MapPin,
  Rocket,
  Briefcase,
  Globe,
} from "lucide-react";

export default function Home() {
  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "NestJS",
    "GraphQL",
    "Prisma",
    "PostgreSQL",
    "MongoDB",
    "TailwindCSS",
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 pt-14 pb-10 sm:pt-20 sm:pb-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* LEFT */}
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-xs dark:border-gray-800">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Available for remote projects
          </div>

          <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Full-Stack Developer <span className="text-gray-400">(React + Node.js)</span>
          </h1>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            I build fast, scalable, and well-designed apps. Experience with Next.js, NestJS, GraphQL, Prisma, and
            deployments on Vercel/AWS. I focus on DX, performance, and best practices.
          </p>

          {/* Quick highlights */}
          <ul className="mt-6 grid grid-cols-1 gap-2 text-sm text-gray-700 dark:text-gray-300 sm:grid-cols-2">
            <li className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              8+ years shipping production software
            </li>
            <li className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Remote-friendly • English/Spanish
            </li>
            <li className="flex items-center gap-2">
              <Rocket className="h-4 w-4" />
              Clean architecture • CI/CD • Testing
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Based in Costa Rica (UTC-6)
            </li>
          </ul>

          {/* Skills */}
          <ul className="mt-8 flex flex-wrap gap-2">
            {skills.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-gray-200 px-3 py-1 text-xs dark:border-gray-800"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-blue-500/10 via-emerald-500/10 to-fuchsia-500/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <Image
              src="/picture.jpg"
              alt="Project preview"
              width={900}
              height={700}
              className="h-auto w-full"
              priority
            />
          </div>
          <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
          </p>
        </div>
      </div>
    </section>
  );
}

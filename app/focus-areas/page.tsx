import { PlayCircle } from "lucide-react";
import Image from "next/image";

export default function FocusAreasPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-14 sm:py-20 text-center">
      <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
        Focus Areas
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        These are some of the areas where I'm currently focusing my learning and
        development.
      </p>

      <div className="mt-12 text-left">
        <h2 className="text-2xl font-bold tracking-tight">
          Machine Learning & AI
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Exploring the world of AI, with a special interest in Reinforcement
          Learning. Here is a short demonstration of an agent I trained for a
          simple game.
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <video
            src="/rl-video-episode-1.mp4"
            className="h-auto w-full"
            controls
            autoPlay
            muted
            loop
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
          Demo: A Reinforcement Learning agent in a custom environment.
        </p>
        <div className="mt-4">
          <a
            href="https://colab.research.google.com/drive/1pus5XIhGGnB0tLFqJhq4FFonACKCUMLy#scrollTo=U1qVvfzOM-72"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            <PlayCircle className="h-4 w-4" />
            Run example in Colab
          </a>
        </div>
      </div>

      {/* Gradient Descent Section */}
      <div className="mt-16 text-left">
        <h2 className="text-2xl font-bold tracking-tight">
          Optimization Algorithms
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Understanding the fundamentals of how models learn is key. Here is a
          visualization of the Gradient Descent algorithm finding the minimum of
          a function.
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <Image
            src="/gradient-decent.png"
            alt="Gradient Descent Visualization"
            width={1200}
            height={750}
            className="h-auto w-full"
          />
        </div>
        <div className="mt-4">
          <a
            href="https://colab.research.google.com/drive/1BR2XQDJrxQom5dMbq6qavwyESKuo7nLJ#scrollTo=FLvBJSCFMxC_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            <PlayCircle className="h-4 w-4" />
            Run example in Colab
          </a>
        </div>
      </div>

      {/* IoT Section */}
      <div className="mt-16 text-left">
        <h2 className="text-2xl font-bold tracking-tight">
          Internet of Things (IoT)
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Building connected devices and systems. Exploring hardware
          programming with platforms like ESP32 and integrating them with
          modern web services.
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <Image
            src="/iot.jpg"
            alt="IoT Project"
            width={1200}
            height={750}
            className="h-auto w-full"
          />
        </div>
        {/* If you have a link for this project, you can add it here */}
      </div>
    </section>
  );
}
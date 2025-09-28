// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10 sm:pt-20 sm:pb-16">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs border-gray-200 dark:border-gray-800 mb-4">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Available for remote projects
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              Full-Stack Developer (React + Node.js)
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              I build fast, scalable, and well-designed apps. Experience with Next.js, NestJS,
              GraphQL, Prisma, and deployments on Vercel/AWS. I focus on DX, performance, and best practices.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:opacity-90"
              >
                View projects
              </a>
              <a
                href="mailto:your-email@example.com"
                className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Let's talk
              </a>
            </div>

            {/* Skills */}
            <ul className="mt-8 flex flex-wrap gap-2">
              {[
                "Next.js", "React", "TypeScript", "Node.js", "NestJS",
                "GraphQL", "Prisma", "PostgreSQL", "MongoDB", "TailwindCSS",
              ].map((tag) => (
                <li
                  key={tag}
                  className="text-xs rounded-full border px-3 py-1 border-gray-200 dark:border-gray-800"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-blue-500/10 via-emerald-500/10 to-fuchsia-500/10 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-950 shadow-sm">
              <Image
                src="/cover.png"
                alt="Preview"
                width={900}
                height={700}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
              *Replace <code>/cover.png</code> with a screenshot of your projects.
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold">About me</h2>
          </div>
          <div className="md:col-span-2 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              I'm a full-stack developer with a focus on clean architecture, testing, and performance.
              I enjoy working with product teams, designing clear APIs, and automating CI/CD.
            </p>
            <p className="mt-4">
              Lately, I've been building real-time dashboards, IoT integrations (MQTT + GraphQL Subscriptions),
              and e-commerce systems (Cart) with Next.js + NestJS.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 pb-14 sm:pb-20">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-xl font-bold">Projects</h2>
          <Link href="https://github.com/HugoCV" className="text-sm underline underline-offset-4 hover:opacity-80">
            View GitHub →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Cart (E-commerce)",
              desc: "Next.js + NestJS + Prisma. Cart, checkout, and admin panel.",
              img: "/projects/cart.png",
              link: "https://github.com/HugoCV/cart-frontend",
            },
            {
              title: "IoT Dashboard",
              desc: "Realtime (MQTT + GraphQL). Device monitoring and alerts.",
              img: "/projects/iot.png",
              link: "#",
            },
            {
              title: "Admin Users",
              desc: "MUI + GraphQL + Auth. Manage organizations, gateways, and users.",
              img: "/projects/admin.png",
              link: "#",
            },
          ].map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              className="group rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-950 hover:shadow-md transition"
              rel="noopener noreferrer"
            >
              <div className="relative">
                <Image
                  src={p.img}
                  alt={p.title}
                  width={600}
                  height={360}
                  className="w-full h-44 object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-xl font-bold">Contact</h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-gray-700 dark:text-gray-300">
                Interested in collaborating or have an idea? Write to me and let's talk.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="mailto:your-email@example.com"
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:opacity-90"
                >
                  Send email
                </a>
                <a
                  href="https://www.linkedin.com/in/huchav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/HugoCV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <footer className="mt-10 pt-6 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
            © {new Date().getFullYear()} Hugo Chaves Vásquez — Built with Next.js + Tailwind
          </footer>
        </div>
      </section>
    </div>
  );
}

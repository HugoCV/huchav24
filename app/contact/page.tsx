import { Mail, Linkedin, Github } from "lucide-react";

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      description: "The best way to reach me. I'll get back to you as soon as possible.",
      href: "mailto:huchav24@gmail.com",
      cta: "Send Email",
    },
    {
      icon: <Linkedin className="w-8 h-8" />,
      title: "LinkedIn",
      description: "Connect with me on LinkedIn for professional networking and opportunities.",
      href: "https://www.linkedin.com/in/huchav",
      cta: "View Profile",
    },
    {
      icon: <Github className="w-8 h-8" />,
      title: "GitHub",
      description: "Check out my projects and contributions on GitHub.",
      href: "https://github.com/HugoCV",
      cta: "View Profile",
    },
  ];

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h2>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {contactMethods.map((method) => (
          <div
            key={method.title}
            className="flex flex-col items-center text-center p-8 border border-gray-200 dark:border-gray-800 rounded-2xl"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
              {method.icon}
            </div>
            <h3 className="mt-6 text-lg font-semibold leading-7">{method.title}</h3>
            <p className="mt-2 flex-grow text-gray-600 dark:text-gray-400">{method.description}</p>
            <a
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold text-white dark:text-gray-900 bg-gray-900 dark:bg-white hover:opacity-90"
            >
              {method.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
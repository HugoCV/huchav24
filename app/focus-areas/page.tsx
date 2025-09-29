export default function FocusAreasPage() {
  const focusAreas = [
    {
      title: "Frontend Development",
      description:
        "Building responsive and performant user interfaces with React, Next.js, and Tailwind CSS. I focus on creating great user experiences and maintaining a clean and scalable codebase.",
    },
    {
      title: "Backend Development",
      description:
        "Designing and implementing robust and scalable server-side applications with Node.js and NestJS. I have experience with RESTful APIs, GraphQL, and database management with Prisma and PostgreSQL.",
    },
    {
      title: "DevOps & Deployment",
      description:
        "Automating CI/CD pipelines and deploying applications to cloud platforms like Vercel and AWS. I&apos;m passionate about infrastructure as code and ensuring high availability and performance.",
    },
    {
      title: "Clean Architecture & Best Practices",
      description:
        "Applying principles of clean architecture, domain-driven design, and test-driven development to build maintainable and high-quality software. I believe in writing code that is easy to understand and evolve.",
    },
  ];

  return (
    <section id="focus-areas" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-10">Focus Areas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {focusAreas.map((area) => (
          <div key={area.title}>
            <h3 className="text-lg font-semibold">{area.title}</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">{area.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
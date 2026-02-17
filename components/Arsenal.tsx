export default function Arsenal() {
  const skills = ["Flutter", "Node.js", "MySQL", "Next.js", "Tailwind", "Git"];
  return (
    <section className="py-32">
      <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-12 border-b border-gray-100 dark:border-zinc-800 pb-4">
        Tecnologías clave
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
        {skills.map((skill) => (
          <div key={skill} className="group">
            <p className="text-4xl font-mono font-light text-gray-300 dark:text-zinc-700 group-hover:text-primary-blue transition-colors duration-300">
              {skill}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
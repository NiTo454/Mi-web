export default function Compromiso() {
  const valores = [
    { id: "01", title: "Escalabilidad", desc: "Código preparado para crecer desde el primer día." },
    { id: "02", title: "Minimalismo", desc: "Interfaces limpias donde el contenido es el protagonista." },
    { id: "03", title: "Eficiencia", desc: "Sistemas rápidos y optimizados como MediApp." }
  ];

  return (
    <section className="py-24">
      <div className="grid md:grid-cols-3 gap-16">
        {valores.map((v) => (
          <div key={v.id} className="relative">
            <span className="text-6xl md:text-8xl font-black text-gray-200/50 dark:text-zinc-800/50 absolute -top-12 -left-6 -z-10 select-none transition-all">
              {v.id}
            </span>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-primary-blue w-fit pb-1">{v.title}</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              {v.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
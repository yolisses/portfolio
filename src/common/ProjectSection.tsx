interface ProjectSectionProps {
  name:string
  title:string
}

export function ProjectSection({ title, name }:ProjectSectionProps) {
  return (
    <section className="p-8">
      <div className="flex flex-row items-center gap-4">
        <img
          alt="logo"
          width={60}
          src={`/${name}/logo.svg`}
        />
        <h2 className="text-4xl">
          {title}
        </h2>
      </div>
    </section>
  );
}

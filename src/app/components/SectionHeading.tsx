export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-6">
      {" "}
      {/* <-- spacing after heading */}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight flex items-center gap-3">
        <span className="bg-gradient-to-r from-royal to-lavender bg-clip-text text-transparent">
          {title}
        </span>
        <span className="block h-[2px] w-16 bg-gradient-to-r from-royal to-transparent"></span>
      </h2>
      {subtitle && (
        <p className="text-neutral-400 mt-1 max-w-prose">{subtitle}</p>
      )}
    </div>
  );
}

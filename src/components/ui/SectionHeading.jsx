export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-lg md:text-xl max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

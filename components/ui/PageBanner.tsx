interface PageBannerProps {
  label: string;
  title: string;
  subtitle: string;
}

export default function PageBanner({ label, title, subtitle }: PageBannerProps) {
  return (
    <div className="relative pt-36 pb-24 bg-gradient-to-br from-[var(--color-text)] via-[#2a2a2a] to-[var(--color-primary-dark)] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, #FF7E55 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="container-site relative z-10 text-center">
        <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[var(--color-primary-light)] mb-4">
          {label}
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          {title}
        </h1>
        <div className="w-16 h-1 bg-[var(--color-primary)] rounded-full mx-auto mb-6" />
        <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

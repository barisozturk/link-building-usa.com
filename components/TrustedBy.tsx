import Image from "next/image";

const LOGOS = [
  { src: "/uploads/2022/12/eviom-300x88.png", alt: "Eviom" },
  { src: "/uploads/2022/12/world-singles-300x85.png", alt: "World Singles" },
  {
    src: "/uploads/2022/12/Untitled_design__2_-removebg-preview.png",
    alt: "Client logo",
  },
  {
    src: "/uploads/2022/12/Untitled_design__3_-removebg-preview-300x82.png",
    alt: "Client logo",
  },
  {
    src: "/uploads/2022/12/Untitled_design__5_-removebg-preview-300x93.png",
    alt: "Client logo",
  },
];

function LogoMark({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={160}
      height={48}
      className="h-8 w-auto max-w-[140px] shrink-0 object-contain object-center sm:h-9"
    />
  );
}

export function HeroLogoMarquee({
  label = "Trusted by leading brands",
}: {
  label?: string;
}) {
  return (
    <div className="border-t border-white/10 bg-fog text-ink">
      <div className="page-shell py-8 md:py-10">
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
          {label}
        </p>
        <div className="relative mt-5 min-w-0 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="hero-logo-track py-2" aria-hidden>
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex shrink-0 items-center gap-12 px-6 sm:gap-16"
              >
                {LOGOS.map((logo) => (
                  <LogoMark key={`${copy}-${logo.src}`} src={logo.src} alt="" />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="sr-only">
          {LOGOS.map((logo) => (
            <span key={logo.src}>{logo.alt}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

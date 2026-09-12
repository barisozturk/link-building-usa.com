import Image from "next/image";
import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="Link Building USA home">
      <Image
        src={light ? "/logo-light.png" : "/logo.png"}
        alt="Link Building USA"
        width={220}
        height={49}
        className="h-9 w-auto md:h-10"
        priority
      />
    </Link>
  );
}

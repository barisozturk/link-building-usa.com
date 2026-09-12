import Image from "next/image";
import { getMemberByName, memberInitials } from "@/content/team";

export function AuthorBox({
  name,
  placement = "top",
}: {
  name: string;
  placement?: "top" | "bottom";
}) {
  const member = getMemberByName(name);
  const photo = member?.photo;
  const role = member?.role ?? "Editorial contributor";
  const bio =
    member?.bio ??
    `${name} writes about United States link acquisition, publisher quality, and campaign measurement for brands competing in American search.`;

  return (
    <aside
      className={`rounded-2xl border border-line bg-fog/80 p-5 md:p-6 ${
        placement === "top" ? "mb-10" : "mt-12"
      }`}
      aria-label={`About the author ${name}`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-line bg-white">
          {photo ? (
            <Image src={photo} alt={name} fill className="object-cover object-top" sizes="64px" />
          ) : (
            <span className="grid h-full w-full place-items-center text-sm font-bold text-ink">
              {memberInitials(name)}
            </span>
          )}
        </div>
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-tide">
            {placement === "top" ? "Written by" : "About the author"}
          </p>
          <p className="mt-1 text-lg font-bold text-ink">{name}</p>
          <p className="text-sm font-semibold text-signal">{role}</p>
          <p className="mt-2 text-[0.98rem] leading-relaxed text-ink-muted line-clamp-3">
            {bio}
          </p>
        </div>
      </div>
    </aside>
  );
}

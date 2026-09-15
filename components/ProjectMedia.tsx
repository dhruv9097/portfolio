import Image from "next/image";
import type { ProjectMedia as ProjectMediaType } from "@/content/projects";

export default function ProjectMedia({ media }: { media: ProjectMediaType }) {
  if (media.kind === "video") {
    return (
      <video
        className="w-full h-full object-cover"
        src={media.src}
        poster={media.poster}
        autoPlay
        muted
        loop
        playsInline
        aria-label={media.alt}
      />
    );
  }

  return (
    <Image
      src={media.src}
      alt={media.alt}
      fill
      sizes="(min-width: 640px) 50vw, 100vw"
      className="object-cover"
    />
  );
}

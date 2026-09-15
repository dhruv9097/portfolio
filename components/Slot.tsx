import type { ProjectMedia as ProjectMediaType } from "@/content/projects";
import ProjectMedia from "./ProjectMedia";
import SpecPlate, { type Spec } from "./SpecPlate";

export default function Slot({
  media,
  spec,
  aspect = "16 / 10",
}: {
  media?: ProjectMediaType;
  spec: Spec;
  aspect?: string;
}) {
  return (
    <div className="relative w-full overflow-hidden" style={{ aspectRatio: aspect }}>
      {media ? <ProjectMedia media={media} /> : <SpecPlate {...spec} />}
    </div>
  );
}

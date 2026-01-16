import type { MediaResolver } from "@/ui/media/MediaResolver";
import { LocalMediaResolver } from "@/ui/media/LocalMediaResolver";

let singleton: MediaResolver | null = null;

export function getMediaResolver(): MediaResolver {
  if (!singleton) singleton = new LocalMediaResolver();
  return singleton;
}

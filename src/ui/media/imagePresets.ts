import type { ImagePreset } from "@/domain/types/media";

export function getSizesForPreset(preset: ImagePreset): string {
  switch (preset) {
    case "card":
      return "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";
    case "carousel":
      return "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";
    default: {
      const exhaustive: never = preset;
      return exhaustive;
    }
  }
}

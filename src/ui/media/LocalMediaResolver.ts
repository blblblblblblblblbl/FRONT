import type { ImagePreset, ImageRef, ResolvedImage } from "@/domain/types/media";
import type { MediaResolver } from "@/ui/media/MediaResolver";
import { getSizesForPreset } from "@/ui/media/imagePresets";

export class LocalMediaResolver implements MediaResolver {
  resolveImage(image: ImageRef, preset: ImagePreset): ResolvedImage {
    const alt = image.alt?.trim() ? image.alt : "Фото товара";

    return {
      src: image.path,
      alt,
      fill: true,
      sizes: getSizesForPreset(preset),
    };
  }
}

import type { ImagePreset, ImageRef, ResolvedImage } from "@/domain/types/media";

export interface MediaResolver {
  resolveImage(image: ImageRef, preset: ImagePreset): ResolvedImage;
}

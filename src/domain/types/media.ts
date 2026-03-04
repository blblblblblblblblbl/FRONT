export type MediaType = "image" | "video";

export type LocalMediaRef = {
  kind: "local";
  path: string;
  alt?: string;
  width?: number;
  height?: number;
  type?: MediaType;
};

export type RemoteMediaRef = {
  kind: "remote";
  url: string;
  alt?: string;
  width?: number;
  height?: number;
  type?: MediaType;
};

export type MediaRef = LocalMediaRef | RemoteMediaRef;

// Backward-compatible alias: existing code may still refer to ImageRef.
export type ImageRef = MediaRef;

export type MediaPreset = "card" | "carousel";
// Backward-compatible alias.
export type ImagePreset = MediaPreset;

export type ResolvedImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes: string;
};

export function getMediaSrc(media: MediaRef): string {
  return media.kind === "local" ? media.path : media.url;
}

export function inferMediaType(media: MediaRef): MediaType {
  if (media.type) return media.type;

  const src = getMediaSrc(media);
  const path = src.split("?")[0]?.toLowerCase() ?? "";

  // Treat common video extensions as videos; everything else defaults to image.
  if (
    path.endsWith(".mp4") ||
    path.endsWith(".webm") ||
    path.endsWith(".ogg") ||
    path.endsWith(".ogv") ||
    path.endsWith(".mov") ||
    path.endsWith(".m4v")
  ) {
    return "video";
  }

  return "image";
}

export type LocalImageRef = {
  kind: "local";
  path: string;
  alt?: string;
  width?: number;
  height?: number;
};

export type RemoteImageRef = {
  kind: "remote";
  url: string;
  alt?: string;
  width?: number;
  height?: number;
};

export type ImageRef = LocalImageRef | RemoteImageRef;

export type ImagePreset = "card" | "carousel";

export type ResolvedImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes: string;
};

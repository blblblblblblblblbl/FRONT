export type ImageRef = {
  kind: "local";
  path: string;
  alt?: string;
  width?: number;
  height?: number;
};

export type ImagePreset = "card" | "carousel";

export type ResolvedImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes: string;
};

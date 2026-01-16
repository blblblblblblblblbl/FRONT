import Image from "next/image";

import type { ResolvedImage } from "@/domain/types/media";

type Props = {
  image: ResolvedImage;
  priority?: boolean;
  className?: string;
};

export function ResponsiveImage({ image, priority, className }: Props) {
  return (
    <div
      className={className ?? ""}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        sizes={image.sizes}
        fill={Boolean(image.fill)}
        style={{ objectFit: "cover" }}
        priority={priority}
      />
    </div>
  );
}

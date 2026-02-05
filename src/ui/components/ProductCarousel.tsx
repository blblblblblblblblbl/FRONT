import EmblaCarousel from "embla-carousel";
import type { EmblaCarouselType } from "embla-carousel";
import React from "react";

import type { ImageRef } from "@/domain/types/media";
import { getMediaResolver } from "@/ui/media/getMediaResolver";
import { ResponsiveImage } from "@/ui/media/ResponsiveImage";

type Props = {
  images: ImageRef[];
  title: string;
};

function shouldRenderSlide(index: number, selectedIndex: number): boolean {
  return (
    index === selectedIndex ||
    index === selectedIndex - 1 ||
    index === selectedIndex + 1
  );
}

export function ProductCarousel({ images, title }: Props) {
  const viewportRef = React.useRef<HTMLDivElement | null>(null);
  const emblaRef = React.useRef<EmblaCarouselType | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!viewportRef.current) return;

    const embla = EmblaCarousel(viewportRef.current, {
      align: "start",
      loop: false,
      dragFree: false,
    });

    emblaRef.current = embla;
    const onSelect = () => setSelectedIndex(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();

    return () => {
      embla.destroy();
      emblaRef.current = null;
    };
  }, []);

  const resolver = getMediaResolver();

  return (
    <div>
      <div
        className="overflow-hidden rounded-xl bg-neutral-100"
        style={{ aspectRatio: "4 / 3" }}
      >
        <div ref={viewportRef} className="h-full">
          <div className="flex h-full">
            {images.map((img, idx) => {
              const show = shouldRenderSlide(idx, selectedIndex);
              const key = img.kind === "local" ? img.path : img.url;
              return (
                <div key={`${key}-${idx}`} className="min-w-0 flex-[0_0_100%]">
                  <div className="h-full">
                    {show ? (
                      <ResponsiveImage
                        image={resolver.resolveImage(img, "carousel")}
                        priority={idx === 0}
                        className="h-full"
                      />
                    ) : (
                      <div className="h-full bg-gradient-to-br from-neutral-100 to-neutral-200" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {images.length > 1 ? (
        <div className="mt-3 flex items-center justify-between gap-3">
          <button
            type="button"
            className="rounded-lg border border-neutral-200 bg-white px-3 py-2 text-xs hover:bg-neutral-50"
            onClick={() => emblaRef.current?.scrollPrev()}
            aria-label={`Предыдущее фото: ${title}`}
          >
            Назад
          </button>

          <div className="flex items-center gap-1">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={
                  "h-2 w-2 rounded-full " +
                  (idx === selectedIndex ? "bg-neutral-800" : "bg-neutral-300")
                }
                onClick={() => emblaRef.current?.scrollTo(idx)}
                aria-label={`Перейти к фото ${idx + 1}: ${title}`}
              />
            ))}
          </div>

          <button
            type="button"
            className="rounded-lg border border-neutral-200 bg-white px-3 py-2 text-xs hover:bg-neutral-50"
            onClick={() => emblaRef.current?.scrollNext()}
            aria-label={`Следующее фото: ${title}`}
          >
            Вперёд
          </button>
        </div>
      ) : null}
    </div>
  );
}

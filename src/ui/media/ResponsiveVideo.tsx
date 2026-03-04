type Props = {
  src: string;
  title: string;
  className?: string;
};

export function ResponsiveVideo({ src, title, className }: Props) {
  return (
    <div
      className={className ?? ""}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      <video
        className="h-full w-full"
        style={{ objectFit: "contain", objectPosition: "center" }}
        controls
        playsInline
        preload="metadata"
        aria-label={title}
      >
        <source src={src} />
        {title}
      </video>
    </div>
  );
}

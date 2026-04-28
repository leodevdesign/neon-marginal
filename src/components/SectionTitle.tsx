import { cn } from "@/lib/cn";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
      data-reveal
    >
      <p className="font-mono text-sm font-semibold uppercase text-neon-red">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-black leading-tight text-text-main sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 whitespace-pre-line text-base leading-8 text-text-secondary sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

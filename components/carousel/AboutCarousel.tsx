"use client";

import React, { FC, ReactNode, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

interface EmblaCarouselProps {
  children: ReactNode[];
  options?: Parameters<typeof useEmblaCarousel>[0];
  /**
   * Tailwind classes applied to each slide wrapper.
   * Defaults to the original 3-column layout.
   * For the timeline (1.5 visible): "basis-[75%] sm:basis-[48%]"
   */
  slideClassName?: string;
}

const EmblaCarousel: FC<EmblaCarouselProps> = ({
  children,
  options,
  slideClassName = "basis-[80%] md:basis-[50%] lg:basis-[33.33%]",
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
    ...options,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative w-full max-w-full">
      {/* Arrows (hidden on mobile) */}
      <button
        type="button"
        onClick={scrollPrev}
        className="hidden sm:flex absolute -left-8 top-[50%] -translate-y-1/2 z-10
                   bg-white/90 p-2 rounded-full shadow hover:scale-105 transition"
        aria-label="Anterior"
      >
        <IoChevronBack size={20} />
      </button>

      <button
        type="button"
        onClick={scrollNext}
        className="hidden sm:flex absolute -right-8 top-[50%] -translate-y-1/2 z-10
                   bg-white/90 p-2 rounded-full shadow hover:scale-105 transition"
        aria-label="Siguiente"
      >
        <IoChevronForward size={20} />
      </button>

      {/* Viewport */}
      <div
        ref={emblaRef}
        className="overflow-hidden w-full"
        style={{ touchAction: "pan-y" }}
      >
        {/* Container */}
        <div className="flex items-stretch">
          {children.map((child, i) => (
            <div key={i} className={`flex-none px-2 ${slideClassName}`}>
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import type { ProjectImage } from "@/data/content";
import { cn } from "@/lib/utils";

import "swiper/css";

interface ProjectIntroImageProps {
  introImage: string;
  projectTitle: string;
}

interface ProjectGallerySliderProps {
  galleryImages: ProjectImage[];
  projectTitle: string;
}

interface ImageLightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

function ImageLightbox({ src, alt, onClose }: ImageLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#14141a]/95 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] bg-[#14141a]/80 text-zinc-300 backdrop-blur-sm transition-colors hover:border-white/[0.2] hover:text-white sm:right-6 sm:top-6"
        aria-label="Close zoomed image"
      >
        <X size={18} />
      </button>

      <div
        className="relative h-full w-full max-h-[90vh] max-w-7xl"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}

function ImageFrame({
  src,
  alt,
  caption,
  priority = false,
  aspectClass = "aspect-[4/3]",
  sizes = "(max-width: 1024px) 100vw, 50vw",
  zoomable = false,
  onZoom,
  showGradient = true,
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  aspectClass?: string;
  sizes?: string;
  zoomable?: boolean;
  onZoom?: () => void;
  showGradient?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden", aspectClass)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover object-top"
      />
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#14141a]/60 via-transparent to-transparent" />
      )}
      {zoomable && onZoom && (
        <button
          type="button"
          onClick={onZoom}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.1] bg-[#14141a]/80 text-zinc-300 opacity-0 backdrop-blur-sm transition-all hover:border-white/[0.2] hover:text-white group-hover:opacity-100 sm:right-4 sm:top-4"
          aria-label={`Zoom ${alt}`}
        >
          <ZoomIn size={18} />
        </button>
      )}
      {caption && (
        <p className="absolute bottom-0 left-0 right-0 px-5 py-4 text-sm font-medium text-zinc-200">
          {caption}
        </p>
      )}
    </div>
  );
}

function GalleryImageCard({
  image,
  index,
  projectTitle,
  onZoom,
}: {
  image: ProjectImage;
  index: number;
  projectTitle: string;
  onZoom: (payload: { src: string; alt: string }) => void;
}) {
  const alt = image.caption ?? `${projectTitle} screenshot ${index + 1}`;

  return (
    <div className="group overflow-hidden rounded-xl border border-white/[0.08] bg-[#14141a]/60 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)] transition-shadow duration-300 hover:shadow-[0_12px_40px_-12px_rgba(139,92,246,0.25)]">
      <ImageFrame
        src={image.src}
        alt={alt}
        aspectClass="aspect-[4/3]"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        showGradient={false}
        zoomable
        onZoom={() => onZoom({ src: image.src, alt })}
      />
      {image.caption && (
        <p className="border-t border-white/[0.06] px-4 py-3 text-sm font-medium text-zinc-300">
          {image.caption}
        </p>
      )}
    </div>
  );
}

export function ProjectIntroImage({
  introImage,
  projectTitle,
}: ProjectIntroImageProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02]">
      <ImageFrame
        src={introImage}
        alt={`${projectTitle} overview`}
        priority
      />
    </div>
  );
}

function getGalleryBreakpoints(imageCount: number) {
  const tabletSlides = Math.min(2, Math.max(1, imageCount - 1));
  const desktopSlides = imageCount >= 4 ? 3 : Math.min(2, Math.max(1, imageCount - 1));

  return {
    640: { slidesPerView: tabletSlides, slidesPerGroup: 1, spaceBetween: 16 },
    1024: { slidesPerView: desktopSlides, slidesPerGroup: 1, spaceBetween: 20 },
  };
}

export function ProjectGallerySlider({
  galleryImages,
  projectTitle,
}: ProjectGallerySliderProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canSlidePrev, setCanSlidePrev] = useState(false);
  const [canSlideNext, setCanSlideNext] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const useSlider = galleryImages.length >= 2;
  const enableLoop = galleryImages.length > 3;

  const updateNavState = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
    setCanSlidePrev(enableLoop || !swiper.isBeginning);
    setCanSlideNext(enableLoop || !swiper.isEnd);
  };

  if (galleryImages.length === 0) {
    return null;
  }

  return (
    <>
      <div className="project-image-slider relative w-full overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/[0.04] via-transparent to-violet-500/[0.05]" />

        <div className="relative">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
            Project Screenshots
          </h2>

          {useSlider ? (
            <div className="relative px-2 sm:px-4">
              <Swiper
                slidesPerView={1}
                slidesPerGroup={1}
                spaceBetween={16}
                speed={500}
                grabCursor
                loop={enableLoop}
                breakpoints={getGalleryBreakpoints(galleryImages.length)}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                  updateNavState(swiper);
                }}
                onSlideChange={updateNavState}
                onReachBeginning={(swiper) => updateNavState(swiper)}
                onReachEnd={(swiper) => updateNavState(swiper)}
                className="project-screenshots-swiper"
              >
                {galleryImages.map((image, i) => (
                  <SwiperSlide key={`${image.src}-${i}`}>
                    <GalleryImageCard
                      image={image}
                      index={i}
                      projectTitle={projectTitle}
                      onZoom={setZoomedImage}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
                disabled={!canSlidePrev}
                className="absolute left-0 top-[calc(50%-1.5rem)] z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-sky-500 text-white shadow-lg shadow-sky-500/30 transition-all hover:bg-sky-400 hover:shadow-sky-400/40 disabled:pointer-events-none disabled:bg-zinc-800 disabled:text-zinc-600 disabled:shadow-none disabled:opacity-40 sm:h-11 sm:w-11"
                aria-label="Previous screenshot"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
                disabled={!canSlideNext}
                className="absolute right-0 top-[calc(50%-1.5rem)] z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-sky-500 text-white shadow-lg shadow-sky-500/30 transition-all hover:bg-sky-400 hover:shadow-sky-400/40 disabled:pointer-events-none disabled:bg-zinc-800 disabled:text-zinc-600 disabled:shadow-none disabled:opacity-40 sm:h-11 sm:w-11"
                aria-label="Next screenshot"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
              {galleryImages.map((image, i) => (
                <GalleryImageCard
                  key={`${image.src}-${i}`}
                  image={image}
                  index={i}
                  projectTitle={projectTitle}
                  onZoom={setZoomedImage}
                />
              ))}
            </div>
          )}

          {useSlider && (
            <div className="mt-8 flex items-center justify-center gap-2">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() =>
                    enableLoop
                      ? swiperRef.current?.slideToLoop(i)
                      : swiperRef.current?.slideTo(i)
                  }
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === activeIndex
                      ? "w-8 bg-sky-400 shadow-sm shadow-sky-400/50"
                      : "w-2 bg-white/20 hover:bg-sky-400/60",
                  )}
                  aria-label={`Go to screenshot ${i + 1}`}
                  aria-current={i === activeIndex ? "true" : undefined}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {zoomedImage && (
        <ImageLightbox
          src={zoomedImage.src}
          alt={zoomedImage.alt}
          onClose={() => setZoomedImage(null)}
        />
      )}
    </>
  );
}

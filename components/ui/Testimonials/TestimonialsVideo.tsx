"use client";

import EmblaCarousel from "@/components/carousel/TestimonialsCarousel";
import EmblaVideoCarousel from "@/components/carousel/TestimonialsVideoCarrousel";
import { motion } from "framer-motion";

const videoItems = [
  { id: "NWbfL2VdfAI", title: "Camila", subtitle: "chilena en Canadá" },
  { id: "ZvRq0W5cA_4", title: "Cony", subtitle: "testimonio" },
  { id: "siPLkkK2rx4", title: "Fabri", subtitle: "testimonio" },
  { id: "ce6Ri9Sp3QE", title: "Eileen y Silvi", subtitle: "testimonio" },
  { id: "J_uV4C7pcmk", title: "Michelle", subtitle: "testimonio" },
  { id: "p_wvfBh0bLc", title: "Martin y Cami", subtitle: "testimonio" },
  { id: "VvJkSBSlkjo", title: "Romi", subtitle: "testimonio" },
  { id: "6lmwufRcP8U", title: "Fer", subtitle: "testimonio" },
];



function VideoCard({
  videoId,
  title,
  subtitle,
  index,
}: {
  videoId: string;
  title?: string;
  subtitle?: string;
  index: number;
}) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <div
        className="flex flex-col h-full rounded-3xl overflow-hidden bg-white"
        style={{
          boxShadow: "0 4px 24px rgba(109,40,217,0.08), 0 1px 4px rgba(0,0,0,0.06)",
          border: "1px solid rgba(109,40,217,0.1)",
        }}
      >
        <div
          className="h-0.75 w-full shrink-0"
          style={{ background: "#9579b6" }}
        />

        {/* Video */}
        <div className="relative w-full pb-[56.25%] h-0 overflow-hidden bg-black">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
            title={title || "Video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          />
        </div>

        {/* Footer */}
        {title && (
          <div className="flex items-center gap-3 px-4 py-3">
            <div
              className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-xs font-bold text-white"
              style={{ background: "#9579b6" }}
            >
              {title[0]}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold leading-tight truncate text-gray-900">
                {title}
              </p>
              {subtitle && (
                <p className="text-xs leading-tight truncate text-gray-400">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function VideoSection() {
  return (
    <section className="bg-violet/30 to-bg padding">
      <div className="ctn ctn-margin">
        {/* <motion.h2
          className="mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Nuestras clases en acción
        </motion.h2> */}

        <EmblaVideoCarousel>
          {videoItems.map((video, i) => (
            <VideoCard
              key={video.id}
              videoId={video.id}
              title={video.title}
              subtitle={video.subtitle}
              index={i}
            />
          ))}
        </EmblaVideoCarousel>
      </div>
    </section>
  );
}3
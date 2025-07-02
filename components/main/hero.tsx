import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full min-h-screen">
      {/* Enhanced video background with overlay */}
      <div className="absolute inset-0 -z-20">
        <video
          autoPlay
          muted
          loop
          className="rotate-180 w-full h-full object-cover"
        >
          <source src="/videos/blackhole.webm" type="video/webm" />
        </video>
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030014]/30 to-[#030014]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030014]/20 via-transparent to-[#030014]/20" />
      </div>

      {/* Animated geometric shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border border-purple-500/20 rounded-full animate-pulse-slow" />
        <div className="absolute top-40 right-20 w-20 h-20 border border-cyan-400/20 rounded-lg rotate-45 animate-float" />
        <div className="absolute bottom-40 left-20 w-16 h-16 border border-pink-500/20 rounded-full animate-bounce-slow" />
        <div className="absolute bottom-20 right-40 w-24 h-24 border border-blue-400/20 rounded-lg rotate-12 animate-pulse-slow" />
      </div>

      <HeroContent />
    </div>
  );
};

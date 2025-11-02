"use client";

export default function AIDemoWidget() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-[#1A2C50]/40 p-6 text-left">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/ai.png"
        className="w-full h-full object-cover rounded-xl"
      >
        <source src="/chat.mp4" type="video/mp4" />
      </video>
      <p className="text-white/80 text-center mt-4 text-sm">
        Meet Maria — your 24/7 AI restaurant assistant 👩‍🍳💬
      </p>
    </div>
  );
}
 

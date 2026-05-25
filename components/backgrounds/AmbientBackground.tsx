export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-background-deep" />

      <div className="absolute inset-0 bg-grid opacity-40" />

      <div
        className="absolute -left-[20%] top-[10%] h-[55vh] w-[55vh] rounded-full opacity-40 animate-blob-1"
        style={{
          background:
            "radial-gradient(circle, rgba(14,101,169,0.25) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute -right-[15%] top-[30%] h-[45vh] w-[45vh] rounded-full opacity-35 animate-blob-2"
        style={{
          background:
            "radial-gradient(circle, rgba(168,211,240,0.12) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />
      <div
        className="absolute bottom-[5%] left-[30%] h-[40vh] w-[50vh] rounded-full opacity-30 animate-blob-3"
        style={{
          background:
            "radial-gradient(ellipse, rgba(42,50,72,0.8) 0%, transparent 65%)",
          filter: "blur(70px)",
        }}
      />

      <div
        className="absolute inset-0 animate-mesh opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(14,101,169,0.15), transparent), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(168,211,240,0.06), transparent)",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-deep/20 to-background-deep" />
    </div>
  );
}

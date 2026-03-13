import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Workflow from "@/components/Workflow";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Noise texture overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat' }} />

      <Hero />
      <BentoGrid />
      <Workflow />

      {/* Footer */}
      <footer className="border-t border-white/[0.05] px-6 py-12 text-center">
        <p className="text-sm text-white/30">
          © {new Date().getFullYear()} — Conçu & développé avec précision.
        </p>
      </footer>
    </main>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-[#94a3b8] border-t border-[#1e293b]" style={{ paddingTop: "clamp(24px, 3vw, 40px)", paddingBottom: "clamp(24px, 3vw, 40px)" }}>
      <div className="container mx-auto px-4 sm:px-5 max-w-[1240px] flex flex-col sm:flex-row justify-between gap-3 sm:gap-5 text-center sm:text-left text-[13px] sm:text-sm">
        <span>&copy; 2026 Arynoxtech. All rights reserved.</span>
        <span className="text-[#94a3b8]/80">Software &bull; Mobile Apps &bull; AI &bull; Digital Growth</span>
      </div>
    </footer>
  );
}

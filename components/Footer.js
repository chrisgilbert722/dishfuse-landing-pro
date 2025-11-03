import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-10 bg-[#0B1222] border-t border-white/10 text-center text-white/70 text-sm">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <Image
          src="/logo-header.png"
          alt="DishFuse"
          width={140}
          height={36}
          className="opacity-90"
        />
      </div>

      {/* Footer links */}
      <nav className="flex justify-center gap-6 mb-3 text-white/70 text-sm">
        <a href="#features" className="hover:text-[#F4C762]">Features</a>
        <a href="#pricing" className="hover:text-[#F4C762]">Pricing</a>
        <a href="#faq" className="hover:text-[#F4C762]">FAQ</a>
      </nav>

      <p className="text-white/50 text-xs">
        © {new Date().getFullYear()} DishFuse. All rights reserved.
      </p>
    </footer>
  );
}

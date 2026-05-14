import Image from "next/image";

interface LogoProps {
  className?: string;
  title?: string;
}

export function Logo({ className = "", title = "Medi Clean" }: LogoProps) {
  return (
    <Image src="/logo.svg" alt="Logo" width={100} height={100} className={className} />
  );
}

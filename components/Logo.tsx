import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from '../app/logo.png'

const Logo = ({
  className,
  spanDesign,
}: {
  className?: string;
  spanDesign?: string;
}) => {
  return (
    <Link href={"/"} className="inline-flex items-center space-x-2">
      {/* Favicon / Logo Icon */}
      <Image
        src={logo}// Path to your image in the public folder
        alt="Interstellar Visa Center Logo"
        width={40}        // adjust size as needed
        height={40}       // adjust size as needed
      />

      {/* Text */}
      <h2
        className={cn(
          "text-xl font-black tracking-wide uppercase hover:text-space-light transition-colors duration-300 group font-poppins",
          className
        )}
      >
        Inter
        <span
          className={cn(
            "text-astro-purple group-hover:text-gravity-blue transition-colors duration-300",
            spanDesign
          )}
        >
          Visa
        </span>
      </h2>
    </Link>
  );
};

export default Logo;

"use client";

import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function CustomLink({
  href,
  children,
  className,
  onClick,
}: Props) {
  const isExternal =
    href.startsWith("http") ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.();

    if (href.startsWith("#")) {
      e.preventDefault();

      const section = document.querySelector(href);

      section?.scrollIntoView({
        behavior: "smooth",
      });

      window.history.pushState(null, "", href);
    }
  };

  if (isExternal) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}

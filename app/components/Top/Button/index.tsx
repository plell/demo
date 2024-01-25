"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

type Props = {
  href: string;
  label: string;
};

const Button = ({ href, label }: Props) => {
  const pathname = usePathname();

  const selected = useMemo(() => {
    return href === pathname;
  }, [href, pathname]);

  return (
    <Link
      className={`btn ${selected ? "btn-primary" : ""}`}
      onClick={() => console.log(href)}
      style={{ marginRight: 20 }}
      href={href}
    >
      {label}
    </Link>
  );
};

export default Button;

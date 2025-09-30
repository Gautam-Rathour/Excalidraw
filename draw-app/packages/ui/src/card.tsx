



import { type ReactNode } from "react";

export function Card({
  className,
  children,
  title,
  href,
}: {
  className?: string;
  title?: string;   // <-- make optional
  children: ReactNode;
  href?: string;    // <-- make optional
}) {
  // If href is passed, render <a>, else just <div>
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      className={className}
      href={href ? `${href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo` : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      target={href ? "_blank" : undefined}
    >
      {title && (
        <h2>
          {title} <span>-&gt;</span>
        </h2>
      )}
      {children}
    </Wrapper>
  );
}

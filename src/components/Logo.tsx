type LogoProps = {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
};

const sizes = {
  sm: { mark: 28, text: "text-[0.95rem]" },
  md: { mark: 34, text: "text-[1.15rem]" },
  lg: { mark: 52, text: "text-[1.75rem]" },
};

function Mark({ size }: { size: number }) {
  const uid = `logo-${size}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="shrink-0"
    >
      <defs>
        <linearGradient
          id={`${uid}-top`}
          x1="24"
          y1="6"
          x2="24"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3A5FBF" />
          <stop offset="1" stopColor="#243F8F" />
        </linearGradient>
        <linearGradient
          id={`${uid}-left`}
          x1="8"
          y1="15"
          x2="24"
          y2="42"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1E3A8A" />
          <stop offset="1" stopColor="#12275C" />
        </linearGradient>
        <linearGradient
          id={`${uid}-right`}
          x1="24"
          y1="24"
          x2="40"
          y2="42"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#152A66" />
          <stop offset="1" stopColor="#0A1533" />
        </linearGradient>
      </defs>
      <ellipse cx="24" cy="43.4" rx="10.5" ry="2" fill="#061022" opacity="0.28" />
      <path
        d="M24 5.8L40.2 15.2L24 24.6L7.8 15.2L24 5.8Z"
        fill={`url(#${uid}-top)`}
      />
      <path
        d="M7.8 15.2V32.8L24 42.2V24.6L7.8 15.2Z"
        fill={`url(#${uid}-left)`}
      />
      <path
        d="M24 24.6V42.2L40.2 32.8V15.2L24 24.6Z"
        fill={`url(#${uid}-right)`}
      />
      <path
        d="M24 10.6L32.4 15.4L24 20.2L15.6 15.4L24 10.6Z"
        fill="white"
        opacity="0.12"
      />
    </svg>
  );
}

export default function Logo({
  variant = "dark",
  size = "md",
  showWordmark = true,
}: LogoProps) {
  const { mark, text } = sizes[size];
  const wordColor = variant === "light" ? "text-white" : "text-ink";

  return (
    <span className="inline-flex items-center gap-2.5">
      <Mark size={mark} />
      {showWordmark && (
        <span
          className={`font-[family-name:var(--font-display)] font-extrabold tracking-[-0.02em] ${text} ${wordColor}`}
        >
          BlockSphere Tech
        </span>
      )}
    </span>
  );
}

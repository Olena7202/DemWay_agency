type LogoDwProps = {
  className?: string
}

export function LogoDw({ className = '' }: LogoDwProps) {
  return (
    <svg
      className={`logo-dw ${className}`.trim()}
      viewBox="0 0 330 168"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="miter"
        strokeMiterlimit="2.2"
      >
        <path d="M50 22v124M50 22h36a62 62 0 0 1 0 124H50" />
        <path d="M72 50v68M72 50h18a34 34 0 0 1 0 68H72" />
        <path d="M108 146 146 20l24 74 28-74 28 126" />
        <path d="M198 20 300 6" strokeLinecap="round" />
      </g>
      <path fill="currentColor" d="M284 0 318 7l-14 26z" />
    </svg>
  )
}

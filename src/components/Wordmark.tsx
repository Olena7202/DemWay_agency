type WordmarkProps = {
  className?: string
}

export function Wordmark({ className = '' }: WordmarkProps) {
  return (
    <span className={`wordmark ${className}`.trim()}>
      <span className="wordmark__name">DemWay</span>
      <span className="wordmark__agency">digital agency</span>
    </span>
  )
}

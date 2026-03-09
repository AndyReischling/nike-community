export function ConnectorLines({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 300"
      fill="none"
      className={`text-[var(--cream)] opacity-15 ${className}`}
      aria-hidden="true"
    >
      {/* Vertical spine */}
      <line x1="40" y1="0" x2="40" y2="300" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 6" />
      {/* Horizontal branches */}
      <line x1="40" y1="60" x2="160" y2="60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 6" />
      <line x1="40" y1="140" x2="130" y2="140" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 6" />
      <line x1="40" y1="220" x2="180" y2="220" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 6" />
      {/* Node circles */}
      <circle cx="40" cy="60" r="3" fill="currentColor" opacity="0.4" />
      <circle cx="160" cy="60" r="3" fill="currentColor" opacity="0.4" />
      <circle cx="40" cy="140" r="3" fill="currentColor" opacity="0.4" />
      <circle cx="130" cy="140" r="3" fill="currentColor" opacity="0.4" />
      <circle cx="40" cy="220" r="3" fill="currentColor" opacity="0.4" />
      <circle cx="180" cy="220" r="3" fill="var(--orange)" opacity="0.6" />
      {/* Diagonal connector */}
      <line x1="130" y1="140" x2="180" y2="220" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 5" />
    </svg>
  );
}

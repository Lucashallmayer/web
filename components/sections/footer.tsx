function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-5 py-12 md:grid-cols-3 md:items-center md:px-8">
        <div>
          <p className="text-lg font-black tracking-tight text-foreground">LH</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Lucas Hällmayer • Entrenador Online
          </p>
        </div>

        <div className="md:text-center">
          <a
            href="https://instagram.com/hallmayerlucas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <InstagramIcon className="size-4" />
            @hallmayerlucas
          </a>
        </div>

        <div className="md:text-right">
          <p className="text-sm text-muted-foreground">
            © 2026 • Buenos Aires, Argentina
          </p>
        </div>
      </div>
    </footer>
  )
}

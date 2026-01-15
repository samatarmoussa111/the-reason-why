export function Footer() {
  return (
    <footer className="border-t bg-background" id="contact">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="text-lg font-semibold">Fatouma N Ali</div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Fatouma N Ali. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

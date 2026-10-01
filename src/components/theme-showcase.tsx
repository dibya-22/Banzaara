type ThemeVariant = "light" | "dark";

export default function ThemeShowcase({ theme = "light" }: { theme?: ThemeVariant }) {
  const isDark = theme === "dark";

  return (
    <div className={isDark ? "dark" : "light"}>
      <div className="min-h-screen bg-background p-8 text-foreground">
        <div className="mx-auto max-w-5xl space-y-8">
          <header className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">BANZAARA</p>
                <h1 className="mt-1 text-3xl font-semibold text-foreground">Plan your next journey.</h1>
              </div>

              <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                New Trip
              </button>
            </div>
          </header>

          <section className="grid gap-5 md:grid-cols-3">
            {[
              ["Odisha", "5 days", "Explore temples & beaches"],
              ["Himachal", "7 days", "Mountains & quiet roads"],
              ["Rajasthan", "6 days", "Desert & heritage"],
            ].map(([place, days, description]) => (
              <div key={place} className="rounded-2xl border border-border bg-card p-5">
                <div className="mb-5 flex h-32 items-end rounded-xl bg-muted p-4">
                  <span className="rounded-md bg-card px-2 py-1 text-xs font-medium text-foreground">
                    {days}
                  </span>
                </div>

                <h2 className="text-lg font-semibold text-foreground">{place}</h2>

                <p className="mt-1 text-sm text-muted-foreground">{description}</p>

                <button className="mt-5 text-sm font-medium text-primary">View itinerary →</button>
              </div>
            ))}
          </section>

          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-lg font-semibold text-foreground">Trip details</h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-muted p-4">
                <p className="text-xs text-muted-foreground">Budget</p>
                <p className="mt-1 font-semibold text-foreground">₹18,500</p>
              </div>

              <div className="rounded-xl bg-secondary p-4">
                <p className="text-xs text-secondary-foreground">Duration</p>
                <p className="mt-1 font-semibold text-secondary-foreground">5 Days</p>
              </div>

              <div className="rounded-xl bg-accent p-4 text-accent-foreground">
                <p className="text-xs opacity-75">Status</p>
                <p className="mt-1 font-semibold">Ready to go</p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-lg font-semibold text-foreground">Create a trip</h2>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <input
                placeholder="Trip name"
                className="rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground outline-none transition focus:ring-2 focus:ring-ring"
              />

              <input
                placeholder="Destination"
                className="rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground outline-none transition focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <button className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">
                Create trip
              </button>

              <button className="rounded-lg bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground">
                Cancel
              </button>

              <button className="rounded-lg bg-destructive px-5 py-2.5 text-sm font-medium text-destructive-foreground">
                Delete
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

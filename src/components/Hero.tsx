import { siteConfig } from "../config/site";

export function Hero() {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="flex max-w-[980px] flex-col items-start gap-4">
        <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl">
          {siteConfig.name}
        </h1>
        <p className="max-w-[700px] text-lg text-muted dark:text-muted-dark md:text-xl">
          {siteConfig.description}
        </p>
        <div className="flex gap-4">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-md bg-accent hover:bg-accent/90 px-8 text-sm font-medium text-white transition-colors"
          >
            View GitHub
          </a>
          <a
            href={`mailto:${siteConfig.links.email}`}
            className="inline-flex h-10 items-center justify-center rounded-md border border-border dark:border-border-dark px-8 text-sm font-medium transition-colors hover:bg-muted/10"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="my-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex items-center space-x-4 rounded-lg border border-border dark:border-border-dark p-4">
          <div className="flex-1">
            <h3 className="font-medium">React & TypeScript</h3>
            <p className="text-sm text-muted dark:text-muted-dark">
              Expert in modern web development
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4 rounded-lg border border-border dark:border-border-dark p-4">
          <div className="flex-1">
            <h3 className="font-medium">Full Stack</h3>
            <p className="text-sm text-muted dark:text-muted-dark">
              End-to-end application development
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4 rounded-lg border border-border dark:border-border-dark p-4">
          <div className="flex-1">
            <h3 className="font-medium">UI/UX Design</h3>
            <p className="text-sm text-muted dark:text-muted-dark">
              Clean and intuitive interfaces
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

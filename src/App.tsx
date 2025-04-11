import { Typewriter } from "react-simple-typewriter";

export default function App() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-[#0c0c0c] text-[#e5e5e5] font-sans">
      <div className="w-full max-w-md space-y-3 text-sm leading-relaxed text-center sm:text-base md:text-lg">
        {/* Top line */}
        <p className="text-base text-neutral-200 sm:text-lg md:text-xl">
          fullstack dev <span className="animate-blink">|</span> @{" "}
          <a
            href="https://tranvu.dev"
            className="underline hover:text-indigo-400"
          >
            tranvu.dev
          </a>
        </p>

        {/* Typewriter effect */}
        <div className="text-neutral-500 min-h-[1.5rem] text-sm sm:text-base">
          <Typewriter
            words={[
              "powered by TypeScript",
              "powered by React",
              "powered by Vite",
              "powered by clean code",
              "powered by caffeine ☕",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={40}
            deleteSpeed={30}
            delaySpeed={1500}
          />
        </div>

        {/* Bottom links */}
        <p className="text-xs sm:text-sm md:text-base text-neutral-600">
          Find my{" "}
          <a href="/projects" className="underline hover:text-indigo-400">
            Projects
          </a>{" "}
          or check out the{" "}
          <a href="/blog" className="underline hover:text-indigo-400">
            Blog
          </a>
          .
        </p>
      </div>
    </main>
  );
}

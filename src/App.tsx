import "./App.css";

function App() {
  return (
    <div className="min-h-screen w-full bg-[#1a1a1a] flex items-center justify-center">
      <div
        className="
          bg-black rounded-3xl shadow-2xl text-center
          px-6 py-4
          sm:px-10 sm:py-6
          md:px-16 md:py-8
          lg:px-24 lg:py-10
          max-w-full
        "
      >
        <h1
          className="
            font-bold tracking-tight text-white
            text-[24px]
            sm:text-[40px]
            md:text-[56px]
            lg:text-[72px]
            leading-tight
          "
        >
          teddiexjinne<span className="text-blue-400">.</span>
        </h1>
      </div>
    </div>
  );
}

export default App;

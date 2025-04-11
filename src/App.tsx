import "./App.css";

function App() {
  return (
    <div className="min-h-screen w-full bg-[#1a1a1a] flex items-center justify-center">
      <div
        className="
        bg-black rounded-3xl shadow-xl 
        px-4 py-3 
        sm:px-8 sm:py-6 
        md:px-12 md:py-8 
        lg:px-16 lg:py-10 
        max-w-full text-center"
      >
        <h1
          className="
          text-white font-bold tracking-tight 
          text-[28px] 
          sm:text-[40px] 
          md:text-[56px] 
          lg:text-[72px] 
          leading-tight"
        >
          teddiexjinne<span className="text-blue-400">.</span>
        </h1>
      </div>
    </div>
  );
}

export default App;

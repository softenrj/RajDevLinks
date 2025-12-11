import React from "react";
import Typer from "./Typer";

function BioSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full -mt-4 mx-auto px-6 py-12 justify-center items-start gap-3">

      <span className="text-4xl md:text-6xl text-black font-serif leading-none select-none font-bold -mt-2 -mr-1.5">
        &ldquo;
      </span>

      <div className=" font-serif tracking-wide leading-relaxed italic mt-1">
        <Typer 
            messages={[children as string]} 
            typingSpeed={20} 
            pauseTime={2000} 
            textColour="text-gray-600 text-center" 
            loop={false} 
        />
      </div>

      <span className="text-4xl md:text-6xl text-black font-serif leading-none select-none font-bold self-end -mb-4 -ml-1.5">
        &rdquo;
      </span>

    </div>
  );
}

export default BioSection;
import { useEffect } from "react";
import s8logo from "../assets/hts.png";

function Hero() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-neutral-100  dark:bg-zinc-950 h-screen flex flex-col md:flex-row justify-evenly items-center ">
      <div className="animate__animated animate__backInDown flex flex-col items-center md:flex-row md:items-start justify-evenly">
        <div className="max-w-xs">
          <img
            className="rounded-full"
            src={s8logo}
            alt="eseight logo"
          />
        </div>
        <div className="max-w-sm md:max-w-md m-5 flex flex-col justify-center">
          <h1 className="font-bold text-4xl text-teal-600 pb-3 ">EsEight</h1>
          <p className="dark:text-white">
            Hello! I'm EsEight, a full stack developer with 2 years of
            experience in JavaScript. I specialize in creating dynamic and
            efficient web applications, using technologies such as React.js on
            the frontend and Node.js on the backend. My focus is on translating
            creative designs into functional and optimized code, ensuring
            exceptional user experiences. I'm always seeking new challenges and
            opportunities to continue growing as a professional in the web
            development world.
          </p>
        </div>
      </div>
      
    </main>
  );
}

export default Hero;

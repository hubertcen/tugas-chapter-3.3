import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1440px] mx-auto flex flex-col justify-center h-full">
        <p className="text-2xl tracking-widest uppercase text-[#b14675]">
          Skills
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* HTML */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-200 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/html.png"
                  width="64"
                  height="64"
                  alt="html-logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          {/* CSS */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-200 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/css.png"
                  width="64"
                  height="64"
                  alt="css-logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          {/* JavaScript */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-200 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/javascript.png"
                  width="64"
                  height="64"
                  alt="javascript-logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          {/* React */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-200 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/react.png"
                  width="64"
                  height="64"
                  alt="react-logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>

          {/* NextJS */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-200 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/nextjs.png"
                  width="64"
                  height="64"
                  alt="nextjs-logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NextJS</h3>
              </div>
            </div>
          </div>

          {/* Tailwind */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-200 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/tailwind.png"
                  width="64"
                  height="64"
                  alt="tailwind-logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>

          {/* GitHub */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-200 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/github.png"
                  width="64"
                  height="64"
                  alt="github-logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>

          {/* Figma */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-200 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/figma.png"
                  width="64"
                  height="64"
                  alt="figma-logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Figma</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

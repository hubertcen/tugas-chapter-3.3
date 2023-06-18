import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen flex items-center">
      <div className="max-w-[1440px] m-auto md:grid grid-cols-3 gap-8 px-4">
        <div className="col-span-2">
          <p className="uppercase font-bold text-2xl tracking-widest text-[#263a4b]">
            About Me
          </p>
          <p className="py-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
            impedit cum quos laboriosam ea ratione velit voluptatum quisquam
            suscipit nostrum aliquid tenetur aperiam ullam facilis optio,
            laudantium sapiente ipsa molestias! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ipsum, numquam voluptate sapiente
            quidem atque accusamus fugit ab dicta ad temporibus illo labore,
            magnam porro? Repudiandae aliquam aspernatur est animi quos. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="px-4 w-full h-auto m-auto flex items-center justify-center">
          <img
            className="rounded-xl"
            src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

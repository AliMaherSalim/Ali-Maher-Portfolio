import React from 'react';
import Button from '../button/Button';

const About = () => {
  const about = {
    name: 'Ali Maher',
  };
  return (
    <div name="About" className=" w-full h-screen  text-white capitalize">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div
          className="container 
                max-[1000px] w-full grid grid-cols-2 gap-8"
        >
          <div data-aos="fade-in-zome" className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-400">
              about
            </p>
          </div>
          <div></div>
        </div>

        <div
          className="
                max-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4"
        >
          <div
            data-aos="fade-down-left"
            className="sm:text-right text-4xl font-bold mt-5"
          >
            <p className=" text-center">
              hi i'm <br />
              {about.name}
              <br /> take a look around
            </p>
          </div>
          <div data-aos="fade-down-right">
            <p className=' text-l'>
            Well-qualified Full Stack Developer familiar with wide range of programming utilities and languages. Knowledgeable of backend and frontend development requirements. Handles any part of process with ease. Collaborative team player with excellent technical abilities and related experience.
            </p>
          </div>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default About;

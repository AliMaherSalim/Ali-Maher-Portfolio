import { HiArrowNarrowRight } from 'react-icons/hi';
import introImg from './Startup life.gif';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
const Intro = () => {
  const intro = {
    name: 'Ali Maher',
    jobTitle: 'Full stack Web Developer',
    stack: 'MEARN Stack',
    UI: 'UI/UX Designer',
  };
  return (
    <div name="home" className="flex w-full ">
      <div className=" flex-1">
        <div
          className="intro
        flex flex-col justify-center h-screen capitalize max-w[1000px] mx-auto px-8"
        >
          <p className="font-bold text-xl sm:text-4xl ">hi my name is </p>
          <h1
            data-aos="fade-right"
            className="text-yellow-400 font-bold text-4xl sm:text-8xl "
          >
            {intro.name}
          </h1>

          <h3 className=" text-4xl sm:text-4xl w-[17rem]">
            <Typewriter
              className=""
              options={{
                strings: [`${intro.jobTitle}`, `${intro.stack}`, `${intro.UI}`],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
          {/* <p className=" py max-w-[700px]">{intro.stack}</p> */}
          <div>
            <button className="group text-xl border-4 px-5 py-2 my-2 flex items-center rounded-2xl font-bold capitalize hover:border-yellow-400 ">
              <Link to="Projects" smooth={true} duration={500}>
                view work
              </Link>
              <span className=" group-hover:rotate-90 decoration-1000 group-hover:text-yellow-400">
                <HiArrowNarrowRight className="ml-2 " />
              </span>
            </button>
            <div data-aos="fade-up" className="icons mx-2  flex gap-0">
              <a href="https://github.com/AliMaherSalim">
                <i class="fa-brands fa-github text-4xl mx-3 cursor-pointer  hover:text-yellow-400"></i>
              </a>
              <a href="https://www.linkedin.com/in/ali-maher-84199823b/">
                <i class="fa-brands fa-linkedin-in text-4xl mx-3 cursor-pointer  hover:text-yellow-400"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex-1">
        <div className="md:block w-100 mt-[25%] mr-16 hidden ">
          <img
            data-aos="fade-left"
            className="rounded-3xl"
            src={introImg}
            alt="intro"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Intro;

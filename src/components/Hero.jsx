import bg from '../assets/images/bg.jpeg';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

function Hero() {
  return (
    <div className="relative w-screen h-screen">
      <img src={bg} alt="bg" className="w-full h-full object-cover" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 transform translate-y-26">
        <p className="text-xl sm:text-5xl mb-2">Hello, I'm</p>
        <h1 className="text-4xl sm:text-8xl font-bold">Utkarsh Sharma</h1>
        <p className="italic mt-2 text-lg sm:text-lg">call me utkarshji</p>
        <p className="mt-6 tracking-widest text-lg sm:text-lg uppercase">And this is my resume</p>

        <div className="flex gap-6 mt-4 text-2xl">
          <a href="https://www.linkedin.com/in/utk7-sharma/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/utkarshji" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://leetcode.com/u/UtkarshJi/" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>      
        </div>
      </div>
    </div>
  );
}

export default Hero;

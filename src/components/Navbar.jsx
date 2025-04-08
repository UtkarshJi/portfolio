function Navbar() {
  return (
    <nav className="absolute top-5 left-0 w-full flex justify-center py-6 text-white z-10">
      <ul className="flex flex-wrap justify-center gap-18 sm:gap-12 md:gap-16 text-sm sm:text-base tracking-widest uppercase font-medium px-4 text-center">
        <li className="hover:text-gray-300 cursor-pointer">Home</li>
        <li className="hover:text-gray-300 cursor-pointer">Games</li>
        <li className="hover:text-gray-300 cursor-pointer">Art</li>
        <li className="hover:text-gray-300 cursor-pointer">Websites</li>
        <li className="hover:text-gray-300 cursor-pointer">About</li>
        <li className="hover:text-gray-300 cursor-pointer">Repos</li>
        <li> <a href="https://drive.google.com/file/d/1UlMxigKo-8bZaSfqtqWnpLf2rzVRYTW4/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 cursor-pointer">Resume</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
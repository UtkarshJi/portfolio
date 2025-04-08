function CardSection() {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-6 px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">My Projects</h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-gray-100 shadow-xl rounded-xl p-6 hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-2">Project {item}</h3>
              <p className="text-gray-700">Short description of project {item} goes here.</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default CardSection;
  
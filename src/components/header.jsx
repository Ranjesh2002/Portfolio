const Header = () => (
  <header className="bg-gray-900 py-16 bg-gradient-to-r from-[#2c3e50] to-[#3498db] text-white text-center p-8">
    <div className="container mx-auto text-center">
      <img
        src="src/assets/img.png"
        alt="Profile"
        className="w-[150px] h-[150px] rounded-full mx-auto mb-4 border-[3px] border-white transition-transform duration-300 ease-in-out hover:scale-105"
      />
      <h1 className="text-4xl font-bold mb-2">Ranjesh Thakur </h1>
      <p className="text-xl">Web Developer & Designer</p>
    </div>
  </header>
);

export default Header;

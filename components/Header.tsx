export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md fixed w-full z-10">
      <h1 className="text-xl font-bold text-blue-600">Toy Plane</h1>
      <nav>
        <ul className="flex gap-4 text-gray-700">
          <li><a href="#hero" className="hover:text-blue-500">Home</a></li>
          <li><a href="#features" className="hover:text-blue-500">Features</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

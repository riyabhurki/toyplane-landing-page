export default function Features() {
  return (
    <section id="features" className="p-10 bg-white text-center">
      <h3 className="text-3xl font-bold text-blue-700 mb-6">Key Features</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 shadow-lg rounded-lg border hover:scale-105 transition">
          <h4 className="text-xl font-semibold text-blue-500">Durable Material</h4>
          <p>Built to last through endless flights and crashes.</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg border hover:scale-105 transition">
          <h4 className="text-xl font-semibold text-blue-500">Realistic Design</h4>
          <p>Inspired by modern jets, detailed and aerodynamic.</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg border hover:scale-105 transition">
          <h4 className="text-xl font-semibold text-blue-500">Easy Assembly</h4>
          <p>Quick to put together and safe for all ages.</p>
        </div>
      </div>
    </section>
  );
}

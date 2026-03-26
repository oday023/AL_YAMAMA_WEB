import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Link to="/restaurants" className="p-6 bg-white rounded shadow hover:shadow-lg transition">Browse Restaurants</Link>
      <div className="p-6 bg-white rounded shadow">Other departments (Factories, Poultry, etc.): TBD</div>
    </div>
  );
}

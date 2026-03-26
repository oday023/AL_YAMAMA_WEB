import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import CartContext from '../context/CartContext';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const { items } = useContext(CartContext);
  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <div className="flex gap-4">
          <Link to="/" className="font-bold">AL YAMAMA</Link>
          <Link to="/restaurants">Restaurants</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
        <div className="flex gap-3 items-center">
          <Link to="/cart" className="relative">Cart ({items.length})</Link>
          {user ? <button onClick={logout} className="text-red-500">Logout</button> : <Link to="/login">Login</Link>}
        </div>
      </div>
    </nav>
  );
}

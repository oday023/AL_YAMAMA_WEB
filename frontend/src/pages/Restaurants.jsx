import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Restaurants(){
  const [restaurants,setRestaurants]=useState([]);
  useEffect(()=>{axios.get('http://localhost:5000/api/restaurants').then(res=>setRestaurants(res.data)).catch(console.error);},[]);
  return (<div><h1 className="text-2xl mb-4">Restaurants</h1><div className="grid gap-3">{restaurants.map((r)=> <div key={r.id} className="p-4 bg-white rounded shadow"><h2 className="font-bold">{r.name}</h2><Link to={`/branch/${r.id}`} className="text-blue-600">View Branches</Link></div>)}</div></div>);
}

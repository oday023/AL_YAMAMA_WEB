import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import CartContext from '../context/CartContext';

export default function Branch(){
  const { id } = useParams();
  const [branch, setBranch] = useState(null);
  const [items, setItems] = useState([]);
  const { addItem } = useContext(CartContext);

  useEffect(()=>{
    axios.get(`http://localhost:5000/api/branches/${id}`).then(res=>setBranch(res.data)).catch(console.error);
    axios.get('http://localhost:5000/api/menu').then(res=>setItems(res.data)).catch(console.error);
  },[id]);

  if(!branch) return <div>Loading...</div>;

  return (<div><h1 className="text-2xl font-bold">{branch.city} Branch</h1><div className="grid md:grid-cols-2 gap-4 mt-4">{items.map((item)=><div key={item.id} className="p-4 bg-white rounded shadow"><h3 className="font-semibold">{item.name}</h3><p>{item.price.toFixed(2)}$</p><button className="mt-2 bg-blue-600 text-white py-1 px-3 rounded" onClick={()=>addItem(item)}>Add to cart</button></div>)}</div></div>);
}

import { useContext } from 'react';
import CartContext from '../context/CartContext';

export default function Cart(){
  const { items, removeItem, clearCart } = useContext(CartContext);
  const total = items.reduce((sum,i)=>sum+i.price*i.quantity,0);
  return (<div className="bg-white p-6 rounded shadow"><h1 className="text-2xl mb-3">Cart</h1>{items.length===0 ? <p>Your cart is empty</p> : (<div><ul className="space-y-2">{items.map((i)=> <li key={i.id} className="flex justify-between"><span>{i.name} x{i.quantity}</span><span>{(i.price*i.quantity).toFixed(2)}$</span><button className="text-red-500" onClick={()=>removeItem(i.id)}>Remove</button></li>)}</ul><p className="mt-3 font-bold">Total: {total.toFixed(2)}$</p><button className="mt-2 bg-red-500 text-white px-3 py-1 rounded" onClick={clearCart}>Clear Cart</button></div>)}</div>);
}

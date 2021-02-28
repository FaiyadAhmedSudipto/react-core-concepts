import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const people = ['Tabib Mahmud', 'Tashrif Kahn']
  const addPeople = ['Tabib', 'Tashrif', 'Solaiman', 'Tawhid']

  const products = [
    { name: 'PhotoShop', price: '$50.76' },
    { name: 'Premiere Pro', price: '$70.22' },
    { name: 'After Effect', price: '$44.65' }]

  const productsName = products.map(product => product.name);
  console.log(productsName);



  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter></Counter>
        {/* <CounterAgain></CounterAgain> */}
        <Users></Users>
        <ul>
          <li>{people[0]}</li>
          <li>{people[1]}</li>
        </ul>
        <ul>
          {
            addPeople.map(peoples => <li>{peoples}</li>)
            // If any new name added, it will be added automatically.
          }
          {
            products.map(products => <li>{products.name}</li>)
          }
        </ul>

        <Persons></Persons>
        {/* Create your own tag */}
        <Person></Person>
        <Person></Person>
        <PersonMaking name='Ayman Sadiq' subscribers='1M'></PersonMaking>
        <PersonMaking name='Sadman Sadik' subscribers='0.9M'></PersonMaking>
        <PersonMaking name={people[0]} subscribers='1.2M'></PersonMaking>
        <PersonMaking name={people[1]} subscribers='1.1M'></PersonMaking>

        {/* <Product name={products[0].name} price={products[0].price} ></Product> */}
        {/* ===>>> Call the properties single single.<<<=== */}
        <Product products={products[1]}></Product>
        <Product products={products[2]}></Product>
        <ul>
          {
            products.map(products => <Product products={products}></Product>)
          }
        </ul>
      </header>
    </div>
  );
}

function Persons() {
  return <h2>Name: Sakib Khan</h2>
}

function Person() {
  return (
    <div style={{ border: '2px solid yellow', padding: '20px', margin: '10px', width: '300px' }}>
      <h3>Name: Maxwell</h3>
      <h4>Hero of the year</h4>
    </div>
    // When you return multiple parameters, you should gather them under a div. Then, return the div. Cause, you can return a single thing. And start/close it with first bracket '()' is good enough.
  )
}

function PersonMaking(props) {
  console.log(props);
  return (
    <div style={{ border: '2px solid skyblue', padding: '10px', margin: '10px', width: '400px' }}>
      <h3>Name: {props.name}</h3>
      <h4>Subscribers: {props.subscribers}</h4>
    </div>
  )
}

function Product(props) {
  console.log(props);
  const ProductStyle = {
    border: '2px solid gray',
    borderRadius: '5px',
    backgroundColor: 'royalblue',
    color: 'black',
    width: '350px',
    heigth: '350px',
    float: 'left'
  }

  //  ===>>> Call the properties single single.<<<===
  // return (
  //   <div style={ProductStyle}>
  //     <h3>Name: {props.name}</h3>
  //     <h4>Needed Money: {props.price}</h4>
  //     <button>Buy Now</button>
  //   </div>
  // )

  // ===>>> Call the properties with full array.<<<===
  // return (
  //   <div style={ProductStyle}>
  //     <h3>Name: {props.products.name}</h3>
  //     <h4>Needed Money: {props.products.price}</h4>
  //     <button>Buy Now</button>
  //   </div>
  // )

  // ===>>> Make a var & then call the properties with full array.<<<===
  const { name, price } = props.products;
  console.log(name, price)

  return (
    <div style={ProductStyle}>
      <h4>Name: {name}</h4>
      <h5>Needed Money: {price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

// Counter/ State
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrease}>Simple Increase</button>
      {/* You can write Increase like this directly by call the handleIncrease  */}
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <CounterAgain done= {count}></CounterAgain>
    </div>
  )
}
function CounterAgain(props) {
  return (
    <div>
      <h3>Done: {props.done}</h3>
    </div>
  )
}



// ===>>>From API
function Users() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    // console.log('Calling Effects');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  })
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
          {
            users.map(users => <li>{users.name}</li>)
          }
        </ul>
    </div>
  )
}

export default App;

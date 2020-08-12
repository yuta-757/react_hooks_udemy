import React, {useEffect, useState} from 'react';

const App = props => {
  const [state, setState] = useState(props);
  // オブジェクトで管理している値を分割して定義
  const {name, price} = state;

  useEffect(() => {
    console.log('This is like componentDidMount or componentDidUpdate');
  });

  useEffect(() => {
    console.log('This is like componentDidMount');
  }, []);

  useEffect(() => {
    console.log('This callback is for name only.');
  }, [name]); // 第二引数は必ずしもstateの値である必要はない

  return (
    <>
      <p>現在の{name}は、{price}円です。</p>
      {/*
      setStateでオブジェクトを管理する場合、
      第一引数...stateで展開
      第二引数 に変更するオブジェクトを記述
      */}
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={() => setState(props)}>Reset</button>
      <input
        value={name}
        onChange={e => setState({...state, name: e.target.value})}
      />
    </>
  )  
}

// 外部からpropsを与えてあげることもできる
App.defaultProps = {
  name: '',
  price: 1000,
}
export default App;


// 6. state
// // useStateは配列を二つ持つ
// const [count, setCount] = useState(0);
// // console.log(count);
// // console.log(setCount);

// const increment = () => {setCount(count + 1)};
// const decrement = () => {setCount(count - 1)};

// // setStateには引数を与えることもできる（より複雑なロジックに基づいて値を更新したい場合）
// const increment2 = () => {setCount(previousCount => previousCount + 1)};
// const decrement2 = () => {setCount(previousCount => previousCount - 1)};

// const doubleCount = () => {setCount(previousCount => previousCount * 2)};

// const devide3 = () => {
//   setCount(previousCount => {
//     if (previousCount % 3 === 0) {
//       return previousCount / 3;        
//     } else {
//       return previousCount;
//     }
//   });
//   // コードを短くしたいなら三項演算子＋波かっことる
//   // setCount(previousCount =>
//   //   previousCount % 3 === 0 ? previousCount / 3 : previousCount
//   // );
// };

// const resetCount = () => {setCount(0)};

// return (
//   // 最上位で定義したい場合、React.Fragment
//   // <React.Fragment>
//   // React.Fragmentは消えしてもOK
//   <> 
//     <div>
//     count: {count}
//     </div>
//     <div>
//       <button onClick={increment}>+1</button>
//       <button onClick={decrement}>-1</button>
//     </div>
//     <div>
//       <button onClick={increment2}>+1</button>
//       <button onClick={decrement2}>-1</button>
//     </div>
//     <div>
//       <button onClick={doubleCount}>×2</button>
//     </div>
//     <div>
//       <button onClick={devide3}>3の倍数の時だけ、3で割る</button>
//     </div>
//     <div>
//       <button onClick={resetCount}>Reset</button>
//     </div>
//   {/* </React.Fragment> */}
//   </>
// );

// 7. state
// const App = props => {
//   // コンポーネント内で定義する場合
//   // const initialStates = {
//   //   name: '',
//   //   price: 1000,
//   // }
//   // const [name, setName] = useState(initialStates.name);
//   // const [price, setPrice] = useState(initialStates.price);

//   const [name, setName] = useState(props.name);
//   const [price, setPrice] = useState(props.price);

//   const reset = () => {
//     setPrice(props.price);
//     setName(props.name);
//   }

//   return (
//     <>
//       <p>現在の{name}は、{price}円です。</p>
//       <button onClick={() => setPrice(price + 1)}>+1</button>
//       <button onClick={() => setPrice(price - 1)}>-1</button>
//       <button onClick={reset}>Reset</button>
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//     </>
//   )  
// }

// // 外部からpropsを与えてあげることもできる
// App.defaultProps = {
//   name: '',
//   price: 1000,
// }

// 8. state オブジェクト
// const App = props => {
//   const [state, setState] = useState(props);
//   // オブジェクトで管理している値を分割して定義
//   const {name, price} = state;

//   return (
//     <>
//       <p>現在の{name}は、{price}円です。</p>
//       {/*
//       setStateでオブジェクトを管理する場合、
//       第一引数...stateで展開
//       第二引数 に変更するオブジェクトを記述
//       */}
//       <button onClick={() => setState({...state, price: price + 1})}>+1</button>
//       <button onClick={() => setState({...state, price: price - 1})}>-1</button>
//       <button onClick={() => setState(props)}>Reset</button>
//       <input
//         value={name}
//         onChange={e => setState({...state, name: e.target.value})}
//       />
//     </>
//   )  
// }

// // 外部からpropsを与えてあげることもできる
// App.defaultProps = {
//   name: '',
//   price: 1000,
// }
// export default App;
//       <button onClick={() => setState(props)}>Reset</button>
//       <input
//         value={name}
//         onChange={e => setState({...state, name: e.target.value})}
//       />
//     </>
//   )  
// }

// // 外部からpropsを与えてあげることもできる
// App.defaultProps = {
//   name: '',
//   price: 1000,
// }
// export default App;
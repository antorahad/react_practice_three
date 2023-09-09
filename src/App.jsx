import './App.css'
import Counter from './component/Counter';
import Team from './component/Team';
function App() {
  
    const handleAlert = () => {
        alert(`I'm learning React Js`);
    }

    const getInfo = () => {
      prompt(`What is your name?`);
    }

    const addSum = (num1, num2) => {
        console.log (num1 + num2);
    }
  return (
    <>
      <h3>React Core Concepts Part-2</h3>
      <Counter></Counter>
      <Team></Team>
      <div style={{margin:'50px 0'}}>
        <div>
          <div>
          <button onClick={handleAlert}>Click Me</button>
      <button onClick={getInfo}>Get info</button>
      <button onClick={() => addSum(5, 5)}>Sum</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

import { useState } from "react";
import "../src/App.css";

// function UseState() {
//   const [currAge, setAge] = useState(19);
//   const [currSib, setSib] = useState(1);

//   const handleAge = () => {
//     setAge(currAge + 1);
//   };

//   const handleSib = () => {
//     setSib(currSib + 1);
//   };

//   return (
//     <div>
//       <h3>My Current Age is {currAge}</h3>
//       <h4>My siblings {currSib}</h4>

//       <button onClick={handleAge}>Get Older</button>
//       <button onClick={handleSib}>Get more Sib</button>
//     </div>
//   );
// }

// export default UseState;

function UseState() {
  const [state, setState] = useState({ age: 19, siblings: 3 });

  const handleState = (val) => {
    setState({
      ...state,
      [val]: state[val] + 1,
    });
  };

  const { age, siblings } = state;

  return (
    <div>
      <h3>My Current Age is {age}</h3>
      <h4>My siblings {siblings}</h4>
      <button
        onClick={() => {
          handleState("age");
        }}
      >
        age
      </button>
      <button
        onClick={() => {
          handleState("siblings");
        }}
      >
        sib
      </button>
    </div>
  );
}

export default UseState;

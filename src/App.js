import React, { useState, useEffect } from "react";
import DogPics from "./DogPics";

function App() {
  const [text, setText] = useState("")
  const [count, setCount] = useState(5)
  useEffect(() => {
    setTimeout(()=>setCount(0),5000)
    console.log("useEffect called");
  },[]);

  console.log("Component rendering");
  console.log(count)
  return (
    <div>
      <DogPics/>
      <button onClick={() => setCount(count => count += 1)}>{`I have been clicked ${count} times`}</button>
      <input placeholder="Type away..." type={"text"} value={text}
        onChange={e => setText(e.target.value)} />
    </div>
  )
}

export default App;

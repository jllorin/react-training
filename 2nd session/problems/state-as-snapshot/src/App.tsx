import { useState } from 'react'
import './App.css'

function App() {
  const [myInitial, setMyInitial] = useState({firstName: "Jason", lastName: "Llorin", addWith: 2, noOfTimes: 3});
  const [fullName, setFullName] = useState("");
  const [number, setNumber] = useState(0);

  let lastName = myInitial.lastName;
  lastName = `${lastName} from RLDatix`;

  const handleClickCalculate = (e: any) => {
    for (let i=0; i<myInitial.noOfTimes; i++) {
      setNumber(number + myInitial.addWith);
    }    
    setFullName(`${myInitial.firstName} ${lastName}`)
    alert(`${fullName} is adding ${myInitial.addWith} ${myInitial.noOfTimes} times = ${number}`);        
  }

  return <div>
      <div style={{padding: "10px", background: "yellow"}}>
        {`${fullName} is adding ${myInitial.addWith} ${myInitial.noOfTimes} times = ${number}`}
      </div>
      <div>
        Firstname: <input type="text" value={myInitial.firstName} />
      </div>
      <div>
        Add <input type="text" value={myInitial.addWith} />
      </div>
      <button onClick={handleClickCalculate}>X3 Times </button>
  </div>
}

export default App

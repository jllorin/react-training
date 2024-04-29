import { useState } from 'react'

export interface IMySiblingProps {
    relationship: string;
    onClick: any;   
}

function MyChildren({relationship, onClick}: IMySiblingProps)
{
    // as long as you maintain how many useState hooks in here
    let firstName = "ab";
    let setFirstName: any;
    const [lastName, setLastName] = useState("Llorin");    
    if (relationship === "daughter") {
      const [firstName1, setFirstName1] = useState("Jana");
      firstName = firstName1;
      setFirstName = setFirstName1;
    }
    // else {
    //   const [test, setTest] = useState("");
    // }
  
    return (
      <>
        <div>
          {firstName}&nbsp;
        </div>
        <div>
          {lastName}
        </div>
        <button onClick={onClick}>Other kid</button>
      </>
    )  
}

export default MyChildren;
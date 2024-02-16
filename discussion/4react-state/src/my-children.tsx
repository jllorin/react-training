import { useState } from 'react'

export interface IMySiblingProps {
    relationship: string;
}

function MyChildren({relationship}: IMySiblingProps)
{
    let firstName = "ab";
    let setFirstName: any;
    const [lastName, setLastName] = useState("Llorin");    
    if (relationship === "daughter") {
      const [firstName1, setFirstName1] = useState("Jana");
      firstName = firstName1;
      setFirstName = setFirstName1;
    }
  
    const onClick = (e: any) => {
      e.preventDefault();
      setFirstName("Matteo");
    }
  
    return (
      <>
        <div>
          {firstName}&nbsp;
        </div>
        <div>
          {lastName}
        </div>
        <button onClick={onClick}>Other son</button>
      </>
    )  
}

export default MyChildren;
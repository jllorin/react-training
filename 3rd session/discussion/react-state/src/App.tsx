import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyChildren from './my-children';

function App() {

  const [relationship, setRelationship] = useState("daughter");    

  const onClick = (e: any) => {
    e.preventDefault();
    setRelationship("son");
  }

  return <div>
      <MyChildren relationship={relationship} onClick={onClick} />
    </div>
}

export default App

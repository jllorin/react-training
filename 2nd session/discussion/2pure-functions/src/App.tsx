import { useState } from 'react'
import './App.css'
import TeaSet from './tea-set'
import TeaGathering from './tea-gathering'
import BadTeaSet from './bad-tea-set'

function App() {
  return (
    <>
    <h1>Bad Tea Set</h1>
    <BadTeaSet />
    <h1>Tea Set</h1>
    <TeaSet />
    {/* <h1>Tea Gathering</h1>
    <TeaGathering /> */}
    </>
  )
}

export default App

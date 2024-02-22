import React from 'react'
import Detail from './detail';

function Page()
{
    const myButtonName = "Got it";

    return <div style={{border: "solid 1px black"}}>
        Main Page
        <Detail />
    </div>;
}

export default Page;
import React from 'react'
import Detail from './detail';
import Footer from './footer';
import Button from './button';

function Page()
{
    const myButtonName = "Got it";

    return <div style={{border: "solid 1px black"}}>
        Main Page
        <Detail>
            <Footer>
                <Button buttonName={myButtonName} />
            </Footer>
        </Detail>
    </div>;
}

export default Page;
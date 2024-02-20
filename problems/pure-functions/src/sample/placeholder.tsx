import { useState } from "react";

function PlaceHolder({children}: any)
{
    const [collapse, setCollapse] = useState(false);

    const onClick = (e: any) => {
        setCollapse(!collapse);
    }

    return <div>
        <button onClick={onClick}>Collapse</button>
        {!collapse && children}
    </div>
}

export default PlaceHolder;
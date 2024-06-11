import { useState } from "react";

export interface IDetailsProps {
    name: any;
    onChange: (e: any, key: string) => void;
}

export default function Details({name, onChange}: IDetailsProps)
{
    const [fieldValidity, setFieldValidity] = useState({firstName: true, lastName: true});

    const handleBlur = (e: any, key: string) => {        
        setFieldValidity({...fieldValidity, [key]: name[key].length < 10})
    }

    return <>
        <div>
            <span style={{color: fieldValidity.firstName ? "black" : "red"}}>First Name:</span> <input type="text" onChange={(e) => onChange(e, "firstName")} 
                onBlur={(e) => handleBlur(e, "firstName")} />
        </div>
        <div>
            Last Name: <input type="text" onChange={(e) => onChange(e, "lastName")} />
        </div>    
    </>
}
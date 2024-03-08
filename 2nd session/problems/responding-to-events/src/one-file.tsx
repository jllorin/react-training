import { useState } from "react";

type typeName = {
    firstName: string;
    lastName: string;
}

export default function MyFormOneFile()
{

    return <>
        <form style={{background: "yellow", marginBottom: "20px"}}>
            <div style={{padding: "20px", fontWeight: "800"}} >
                Hi, my name is 
            </div>
            <div>                
                First Name: <input type="text"  />
            </div>
            <div>
                Last Name: <input type="text"  />
            </div>    
            <div>
                <input type="button" value="Save" />
            </div>
            <div style={{padding: "20px", fontWeight: "800"}} >
                Saved Name is 
            </div>
        </form>
    </>    
}
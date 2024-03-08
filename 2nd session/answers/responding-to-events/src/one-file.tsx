import { useState } from "react";

type typeName = {
    firstName: string;
    lastName: string;
}

export default function MyFormOneFile()
{
    const [name, setName] = useState<typeName>({firstName: "", lastName: ""});    
    const [savedName, setSavedName] = useState<string>("");    

    const handleChange = (e: any, key: string) => {
        setName({...name, [key]:e.target.value});
    }

    const isNameValid = () => name.firstName !== "" && name.lastName !== "";

    const handleSave = (e: any) => {                
        setSavedName(isNameValid() ? `${name.firstName} ${name.lastName}` : "Invalid");
    }    

    return <>
        <form style={{background: "yellow", marginBottom: "20px"}}>
            <div style={{padding: "20px", fontWeight: "800"}} >
                Hi, my name is {name.firstName} {name.lastName}
            </div>
            <div>                
                First Name: <input type="text" onChange={(e) => handleChange(e, "firstName")} />
            </div>
            <div>
                Last Name: <input type="text" onChange={(e) => handleChange(e, "lastName")} />
            </div>    
            <div>
                <input type="button" onClick={handleSave} value="Save" />
            </div>
            <div style={{padding: "20px", fontWeight: "800"}} >
                Saved Name is {savedName}
            </div>
        </form>
    </>    
}
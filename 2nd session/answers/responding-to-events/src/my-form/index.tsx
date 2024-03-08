import { useState } from "react";
import Header from "./header";
import Details from "./details";
import Footer from "./footer";
import { isNameValid } from "./validate";

export type typeName = {
    firstName: string;
    lastName: string;
}

export default function MyForm()
{
    const [name, setName] = useState<typeName>({firstName: "", lastName: ""});    
    const [savedName, setSavedName] = useState<string>("");    

    const handleChange = (e: any, key: string) => {
        setName({...name, [key]:e.target.value});
    }

    const handleSave = (e: any) => {                
        setSavedName(isNameValid(name) ? `${name.firstName} ${name.lastName}` : "Invalid");
    }

    return <>
        <form style={{background: "lightblue"}}>
            <Header {...name} />
            <Details name={name} onChange={handleChange} />
            <Footer onSave={handleSave} savedName={savedName} />
        </form>
    </>    
}
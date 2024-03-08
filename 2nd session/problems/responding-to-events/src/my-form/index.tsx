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
    return <>
        <form style={{background: "lightblue", height: "220px"}}>
        </form>
    </>    
}
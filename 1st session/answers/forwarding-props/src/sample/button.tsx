import React from 'react'

export interface IButtonProps {
    buttonName?: string;
}

function Button({buttonName}: IButtonProps)
{
    return <div>
        <button>{buttonName ?? "Need a name"}</button>        
    </div>;
}

export default Button;
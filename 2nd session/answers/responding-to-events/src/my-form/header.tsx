
export interface IHeaderProps {
    firstName: string;
    lastName: string;
}

export default function Header({firstName, lastName}: IHeaderProps)
{
    return <>
        <div style={{padding: "20px", fontWeight: "800"}} >
            Hi, my name is {firstName} {lastName}
        </div>
    </>
}
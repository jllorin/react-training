export interface IFooterProps {
    onSave: (e: any) => void;
    savedName: string;
}

export default function Footer({onSave, savedName}: IFooterProps)
{
    return <>
        <div>
            <input type="button" onClick={onSave} value="Save" />
        </div>
        <div style={{padding: "20px", fontWeight: "800"}} >
            Saved Name is {savedName}
        </div>
    </>
}
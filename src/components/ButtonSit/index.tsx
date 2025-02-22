
type Props = {
    text: string;
}

export default function ButtonSite({text}: Props) {
    
    return(
        <button  className="m-button m-container" type="submit">{text}</button>
       
    );

}
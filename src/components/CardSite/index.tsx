
type Props = {
    text: string;
}
export default function CardSite({text}: Props) {
    return(
       
            <div className="m-card m-container">
                <h3>{text}</h3>
            </div>
    
    );
}
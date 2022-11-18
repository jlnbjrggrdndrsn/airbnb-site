import "./Card.css"
import Bluebox from "../Components/Bluebox";
import Image from "../Components/Image";

const Card = () => {
    return ( 
        <article className="Card">
            <Image />
            <Bluebox />
        </article>
     );
}
 
export default Card;
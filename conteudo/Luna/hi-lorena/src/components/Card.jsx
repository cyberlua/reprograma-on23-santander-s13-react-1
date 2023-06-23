import Title from "./Title";
import Subtitle from "./Subtitle";
import Image from "./";
import Gfg from "./"


function Card() {
    return (
        <div className="cards_container">
            <Title text="Mahoutsukai no Yome"/>
            <Subtitle>2017</Subtitle>
            <Image class="image" caption="Gfg - Matadorah" image={Gfg}/>
        </div>
    )
}

export default Card;
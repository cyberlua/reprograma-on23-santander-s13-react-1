import Title from "./Title"
import Text from "./Text"
import Image from "./Image"

import girls from '../assets/ated.jpg'


function Bio() {
    return (
        <div className="banner">
        <Title text="Um dos meus desenhos favoritos"/>
        <Text text="As Três Espiãs Demais é uma animação que segue as aventuras de Sam, Clover e Alex, três adolescentes que se tornam espiãs secretas. Com personalidades únicas, elas enfrentam perigosos vilões e protegem o mundo de ameaças globais. Combinando moda, espionagem e comédia, o desenho animado cativa o público com sua ação eletrizante, reviravoltas surpreendentes e diálogos engraçados. Prepare-se para acompanhar essas espiãs incríveis em missões emocionantes repletas de estilo e coragem." />
        <Image img={girls} description=""/>
        </div>
    )
}

export default Bio
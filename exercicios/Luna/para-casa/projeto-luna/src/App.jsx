import './App.css'
import Header from './componentes/Header'
import Bio from './componentes/Bio'
import Card from './componentes/Card'
import Footer from './componentes/Footer'

import girl1 from './assets/sam.jpg'
import girl2 from './assets/alex.jpg'
import girl3 from './assets/clover.jpg'

function App() {

  return (
    <>
      <Header />
      <Bio />
      <div className="container">
      <Card 
      title="Samantha" 
      description="Sam é a espiã mais intelectual e racional do grupo. Sam é conhecida por sua inteligência, habilidades tecnológicas e perspicácia. Ela é uma estrategista nata e usa sua mente afiada para resolver problemas e decifrar enigmas. Além disso, ela é uma amante dos animais e tem uma atitude mais séria em relação às missões." 
      image={girl1}
      imageAlt="" 
      />

      <Card 
      title="Alex" 
      description="Alex é retratada como a espiã mais descontraída, engraçada e esportiva do grupo. Alex é atlética, corajosa e tem uma personalidade descontraída. Ela é geralmente vista como a mais descolada do grupo, com um senso de humor peculiar. Alex também demonstra uma paixão por esportes e atividades físicas." 
      image={girl2}
      imageAlt="" 
      />

      <Card 
      title="Clover" 
      description="Clover é outra das três espiãs principais. Ela é a mais extrovertida, vaidosa e socialmente consciente do grupo. Clover é apaixonada por moda, estilo e tendências, e muitas vezes demonstra interesse por garotos. Ela é uma espiã habilidosa e sua personalidade alegre e animada acrescenta um toque de leveza e humor às missões." 
      image={girl3}
      imageAlt="" 
      />
      </div>

      <Footer name="cyberlua"/>
    </>
  )
}

export default App

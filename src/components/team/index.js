import React from 'react'
import { ListContainer, ListItem, ItemCaption } from './styled'
import image1 from '../../assets/images/misc/risca.webp'
import havokk from '../../assets/images/perfil/perfil.jpg'
import image3 from '../../assets/images/misc/risca.webp'

const Team = () => (
  <ListContainer>
    <ListItem>
      <img src={image1} alt="Image 1" />
      <ItemCaption><p>Caio Lima</p>
      <br></br>
      <p>À frente da EpicLoot como Co-Fundador e CEO, Caio Lima (Nergal) é apaixonado por RPGs, literatura de fantasia e games, áreas que sempre influenciaram sua trajetória. Estudando tecnologia desde 2016, ele é formado em Análise de Sistemas e está expandindo seus conhecimentos em Engenharia de Software para fortalecer sua atuação. Com uma forte dedicação à área de negócios e processos, Caio lidera estrategicamente a EpicLoot. No entanto, sua paixão criativa o leva a se envolver diretamente no desenvolvimento e na criação de todos os projetos da empresa, participando ativamente em cada fase.</p>
      </ItemCaption>
    </ListItem>
    <ListItem>
      <img src={havokk} alt="Image 2" />
      <ItemCaption><p>Bruno Saldanha</p>
      <br></br>
      <p>À frente da EpicLoot como Co-Fundador e CTO, Bruno Saldanha (Havokk) é responsável por todas as áreas tecnológicas da empresa, desde desenvolvimento Web ao Desenvolvimento ativo de jogos e novas soluções internas. Bacharel em Análise de Sistemas pela Unicarioca, Bruno é apaixonado por RPGs, dark fantasy, Pokémon, e outros jogos. Ele tem uma conexão especial com Ragnarok Online, que marcou sua trajetória no mundo dos games. Junto com Caio, Bruno fundou a EpicLoot, unindo sua paixão por games com o desafio de criar algo inovador no mercado.</p></ItemCaption>
    </ListItem>
    <ListItem>
      <img src={image3} alt="Image 3" />
      <ItemCaption><p></p></ItemCaption>
    </ListItem>
  </ListContainer>
)

export default Team

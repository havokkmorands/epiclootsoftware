import React from 'react'
import { ListContainer, ListItem, ItemCaption } from './styled'
import image1 from '../../assets/images/misc/risca.webp'
import havokk from '../../assets/images/perfil/brunosaldanha.jpg'
import fox from '../../assets/images/perfil/isadkiel.jpg'

const Team = () => (
  <ListContainer>
    <ListItem>
      <img src={image1} alt="Image 1" />
      <ItemCaption><h1>Caio Lima</h1></ItemCaption>
      <br></br>
      <ItemCaption><p>À frente da EpicLoot como Co-Fundador e CEO, Caio Lima (Nergal) é apaixonado por RPGs, literatura de fantasia e games, áreas que sempre influenciaram sua trajetória. Estudando tecnologia desde 2016, ele é formado em Análise de Sistemas e está expandindo seus conhecimentos em Engenharia de Software para fortalecer sua atuação. Com uma forte dedicação à área de negócios e processos, Caio lidera estrategicamente a EpicLoot. No entanto, sua paixão criativa o leva a se envolver diretamente no desenvolvimento e na criação de todos os projetos da empresa, participando ativamente em cada fase.</p></ItemCaption>
    </ListItem>
    <ListItem>
      <img src={havokk} alt="Bruno Saldanha" />
      <ItemCaption><h1>Bruno Saldanha</h1></ItemCaption>
      <br></br>
      <ItemCaption><p>À frente da EpicLoot como Co-Fundador e CTO, Bruno Saldanha (Havokk) é responsável por todas as áreas tecnológicas da empresa, desde desenvolvimento Web ao Desenvolvimento ativo de jogos e novas soluções internas. Bacharel em Análise de Sistemas pela Unicarioca, Bruno é apaixonado por RPGs, dark fantasy, Pokémon, e outros jogos. Ele tem uma conexão especial com Ragnarok Online, que marcou sua trajetória no mundo dos games. Junto com Caio, Bruno fundou a EpicLoot, unindo sua paixão por games com o desafio de criar algo inovador no mercado.</p></ItemCaption>
    </ListItem>
    <ListItem>
      <img src={fox} alt="Isadkiel" />
      <ItemCaption><h1>Isadkiel</h1></ItemCaption>
      <br></br>
      <ItemCaption><p>Á Frente da Epic Loot como Diretor de Arte, Isadkiel R. Freitas (Fox), com uma profunda paixão por design de personagens e storytelling, especializo-me em criar visuais envolventes que contam histórias ricas e cativantes. Com um olhar atento analítico e inventivo, acredito que cada personagem não deve apenas ressoar com sua narrativa, mas também incorporar as emoções e experiências de sua jornada. Aperfeiçoando minhas habilidades em meios tradicionais e digitais desde 2019. Estou dedicado a fomentar a criatividade dentro da minha equipe, orientando projetos do conceito à conclusão, enquanto nutro uma atmosfera colaborativa. Em meu papel, busco inspirar outros a abraçar a beleza da narrativa através da arte, acreditando que cada personagem tem uma história que vale a pena ser contada.</p></ItemCaption>
    </ListItem>
  </ListContainer>
)

export default Team

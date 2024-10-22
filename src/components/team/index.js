import React from 'react'
import { ListContainer, ListItem, ItemCaption } from './styled'
import image1 from '../../assets/images/misc/risca.webp'
import image2 from '../../assets/images/misc/risca.webp'
import image3 from '../../assets/images/misc/risca.webp'

const Team = () => (
  <ListContainer>
    <ListItem>
      <img src={image1} alt="Image 1" />
      <ItemCaption>Caption for Image 1</ItemCaption>
    </ListItem>
    <ListItem>
      <img src={image2} alt="Image 2" />
      <ItemCaption>Caption for Image 2</ItemCaption>
    </ListItem>
    <ListItem>
      <img src={image3} alt="Image 3" />
      <ItemCaption>Caption for Image 3</ItemCaption>
    </ListItem>
  </ListContainer>
)

export default Team

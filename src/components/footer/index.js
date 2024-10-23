import React from 'react'
import { Container, Item, FooterText, Icon } from './styled'
import instagramIcon from '../../assets/images/icons/instagram.png'
import tiktokIcon from '../../assets/images/icons/tiktok.png'
import xIcon from '../../assets/images/icons/x.png'
import twitchIcon from '../../assets/images/icons/twitch.png'

const Footer = () => (
    <>
        <Container>
            <Item href='https://www.instagram.com/epiclootsoftware/'>
                Instagram
                <Icon src={instagramIcon} alt="Instagram Icon" />
            </Item>
            <Item href='https://www.tiktok.com/@epiclootsoftware'>
                Tiktok
                <Icon src={tiktokIcon} alt="Tiktok Icon" />
            </Item>
            <Item href='https://x.com/EpicLootGame'>
                X (Antigo Twitter)
                <Icon src={xIcon} alt="X Icon" />
            </Item>
            <Item href='https://www.twitch.tv/epiclootsoftware'>
                Twitch
                <Icon src={twitchIcon} alt="Twitch Icon" />
            </Item>
        </Container>
        <FooterText>epiclootsoftware© 2024   -   TODOS OS DIREITOS RESERVADOS</FooterText>
    </>
)

export default Footer

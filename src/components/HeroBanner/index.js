import React from 'react';
import { Hero, Image, HeroContainer, HeroText } from './styled'
import heroImg from '../../assets/images/hero/hero.jpg'

const HeroBanner = () => (

    <Hero>
        <Image style={{ backgroundImage:`url(${heroImg})` }}>
            <HeroContainer>
                <HeroText>
                    In a world where shadows whisper secrets and the blood moon rises, the line between hero and monster blurs, revealing the true darkness that lurks within every soul.
                </HeroText>
            </HeroContainer>
        </Image>
    </Hero>
)

export default HeroBanner
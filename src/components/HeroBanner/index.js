import React from 'react';
import { Hero, Image } from './styled'
import heroImg from '../../assets/images/hero/hero.jpg'

const HeroBanner = () => (

    <Hero>
        <Image style={{ backgroundImage:`url(${heroImg})` }}>
        </Image>
    </Hero>
)

export default HeroBanner
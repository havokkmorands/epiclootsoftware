import React from 'react';
import { FixedContainer, ScrollableContent } from './styled'

const Container = ({ children }) => (

    <FixedContainer>
        <ScrollableContent>
            {children}
        </ScrollableContent>
    </FixedContainer>

)

export default Container
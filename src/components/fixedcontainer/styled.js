import styled from 'styled-components'

export const FixedContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    overflow: hidden;
`

export const ScrollableContent = styled.div`
    height: 100%;
    overflow-y: auto;
    box-sizing: border-box;

`
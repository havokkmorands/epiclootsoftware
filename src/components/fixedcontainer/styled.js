import styled from 'styled-components'

export const FixedContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(1, 27, 14, 0.9);
    overflow: hidden;
`

export const ScrollableContent = styled.div`
    height: 100%;
    overflow-y: auto;
    box-sizing: border-box;

`
import styled from 'styled-components'

export const Container = styled.div`
    background-color: var(--white);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 21.875rem;
    height: 21.875rem;
    margin: 2rem auto;

`

export const GameSquare = styled.span`
    background: var(--white);
    color: var(--black);
    width: calc(100%/3);
    height: calc(100% /3);
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 1.87rem;
    border: 0.01rem ridge #c6c6c6;

    &:hover{
        background: var(--gray);
        cursor: pointer;
        transition: var(--transition);
    }
`

export const WinnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:button{

    }
`

export const Winner = styled.p`
    font-size: 1.6rem;
    margin-top: 1rem;
`

export const Button = styled.button`
    width: 100%;
    height: 2rem;
    cursor: pointer;
`
import {createGlobalStyle} from 'styled-components'
import media from 'styled-media-query'
import Variables from './Variables'

export const GlobalStyles = createGlobalStyle`
    ${Variables}; 

    *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    box-sizing: inherit;
    width: 100%;
  }
  body {
    margin: 0 auto;
    font-family: var(--font-main);
    background-color: var(--black);
    color: var(--white);
    max-width: var(--max-width);
    max-height: var(--max-height);

    ${media.lessThan('large')`
        font-size: 0.75rem;
    `}
  }
`
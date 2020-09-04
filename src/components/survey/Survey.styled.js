import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
`

export const Heading3 = styled.h3`
    text-align: center;
    color: var(--clr-grey-5);
    margin-bottom: 4rem;
`

export const Heading4 = styled.h4`
    margin-bottom: 0;
`

export const ListContainer = styled.ul`
    margin-top: 2rem;
    display: grid;
    gap: 2rem;
    grid-gap: 2rem;
    @media (min-width: 992px) {
    & {
        grid-template-columns: 1fr 1fr;
    }
    }
    @media (min-width: 1200px) {
    & {
        grid-template-columns: 1fr 1fr 1fr;
    }
    }
`

export const List = styled.li`
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    padding: 0.75rem 1rem;
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 0 3rem;
    grid-gap: 0 3rem;
    align-items: center;
`

export const Key = styled.div`
    color: var(--clr-white);
    font-size: 1.5rem;
    background: var(--clr-primary-7);
    padding: 0.5rem 1rem;
    border-radius: var(--radius);
`
export const Paragraph = styled.p`
    margin-bottom: 0;
    color: var(--clr-grey-5);
    letter-spacing: var(--spacing);
`

export const Button = styled.button`
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    cursor: pointer;
    color: var(--clr-black);
`
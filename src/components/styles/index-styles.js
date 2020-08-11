import { createGlobalStyle } from 'styled-components';

const indexStyles = createGlobalStyle`
.stack {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    align-self: flex-start;
    @media(min-width: 768px) {
        width: 30.33333%;
    }
    h3 {
    margin-bottom: 0;
    }
    &__header {
        min-height: 125px;
    }
    .header-intro {
        font-size: 1.55rem;
        color: rgba(47,47,79,0.8);
        font-weight: 200;
    }
}
.principle-heading {
    position: sticky;
    margin-top: 30px;
    top: 25px;    
}
.row--stack-md {
    flex-direction: column;
    @media(min-width: 992px) {
        flex-direction: row;
    }
}
.align-items-start {
    display: flex;
    align-items: flex-start;
}
.col-8-full-md {
    flex: 1 0 100%;
    max-width: 100%;
    @media(min-width: 992px) {
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
    }
}
`

export default indexStyles;
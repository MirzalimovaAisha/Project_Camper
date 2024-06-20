import styled from "styled-components";

export const FooterContainer = styled.div`
    background: var(--blue, #006DAB);
    color: #FFF;
    margin-top: 80px;
    padding: 63px 0px 122px 0px;
    display: flex;
    justify-content: center;
    gap: 220px;
    @media only screen and (max-width: 1245px){
        align-items:center;
        gap: 0;
        justify-content: space-around;
    } 
`
export const FooterLogo = styled.div`
    color: #FFF;
    font-size: 40px;
    font-weight: 700;
`
export const FooterItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    @media only screen and (max-width: 1245px){
        display: ${(props)=> props.$social ? "" : "none"};
    } 
`
export const FooterItemTitle = styled.div`
    font-size: 20px;
    font-weight: 600;
    @media only screen and (max-width: 1245px){
            display: none;
        } 
`
export const FooterItemTexts = styled.div`
    font-size: 14px;
    display: flex;
    flex-direction: column;
    gap: 9px;

    
`

export const FooterText = styled.div`
    @media only screen and (max-width: 1245px){
        display: none;
    } 
`
export const FooterContactIcons = styled.div`
    display: flex;
    gap: 11px;
    align-items: center;

    @media only screen and (max-width: 1245px){
        display: flex;
    } 
`
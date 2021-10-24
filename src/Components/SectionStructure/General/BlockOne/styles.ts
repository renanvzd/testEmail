import styled from "styled-components";

export const FadeInLeftText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 58vh;
    h1{
        font-weight: 400;
        margin-top:90px;
        text-align: center;
        position:relative; 
        z-index:-1;
    }
    @media (min-width:200px) and (max-width:1024px){
        height: 99vh;
        h1 {
        -webkit-animation-name: fadeInLeft;
        animation-name: fadeInLeft;
        -webkit-animation-duration: 1s;
        animation-duration: 1.5s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
}
    @-webkit-keyframes fadeInLeft {
        0% {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
}
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
}
}
    @keyframes fadeInLeft {
        0% {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
}
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }
} 
    }
    h1 {
        -webkit-animation-name: fadeInLeft;
        animation-name: fadeInLeft;
        -webkit-animation-duration: 1s;
        animation-duration: 1.5s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
}
    @-webkit-keyframes fadeInLeft {
        0% {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
}
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
}
}
    @keyframes fadeInLeft {
        0% {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
}
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }
} 
`
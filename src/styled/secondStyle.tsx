import styled from 'styled-components';
import nanniIllu from '../images/nanniIllu.png';
import {borderAnimation} from '../styled/mainStyle'

export const SecondWrap = styled.div`
    height : 100vh;
    width : 100vw;
    background-color : #081237;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`;

export const NanniChartWrap = styled.div`
    width : 800px;
    display: flex;
    justify-content: space-between;
    transition : 0.5s;
    @media (max-width: 900px) {
        width : 80%;
        height : 430px;
        flex-direction : column;
        justify-content: space-between;
        align-items : center;
    }
    @media (max-width : 500px) {
        height : 380px;
    }
    > #nanniBorder{
        width : 215px;
        height : 215px;
        background-color : red;
        display : flex;
        justify-content : center;
        align-items : center;
        border-radius : 250px;
        background: linear-gradient(45deg,#1448FF, #C214FF, red);
        animation: ${borderAnimation} 5s ease infinite;
        background-size: 200% 100%;
        @media (max-width: 500px) {
            width : 165px;
            height : 165px;
        }
        > #nanniImg{
        width : 200px;
        height : 200px;
        background-color : white;
        border-radius : 200px;
        background-image : url(${nanniIllu});
        @media (max-width: 500px) {
            width : 150px;
            height : 150px;
            background-size : 150px;
        }
    }
    }
    > #nanniChartWrap{
        width : 580px;
        height : 200px;
        @media (max-width: 900px) {
            width : 100%;
        }
    }
`;

export const NanniInteractionWrap = styled.div`
    height : 100px;
    width : 800px;
    display : flex;
    transition : 0.5s;
    align-items : center;
    justify-content: space-between;
    @media (max-width: 900px) {
        width : 80%;
    }
    > div {
        width : 200px;
        height : 40px;
        background-color : white;
        border-radius : 5px;
        line-height : 40px;
        font-size : 14px;
        color : #0E1C50;
        cursor : pointer;
        > a {
            text-decoration : none;
            color : #0E1C50;
            display : block;
        }
        @media (max-width: 900px) {
            width : 30%;
        }
        @media (max-width: 500px) {
            height : 30px;
            line-height : 30px;
            font-size : 12px;
        }
    }
`;

export const ChartWrap = styled.div`
    display : flex;
    align-items : center;
    
`;

export const ChartLabelWrap = styled.div`
    width : 100px;
    height : 200px;
    margin-top : 0;
    display : flex;
    flex-direction : column;
    justify-content: space-evenly;
    color : white;
    > span {
        text-align : right;
        height : 30px;
        padding-right : 20px;
        line-height : 30px;
        font-size : 13px;
        display : block;
    }
`;

export const ChartBox = styled.div`
    width : 100%;
    height : 200px;
    display : flex;
    flex-direction : column;
    justify-content: space-evenly;
    border : 1px solid #fff;
    box-sizing: border-box;
    border-radius : 10px;
    > div {
        height : 30px;
        @media (max-width: 500px) {
            height : 20px;
        }
    }
    > div:nth-child(1){
        width : 70%;
        background-color : #4A4372;
    }
    > div:nth-child(2){
        width : 70%;
        background-color : #545397;
    }
    > div:nth-child(3){
        width : 50%;
        background-color : #7472D0
    }
`;
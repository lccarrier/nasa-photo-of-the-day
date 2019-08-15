import React, { useEffect, useState } from "react";
import axios from "axios";
import { Image } from "./Image.js";
import styled from 'styled-components';
import GlobalStyle from './Global.js';


const StyledContainer = styled.div`
    height: 100vh;
    width: 100%;
    background-color: rgba(22, 22, 26, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    }
`

const StyledPage = styled.div`
    background-color: rgba(31,32,38,1);
    width: 50%;
    padding: 40px 25px 25px 25px;
    margin: 0 auto;
    border-radius: 5px;
    display: flex;
}
`

const StyledH = styled.h1`
    color: #f7f8f8;
    font-size: 34px;
    line-height: 40px;
    font-family: system-ui;
    font-weight: 900;
    padding-left: 25px;
    margin-bottom: 15px;
`

const StyledP = styled.p`
    color: #dadfe7;
    font-family: system-ui;
    font-size: 20px;
    line-height: 32px;
    -webkit-font-smoothing: antialiased;
    padding-left: 25px;
    margin-bottom: 25px;
`

const StyledCopy = styled.p`
    font-weight: 600;
    color: #4551b5;
    font-family: system-ui;
    font-size: 18px;
    padding-left: 25px;
    font-style: italic;
    margin-bottom: 20px;
`

const StyledDate = styled.p`
    font-weight: 600;
    color: #4551b5;
    font-family: system-ui;
    padding-left: 25px;
    margin-bottom: 20px;
    font-size: 16px;
    font-style: italic;
`

const StyledImg = styled.img`
    height: 100
`

const Subtitle = styled.div`
    display: flex;
`


const StyledNext = styled.div`

`


function Nasa() {

    const [title, setTitle] = useState([]);
    const [photo, setPhoto] = useState([]);
    const [date, setDate] = useState([]);
    const [explain, setExplain] = useState([]);
    const [copyright, setCopyright] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=ICLzHW9yb3MGATQd9zYxOun8OmsxIJVxyejtDhQE`)
            .then(response => {
                setTitle(response.data.title);
                setDate(response.data.date);
                setPhoto(response.data.hdurl);
                setExplain(response.data.explanation);
                setCopyright(response.data.copyright);
                console.log(response.data);
            })

            .catch(
                err => console.log(err)
            )
    }, [])

    return (
    <StyledContainer>
      <StyledPage>
      <img src={photo} style={{ width: "320px", height: "320px", }} />
            <div>
                <StyledH>{title}</StyledH>
            
                <Subtitle>
                    <StyledCopy>by <u>{copyright}</u>, {date}</StyledCopy>
                </Subtitle>

                <StyledP>{explain}</StyledP>
                
            </div>
      </StyledPage>
      
    </StyledContainer>
    )
};

export default Nasa;


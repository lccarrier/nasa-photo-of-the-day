import React, { useEffect, useState } from "react";
import axios from "axios";
import { Image } from "./Image.js";

function Nasa() {

    const [title, setTitle] = useState([]);
    const [photo, setPhoto] = useState([]);
    const [date, setDate] = useState([]);
    const [explain, setExplain] = useState([]);
    const [copyright, setCopyright] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
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
      <div>
            <h1>{title}</h1>
            <p>{date}</p>
                <div>
                   <img src={photo} />
                </div>
            <p>{explain}</p>
            <p>{copyright}</p>
      </div>
    )
};

export default Nasa;


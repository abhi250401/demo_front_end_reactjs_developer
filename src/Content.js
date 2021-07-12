import { Container } from "@material-ui/core";
import React from "react";
import Card from "./Card/Card";

import "./Content.css"

import { useEffect, useState } from 'react';
const apiKey = '39f6e0d1f17f4b7c986923d9c15ef175';




function createEntry(emojiTerm) {

    return (
        <Card
            key={emojiTerm.author}
            imag={emojiTerm.urlToImage}
            fullname={emojiTerm.title}
            description1={emojiTerm.content}
            fulltime={emojiTerm.time}
            url1={emojiTerm.url}
        />
    );
}

function Content() {

    const [data, setData] = useState([]);

    const getData = async () => {
        const res = await fetch(`https://newsapi.org/v2/everything?q=Apple&from=2021-07-11&sortBy=popularity&apiKey=${apiKey}`)

        const result = await res.json();
        console.log('result', result);
        setData(result)

    }
    useEffect(() => {
        getData();

    },
        [])


    return (
        <Container maxWidth="md">

            <div className="content">
                <dl className="dictionary">{data?.articles?.map(createEntry)}</dl>
            </div>


        </Container>
    )
};
export default Content;
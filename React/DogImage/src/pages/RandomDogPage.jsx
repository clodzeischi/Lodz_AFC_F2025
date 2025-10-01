import axios from "axios";
import {useState} from "react";
import {useEffect} from "react";

const RandomDogPage = () => {

    const [imgSource, setImgSource] = useState("");
    const baseURL = 'https://dog.ceo/api'
    const randomDogRoute = 'breeds/image/random'
    const endPoint = `${baseURL}/${randomDogRoute}`;

    useEffect(() => {
        getURL(endPoint);
    }, [])

    const getRandomDog = (e) => {
        e.preventDefault();

        getURL(endPoint);
    }

    const getURL = (link) => {
        axios.get(link)
            .then(response => {
                setImgSource(response.data.message)
            })
            .catch(e => console.error(e))
            .finally();
    }

    return (
        <>
            <h1>Random dog page</h1>
            <button onClick={getRandomDog}>Get random dog</button>
            <img src={imgSource} alt='Random dog image' />
        </>
    )
}

export default RandomDogPage;
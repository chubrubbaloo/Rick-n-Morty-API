import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {Characters} from "./components/Characters";
import {Logo} from "./components/Logo";
import {Pagination} from "./components/Pagination";

function App() {

    const [characters, setCharacters] = useState([]);
    const [currentPageUrl, setCurrentPageUrl] = useState('https://rickandmortyapi.com/api/character')
    const [nextPageUrl, setNextPageUrl] = useState()
    const [prevPageUrl, setPrevPageUrl] = useState()
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(true)

        axios.get(currentPageUrl).then(res => {
            setLoading(false)
            setCharacters(res.data.results)
        })
    }, [currentPageUrl])

    if (loading) return <h2 style={{textAlign: "center", fontSize:"100px"}}>Loading...</h2>


    return (
        <div className="App">
            <Logo/>
            <Characters characters={characters}/>
        </div>
    );
}

export default App;

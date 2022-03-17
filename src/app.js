import MainPage from "./components/mainpage";
import Flashcard from "./components/flashcard"
import {useState} from "react"



export default function App() {
    const [visible, setVisible] = useState(false);
    return (
        <>
        {visible === false ? <MainPage setVisible={setVisible}/> : <Flashcard />}
        </>
    )
}
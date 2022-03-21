import setinha from "./../assets/setinha.png";
import errou from "./../assets/errou.png";
import quaseerrou from "./../assets/quaseerrou.png";
import acertou from "./../assets/acertou.png";
import seta from "./../assets/seta.png";
import {useState} from "react";

export default function Card({questionNumber, question, answer, setCount, count}){
    const [step, setStep] = useState("start-page")
    const [color, setColor] = useState("none");
    const [sucess, setSucess] = useState(false);
    const [icon, setIcon] = useState(seta);


    function colorChangeGreen(){
        setColor("green")
        setStep("start-page")
        setIcon(acertou)
        setCount(1)
    }
    function colorChangeOrange(){
        setColor("orange")
        setStep("start-page")
        setIcon(quaseerrou)
        setCount(1)  
    }
    function colorChangeRed(){
        setColor("red")
        setStep("start-page")
        setIcon(errou)
        setCount(1)  
    }



    if(step === "start-page") {
    return (
        <div className="all-cards">
            <div className="card">
            <p className={color}>{questionNumber}</p>
            <img src={icon} onClick={() => setStep("front-page")}/>
            </div>
        </div>
    )
   }

    else if (step === "front-page") {
        return (
            <div className="front-page">
            <p className="question">{question}</p>
            <img src={setinha} className="arrow" onClick={() => setStep("back-page")}/>
            </div>
        )
    }

    else if (step === "back-page") {
        return (
            <div className="back-page">
            <p className="answer">{answer}</p>
            <div className="buttons">
            <button className="red-button" onClick={colorChangeRed}>Não lembrei</button>
            <button className="orange-button" onClick={colorChangeOrange}>Quase não lembrei</button>
            <button className="green-button" onClick={colorChangeGreen}>Zap!</button>
            </div>
            </div>
        )
    }

}


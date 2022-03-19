import setinha from "./../assets/setinha.png"

import {useState} from "react"

export default function Card({questionNumber, question, answer}){
    const [step, setStep] = useState("start-page")

    if(step === "start-page") {
    return (
        <div className="all-cards">
            <div className="card">
            <p className="question-number">{questionNumber}</p>
            <ion-icon name="play-outline" onClick={() => setStep("front-page")}></ion-icon>
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
            <button className="red-button">Não lembrei</button>
            <button className="orange-button">Quase não lembrei</button>
            <button className="green-button">Zap!</button>
            </div>
            </div>
        )
    }

}


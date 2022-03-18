import {useState} from "react"


export default function Card({questionNumber, question, answer}){
    const [step, setStep] = useState("start-page")

    if(step === "start-page") {
    return (
        <div className="all-cards">
            <div className="card">
            <p>Pergunta {questionNumber}</p>
            <ion-icon name="play-outline" onClick={() => setStep("front-page")}></ion-icon>
            </div>
        </div>
    )
   }

    else if (step === "front-page") {
        return (
            <div className="front-page">
            <p>{question}</p>
            <img className="./assets/setinha.png" onClick={() => setStep("back-face")}/>
            </div>
        )
    }

    else if (step === "back-face") {
        return (
            <div className="all-cards">
            <p>{answer}</p>
            </div>
        )
    }

}


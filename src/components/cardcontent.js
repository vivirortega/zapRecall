import {useState} from "react";
import Card from "./card";
import Footer from "./footer";

export default function DeckContent() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState("start-page")
  const [sucess, setSucess] = useState(true);
     
  const text = [{
        questionNumber: "Pergunta 1",
        question: "O que é JSX?",
        answer: "O JSX é uma extensão de sintaxe para JavaScript, que pode lembrar uma linguagem de template, mas que vem com todo o poder do JavaScript.",
      },
      { 
        questionNumber: "Pergunta 2",
        question: "O React é __",
        answer: "Uma biblioteca JavaScript para construção de interfaces.",
       
      },
      {
        questionNumber: "Pergunta 3",
        question: "Componentes devem iniciar com __",
        answer: "Letra maiúscula.",
      
      },
      {
        questionNumber: "Pergunta 4",
        question: "Podemos colocar __ dentro do JSX ",
        answer: "Expressões.",
      
      },
      {
        questionNumber: "Pergunta 5",
        question: "O ReactDOM nos ajuda __ ",
        answer: "Interagindo com a DOM para colocar componentes React na mesma.",
      },
      { 
        questionNumber: "Pergunta 6",
        question: "Usamos o npm para __",
        answer: "Gerenciar os pacotes necessários e suas dependências.",
        
      },
      { questionNumber: "Pergunta 7",
        question: "Usamos props para __",
        answer: "Passar diferentes informações para componentes.",
       
      },
      { questionNumber: "Pergunta 8",
        question: "Usamos estado (state) para __",
        answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente.",   
      }];

      return (
        <div>
        {text.map(content => <Card questionNumber={content.questionNumber} question={content.question} answer={content.answer} count={count} setCount={setCount} setStep={setStep} step={step} setSucess={setSucess}/>)}
        <div>
        <Footer count={count} setCount={setCount} setStep={setStep} step={step} setSucess={setSucess} sucess={sucess}/>        
        </div>
        </div>  
      )
}
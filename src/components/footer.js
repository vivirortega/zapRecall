import party from "./../assets/party.png";
import sad from "./../assets/party.png"

export default function Footer({count, sucess}) {

    function retry(){
        document.location.reload(true);
    }

    if (count <= 7) {
    return (
        <footer className="footer">
            <p>{count}/8 CONCLUÍDOS</p>
        </footer>
    )
    }

    if (count === 8 && sucess === true) {
        return (
            <footer className="footer-result">
            <img src={party} className="icon-result"/>
            <p className="result">PARABÉNS!</p>
            <p>Você não esqueceu de nenhum flashcard!</p>
           </footer>   
        )
    }

    if (count === 8 && sucess === false) {
        return (
            <footer className="footer-result">
            <img src={sad} className="icon-result"/>
            <p className="result">PUTZ!</p>
            <p>Ainda faltaram alguns...Mas não desanime!</p>
            <button onClick={retry} className="retry">Reiniciar Recall</button>
           </footer>   
        )
    }

    
}
export default function MainPage({setVisible}) {
     return (
        <main>
            <img src="./assets/logo.png"/>
            <h1 className="big-title">ZapRecall</h1>
            <button className="init-button" onClick={() => setVisible(true)}>Iniciar Recall!</button>
        </main>
    )
}
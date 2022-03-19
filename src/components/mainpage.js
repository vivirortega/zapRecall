import logogrande from "./../assets/logo.png"

export default function MainPage({setVisible}) {
     return (
        <main>
            <img src={logogrande} alt="logo-zapcall"/>
            <h1 className="big-title">ZapRecall</h1>
            <button className="init-button" onClick={() => setVisible(true)}>Iniciar Recall!</button>
        </main>
    )
}
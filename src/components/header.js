import logopequeno from "./../assets/logo-pequeno.png"

export default function Header() {
    return (
        <header className="header">
             <img className="small-logo" src={logopequeno}/>
             <h2 className="sub-title">ZapRecall</h2>
        </header>
    )
}
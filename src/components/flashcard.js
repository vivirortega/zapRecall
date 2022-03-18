import Card from "./card";
import Footer from "./footer";
import Header from "./header"

export default function Flashcard() {
    return (
    <main>
        <div className="flash-cardscreen">
        <Header />
        <Card />
        <Footer />
        </div>
    </main>
    )
}
import Card from "./card";
import Footer from "./footer";
import Header from "./header"
import DeckContent from "./cardcontent";

export default function Flashcard() {
    return (
    <main>
        <div className="flash-cardscreen">
        <Header />
        <DeckContent />
        <Footer />
        </div>
    </main>
    )
}
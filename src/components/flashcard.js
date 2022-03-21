import Header from "./header"
import DeckContent from "./cardcontent";

export default function Flashcard() {
    return (
    <main>
        <div className="flash-cardscreen">
        <Header />
        <DeckContent />
        </div>
    </main>
    )
}
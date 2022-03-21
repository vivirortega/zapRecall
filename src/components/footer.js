import {useState} from "react";

export default function Footer({count}) {
    //const [sucess, setSucess] = useState(true);

    return (
        <footer className="footer">
            <p>{count}/8 CONCLUÍDOS</p>
        </footer>
    )
}
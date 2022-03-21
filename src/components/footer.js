import {useState} from "react";

export default function Footer({count}) {
    return (
        <footer className="footer">
            <p>{count}/8 CONCLUÍDOS</p>
        </footer>
    )
}
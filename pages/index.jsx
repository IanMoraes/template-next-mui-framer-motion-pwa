import { Button } from "@mui/material";
import React from "react";
import Link from "../components/Link";
const Index = () => {
    return (
        <>
            <h1>Meu efeito de paralaxe</h1>
            <p>Este é o meu conteúdo animado.</p>
            <Link href="/pokes">
                <Button>oi</Button>
            </Link>
            <Link href="/poksdsdes">
                <Button>fake</Button>
            </Link>
        </>
    );
};

export default Index;

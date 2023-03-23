import React from "react";
import { Controller, Scene } from "react-scrollmagic";

const Index = () => {
    return (
        <Controller>
            <Scene duration="200%" triggerHook="onEnter">
                {(progress) => (
                    <div
                        className="parallax"
                        style={{
                            transform: `translateY(${progress * -50}%)`,
                        }}
                    >
                        <h1>Meu efeito de paralaxe</h1>
                        <p>Este é o meu conteúdo animado.</p>
                    </div>
                )}
            </Scene>
        </Controller>
    );
};

export default Index;

import React, { useState, useEffect } from "react";
import "./styles.css"; // Importando o arquivo CSS para estilos

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [name, setName] = useState(""); // Nova variável de estado para armazenar o nome

  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Não",
      "Tem certeza?",
      "E se eu perguntar de novo?",
      "Serio msm ?",
      "Tem certezaaa ???? ",
      "Absoluta mesmo ?",
      "???????",
      ":*(",
      "Eu vou me matar",
      "Me matei",
      "💀",
      ".....",
      ":((((",
      "...",
      "Estou morto",
      "Não :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  useEffect(() => {
    if (yesPressed) {
      // Adicione a lógica aqui para animar os corações (neste exemplo, animação CSS)
      const hearts = document.querySelectorAll(
        ".heart"
      ) as NodeListOf<HTMLElement>;
      hearts.forEach((heart: HTMLElement) => {
        // Gera posições aleatórias para as propriedades top, bottom, left e right
        const newPositionTop = Math.random() * window.innerHeight;
        const newPositionBottom = Math.random() * window.innerHeight;
        const newPositionLeft = Math.random() * window.innerWidth;
        const newPositionRight = Math.random() * window.innerWidth;

        // Define as novas posições dos corações
        heart.style.top = `${newPositionTop}px`;
        heart.style.bottom = `${newPositionBottom}px`;
        heart.style.left = `${newPositionLeft}px`;
        heart.style.right = `${newPositionRight}px`;

        // Adiciona a classe de animação
        heart.classList.add("animateHeart");
      });
    }
  }, [yesPressed]);

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img
            src="https://media1.tenor.com/m/c7x_8fpHl-0AAAAd/monkey.gif"
            alt=""
          />
          <div className="my-4 text-4xl font-bold">{`TE AMOOOO MUITO AMOR, ${name}!`}</div>
          {/* Renderiza os corações */}
          <div className="hearts-container">
            {[...Array(30)].map((_, index) => (
              <img
                key={index}
                src="https://media.tenor.com/zKCf50cJqe8AAAAi/love-heart.gif"
                className="heart"
                alt="Coração"
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://media1.tenor.com/m/ofN_qPVsp2UAAAAd/gjirlfriend-gifs.gif"
          />
          <h1 className="my-4 text-4xl">Você me ama? </h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Sim
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "Não" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

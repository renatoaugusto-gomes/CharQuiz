// char-quiz.js
import { quizData } from "../data/princesas.js";

document.addEventListener("DOMContentLoaded", () => {
    const titleEl = document.getElementById("quiz-title");
    const formEl = document.getElementById("quiz-form");
    const resultadoEl = document.getElementById("resultado");

    titleEl.textContent = quizData.titulo;

    // Gerar perguntas
    quizData.perguntas.forEach((pergunta, index) => {
        const fieldset = document.createElement("fieldset");
        const legend = document.createElement("legend");
        legend.textContent = `${index + 1}. ${pergunta.texto}`;
        fieldset.appendChild(legend);

        if (pergunta.imagem) {
            const img = document.createElement("img");
            img.src = pergunta.imagem;
            img.alt = "Imagem da pergunta";
            img.classList.add("pergunta-img");
            fieldset.appendChild(img);
        }


        pergunta.opcoes.forEach((opcao, idx) => {
            const label = document.createElement("label");
            const input = document.createElement("input");
            input.type = "radio";
            input.name = `pergunta-${index}`;
            input.value = idx;
            label.appendChild(input);
            label.append(` ${opcao.texto}`);
            fieldset.appendChild(label);
            fieldset.appendChild(document.createElement("br"));
        });

        formEl.appendChild(fieldset);
    });

    document.getElementById("submit-btn").addEventListener("click", () => {
        const scores = {};

        for (const personagem in quizData.personagens) {
            scores[personagem] = 0;
        }

        let todasRespondidas = true;

        quizData.perguntas.forEach((pergunta, index) => {
            const selected = document.querySelector(`input[name="pergunta-${index}"]:checked`);
            if (selected) {
                const opcao = pergunta.opcoes[parseInt(selected.value)];
                opcao.personagens.forEach(p => {
                    scores[p] += 1;
                });
            } else {
                todasRespondidas = false;
            }
        });

        if (!todasRespondidas) {
            resultadoEl.textContent = "Responda todas as perguntas para ver o resultado.";
            return;
        }

        // Encontrar o personagem com mais pontos
        const resultado = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
        // Abrir modal com personagem
        const personagem = resultado[0];
        document.getElementById("modal-nome").textContent = personagem;
        document.getElementById("modal-img").src = `princesas.img/${personagem.toLowerCase().replace(" ", "-")}.jpg`;
        document.getElementById("modal").style.display = "block";

        document.getElementById("fechar-modal").onclick = function () {
            document.getElementById("modal").style.display = "none";
        };

        window.onclick = function (event) {
            const modal = document.getElementById("modal");
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };


    });

});

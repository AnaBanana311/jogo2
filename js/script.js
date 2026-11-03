import { perguntas } from "./perguntas.js";
import { aleatorio, nome } from "./aleatorio.js";

let atual = 0;
let historiaFinal = "";

const introScreen = document.querySelector("#introScreen");
const storyScreen = document.querySelector("#storyScreen");
const startForm = document.querySelector("#startForm");
const playerNameInput = document.querySelector("#playerName");
const sceneTitle = document.querySelector("#sceneTitle");
const sceneCount = document.querySelector("#sceneCount");
const survivorNameTag = document.querySelector("#survivorNameTag");
const answerList = document.querySelector("#answerList");
const storyNote = document.querySelector("#storyNote");

function mostraPergunta() {
  const pergunta = perguntas[atual];
  const pausa = pergunta.pausa === true;

  sceneTitle.textContent = pergunta.enunciado;
  sceneCount.textContent = pausa ? "CONTINUIDADE" : "HISTÓRIA EM ANDAMENTO";
  answerList.replaceChildren();
  answerList.hidden = pausa;
  storyNote.hidden = !pausa;

  if (pausa) {
    storyNote.textContent = "Este é um ponto de continuidade da história.";
  }

  pergunta.alternativas.forEach((opcao, indice) => {
    const botao = document.createElement("button");
    botao.className = "answer-button";
    botao.type = "button";
    botao.disabled = opcao.disponivel === false;
    botao.innerHTML = `<span class="answer-text"></span><span class="answer-arrow" aria-hidden="true">↗</span>`;
    botao.querySelector(".answer-text").textContent = opcao.texto;

    if (!botao.disabled) {
      botao.addEventListener("click", () => respostaSelecionada(opcao));
    }

    answerList.append(botao);
  });
}

function respostaSelecionada(opcaoSelecionada) {
  if (opcaoSelecionada.disponivel === false || opcaoSelecionada.proxima === undefined) {
    return;
  }

  const afirmacao = aleatorio(opcaoSelecionada.afirmacao);
  historiaFinal += afirmacao + " ";
  atual = opcaoSelecionada.proxima;
  mostraPergunta();
}

function iniciaJogo() {
  atual = 0;
  historiaFinal = "";
  const participante = nome(playerNameInput.value);
  playerNameInput.value = participante;
  survivorNameTag.textContent = `SOBREVIVENTE: ${participante}`;
  introScreen.hidden = true;
  storyScreen.hidden = false;
  mostraPergunta();
}

startForm.addEventListener("submit", (evento) => {
  evento.preventDefault();
  iniciaJogo();
});
import "./style.css";

document.title = "Oops ..."
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="center">
    <img src="./maintenance.svg">
    <h1>Estamos em Manutenção</h1>
    <p>Desculpe pelo inconveniente, mas nosso site está passando por manutenção.</p>
    <p>Estamos trabalhando para voltar logo.</p>
    <p>Por favor, volte mais tarde.</p>
  </div>
`;

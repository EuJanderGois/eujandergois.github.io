import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="center">
    <img src="./maintenance.svg">
    <h1>Estamos em Manutenção</h1>
    <p>Desculpe pelo inconveniente, mas nosso site está passando por manutenção.</p>
    <p>Estamos trabalhando duro para melhorar sua experiência.</p>
    <p>Por favor, volte mais tarde.</p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

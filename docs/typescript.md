[back](../README.md)

# Como Adicionar TypeScript a um Projeto

Nesta seção você verá:
- [Como Adicionar TypeScript a um Projeto](#como-adicionar-typescript-a-um-projeto)
  - [Instale o Node.js](#instale-o-nodejs)
  - [Inicie um projeto Node.js](#inicie-um-projeto-nodejs)
  - [Instale o TypeScript](#instale-o-typescript)
  - [Crie um arquivo de configuração TypeScript](#crie-um-arquivo-de-configuração-typescript)
  - [Escreva código TypeScript](#escreva-código-typescript)
  - [Compile seu código TypeScript](#compile-seu-código-typescript)
  - [Execute seu código JavaScript](#execute-seu-código-javascript)
  - [Usando o TypeScript com o modo de observação (watch)](#usando-o-typescript-com-o-modo-de-observação-watch)

Adicionar TypeScript a um projeto é uma ótima maneira de melhorar a qualidade e a segurança do seu código JavaScript, fornecendo recursos de tipagem estática. Para fazer isso, siga os passos abaixo:

## Instale o Node.js

Para usar TypeScript, você precisará do Node.js instalado em seu sistema. Você pode baixar e instalar a versão mais recente do Node.js em [https://nodejs.org/](https://nodejs.org/).

## Inicie um projeto Node.js

Se você não tiver um projeto Node.js existente, crie um diretório para o seu projeto e execute o seguinte comando para iniciar um novo projeto Node.js:

```bash
mkdir meu-projeto
cd meu-projeto
npm init -y
```

Isso criará um arquivo package.json básico para o seu projeto.

## Instale o TypeScript

Agora você precisa instalar o TypeScript como uma dependência de desenvolvimento em seu projeto. Execute o seguinte comando:

```bash
npm install typescript --save-dev
```

Isso adicionará o TypeScript como uma dependência no seu `package.json` e o instalará localmente no diretório `node_modules`.

## Crie um arquivo de configuração TypeScript

Para configurar o TypeScript para o seu projeto, você precisará criar um arquivo de configuração. Você pode fazer isso manualmente criando um arquivo `tsconfig.json` na raiz do seu projeto ou executando o seguinte comando para gerar um arquivo de configuração inicial:

```bash
npx tsc --init
```

O arquivo `tsconfig.json` gerado contém várias opções de configuração que você pode personalizar de acordo com as necessidades do seu projeto.

## Escreva código TypeScript

Agora você está pronto para começar a escrever código TypeScript. Crie arquivos com a extensão `.ts` e escreva seu código com tipos estáticos. Por exemplo:

```TypeScript
// meu-arquivo.ts
function saudacao(nome: string) {
  return `Olá, ${nome}!`;
}

console.log(saudacao("Usuário"));
```

## Compile seu código TypeScript
Antes de executar seu código TypeScript em um navegador ou ambiente Node.js, você precisa compilá-lo em JavaScript. Execute o seguinte comando para fazer isso:

```bash
npx tsc
```

Isso irá compilar todos os arquivos TypeScript no seu projeto em JavaScript e colocá-los em um diretório chamado `dist` por padrão.

## Execute seu código JavaScript

Agora você pode executar seu código JavaScript gerado da maneira que preferir, seja em um navegador ou no ambiente Node.js.

Isso é tudo! Você adicionou com sucesso o TypeScript ao seu projeto e está pronto para começar a aproveitar os benefícios da tipagem estática e das ferramentas de desenvolvimento avançadas que o TypeScript oferece. Certifique-se de ler a documentação do TypeScript e personalizar sua configuração `tsconfig.json` conforme necessário para atender às especificações do seu projeto.

## Usando o TypeScript com o modo de observação (watch)

O modo de observação do TypeScript, também conhecido como `tsc --watch`, permite que você automatize o processo de compilação enquanto trabalha em seu código TypeScript. Isso é particularmente útil para evitar a necessidade de compilar manualmente a cada alteração.

Para usar o `tsc --watch`, abra um terminal na pasta raiz do seu projeto onde está localizado o arquivo `tsconfig.json`. Execute o seguinte comando:
   ```
   npx tsc --watch
   ```
O TypeScript agora estará assistindo a todos os arquivos TypeScript no seu projeto e automaticamente recompilará o código sempre que houver uma alteração em qualquer um desses arquivos.

Após a execução desse comando, você pode continuar trabalhando no seu código TypeScript. Quando você salvar suas alterações, o TypeScript detectará as mudanças e recompilará automaticamente o código para JavaScript. Isso economiza tempo e ajuda a manter seu código JavaScript sempre atualizado.

Lembre-se de manter o terminal com o modo de observação em execução enquanto estiver desenvolvendo para que as compilações automáticas ocorram conforme necessário.

Com esse novo passo, você aprendeu como usar o `tsc --watch` para automatizar a compilação do TypeScript e tornar seu fluxo de trabalho de desenvolvimento mais eficiente.

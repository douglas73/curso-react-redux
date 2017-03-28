** Adicionando o preset do React no webpack

Neste exemplo:


*Vamos adicionar o preset do React para começar usar o react
*Com o webpack parado, vamos instalar a seguinte dependencia (react)
> npm i --save-dev react@15.4.2

*Vamos testar se o webpack agora vai conseguir interpretar a sintaxe do react.
*Iniciamos novamente o webpack

*Com o webpack rodando, modificamos o index.js,  importando (que agora funciona)
react com a sintaxe:  import 'react'

*alteramos o index.js e colocamos o seguinte conteúdo:
`
import 'react'

export default  props => (
    <h1>Ola mundo!</h1>
)

console.log('Funcionou!')
`
 
*Um erro é gerado pois navegador não entende a tag html dentro de js.
*Para resolver,  entramos no webpack.config.js e colocamos o preset do react:  presets: ['react']
*e vamos instalar a dependencia com:  npm i --save-dev babel-preset-react@6.22.0
*iniciamos o webpack novamente e o erro não deve aparecer
*Agora o webpack esta configurado com o basico para o uso do react;






 

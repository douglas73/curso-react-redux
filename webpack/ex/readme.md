** Carregando CSS

Neste exemplo:


*Vamos configurar CSS em nossa pagina
*criamos um arquivo chamado estilo.css no mesmo diret�rio onde esta o index.js 
*inserimos no index.js um import para o arquivo css: import './estilo.css'
*Por�m,  ao executar script,   o browser vai reclamar que n�o conseguiu interpletar o css. erro de parse.

*Resolvendo...*

*Entramos no webpack.config.js e inserimos um plugin de extra��o de textos ExtratcTextPlugin,
( const ExtratcTextPlugin = require('extractp-text-webpack-plugin' ) ;

*Adicionamos outros plugins no scritp webpack.config.js na sess�o plugins.
`
    plugins: [
        new ExtratcTextPlugin('app.css')
    ], 
`
*Tamb�m criaremos um outro loader...
`
        {
           test: /\.css$/, 
           loader: ExtratcTextPlugin.extract("style-loader", "css-loader") 
        }
`  
*Uma vez criado o loader,  precisamos referenciar o arquivo que vai ser criado (app.css)
dentro do index.html
`
 <link rel="stylesheet" href="app.css">
` 
*No terminal e instalamos as dependencias....  npm i --save-dev extract-text-webpack-plugin@.1.0.1 style-loader@0.13.1 css-loader@0.26.1
*restartar webpack
*A esta altura, o script funcionou perfeitamente,  por�m o arquivo app.css n�o foi criado... para faze-lo execute o webpack ...  C:\DesenvolvimentoCode\curso-react-redux\webpack\node_modules\.bin\webpack (so for no windows)
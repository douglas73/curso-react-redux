** Usando ECMAScript2015 sem babel

Neste exemplo:


*Cria-se uma classe Pessoa com um construtor chamado nome;
*Cria-se um metodo toString() que retorna Pessoa NomePassadoPorReferencia;
*Cria-se uma nova instancia da classe pessoa com um nome qualquer;
*Coloca-se no log do navegador um retorno o nome passado pela classe.;
*Exclui-se o arquivo bundle.js;

 

 ** Depois...

 *Criou-se um arquivo chamado pessoa.js,  e copiamos a classe pessoa que estava no 
 arquivo index.js  alterando a primeira  linha para export default class Pessoa
 *No aquivo index.js foi feito o importe para que se pudesse acessar a classe 
 que agora esta no arquivo pessoa.js, usando do comando import Pessoa from './pessoa'


 Por�m o browser n�o reconhece o comando import, gerando o erro: Uncaught SyntaxError: Unexpected token import.

 Para resolver isso precisamos traduzir o c�digo para que o navegador suporte o c�digo na vers�o 
 antiga do js.  Por isso usamos o Babel para fazer esta tradu��o.(transpile)

 

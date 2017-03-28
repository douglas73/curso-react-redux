** Operador Spread  ( ... )

Neste exemplo:


*Criamos um objeto produto
*Vamos criar um objeto novo (clone) que vai receber um objeto e retornará um novo objeto...
*Nesta novo objeto (clone) vamos retornar o objeto passado por referencia com o operador spread ...
> O spread ira pegar cada um dos atributos e colocar dento do objeto. 


`
    function clone (objeto) {
        return { ...objeto}
    }
`
*vamos criar um novo objeto usando const novoProduto = clone(produto)
*logo em seguinda,  atribuimos ao atributo nome um valor |  novoProduto.nome = 'Caneta Biz Azul'
*Exibimos o resultado no log console.log(produto, novoProduto)

*Neste momento o navegador vai reclamar do operador ... (spread), que ele não reconhece....

  >       function clone (objeto) {
            return { ...objeto}
                     ^    ====> erro no navegador.



*Para resolver isso, vamos parar a execução do webpack para adicionar alguns configurações.
*Vamos abrir o webpack.config.js e adicionar um plugin do babel responsavel por isso
*Adicionamos a linha plugins:  ['transform-object-rest-spread'] dentro da item query de module.
*instale as dependencias:  npm i --save-dev babel-plugin-transform-object-rest-spread@6.22.0.05
*inicie o servidor novamente:    npm run dev
*repare que agora os 2 objetos serão exibidos no console.


 

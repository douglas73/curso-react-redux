    const produto = {
        nome: 'Caneta Bic Preta',
        preco: 1.90,
        desconco: 0.05
    }

    function clone (objeto) {
        return { ...objeto}
    }

    const novoProduto = clone(produto)
    novoProduto.nome = 'Caneta Biz Azul'

    console.log(produto, novoProduto)
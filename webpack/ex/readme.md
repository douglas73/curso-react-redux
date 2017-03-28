** Configurando babel

Neste exemplo:


*Adicionar uma nova configura��o em webpack.config.js;
*Adicionando module

`
    module: {
        loaders: [{
            test: /.js?$/,
            loader: 'babel-loader',
            exclude: /node_module,
            query: {
                preset: ['es2015']
            }
        }]
    }
`
    *Nota:*
    > no module,  foi especificado  na linha 14 que o babel n�o leia os aquivos de dentro da pasta node_module
    > e na linha 15 foi definido o que o loader deve interpretar. Os presets s�o tudo que ele  vai considerar, no caso,   o ecmascrip 2015  ['es2015']

*Uma vez adicionado o modulo no webpack.config.js,  � necess�rio 
colocar no package.json a referencia do babel (para que ele seja instalado) como dependencia.
*n�o esque�a de executar npm -i --save babel-core@6.22.1 babel-loader@6.2.10 babel-preset-es2015@6.22.0 para instalar as dependencias.
*quando executar (npm run dev) deve funcionar sem erros.



 

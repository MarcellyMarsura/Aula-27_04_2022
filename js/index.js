
    let listaDeFilmes = [
        'https://br.web.img3.acsta.net/pictures/14/08/11/13/34/537036.jpg',
        'https://img.elo7.com.br/product/original/39B7AE4/quadro-interestelar-a3-com-vidro-quadro-maritimo.jpg',
        'https://br.web.img3.acsta.net/pictures/210/140/21014024_20130619225537406.jpg',
        'https://ingresso-a.akamaihd.net/img/cinema/cartaz/6429-cartaz.jpg',
        'https://upload.wikimedia.org/wikipedia/pt/thumb/4/43/Butterflyeffect_poster.jpg/240px-Butterflyeffect_poster.jpg',
        'https://upload.wikimedia.org/wikipedia/pt/d/d4/Ready_Player_One_%28filme%29.png'
    ]
    
    let listaDeTitulos = [
        'Relatos Selvagens',
        'Interestelar',
        'Truque de mestre',
        'Cantando na Chuva',
        'Efeito Borboleta',
        'Jogador Nº 1'
    ]

    let catalogo = document.querySelector('#catalogo-filmes');
    let i = 0;
    let erro = document.querySelector('#erro');
    atualizarLista(0);
    function atualizarLista(numero){
        catalogo.innerHTML = '';
        for(numero; numero < listaDeFilmes.length; numero++){
            catalogo.innerHTML += `<div>
                <img src=${listaDeFilmes[numero]}>
                <p class="texto">${listaDeTitulos[numero]}</p>
            </div>
            `
            
        }
    }
    

    let filmeRepetido = true;

    function cadastrar() {
        let novoFilme = document.querySelector('#link').value;
        let novoTitulo = document.querySelector('#nome').value;

        if(listaDeFilmes.includes(novoTitulo)){
            erro.innerHTML = `Filme ${novoFilme} já cadastrado`;
        }
        else{
            listaDeFilmes.push(novoFilme);
            listaDeTitulos.push(novoTitulo);
            atualizarLista(0);
            erro.innerHTML = '';
        }
        document.querySelector('#link').value = '';
        document.querySelector('#nome').value = '';
    }

    var n = 0;
    function moverDireita() {
        n = (n + 1) % listaDeFilmes.length;
        atualizarLista(n);
    }

    function moverEsquerda(){
        if((k = (n - 1) % listaDeFilmes.length) >= 0)
        {
            n = k;
            atualizarLista(n);
        }
    }


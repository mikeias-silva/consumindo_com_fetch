/**
 * Criar api para carregar 3 paginas e alterar o conteudo, sem reload da pragina 
 * quando nao encontrado mostrar pagina de não encontrado!
 * 
 */

document.addEventListener("click", function (evento) {
    let elemento = evento.target;
    // console.log(elemento.tagName);
    if (elemento.tagName.toLowerCase() === 'a') {
        evento.preventDefault();
        loadPage(elemento)
    }

})


function loadPage(elemento) {
    const link = elemento.getAttribute('href')

    fetch(link)
        .then(res => {
            // console.log(res);
            return res.text()
        })
        .then(html => carregaPagina(html))
        .catch(error => {
            console.error("[404] - Não encontado!", error);
            carregaNaoEncontrado();
        })

}

function carregaPagina(html) {
    const div = document.querySelector('.conteudo');
    div.innerHTML = html;
}

function carregaNaoEncontrado() {
    const div = document.querySelector('.conteudo');
    fetch('./notFound.html')
        .then(response => {
            return response.text();
        })
        .then(html => div.innerHTML = html)
        .catch(error => {
            console.error(error);
        })
}
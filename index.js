// Criando os produtos que estarão no carrinho.
const productsCart = [
    {
        nome: 'Caneta',
        preco: 2.90
    },
    {
        nome: 'Impressora',
        preco: 690.00
    },
    {
        nome: 'Caderno',
        preco: 39.90
    },
    {
        nome: 'Lapis',
        preco: 1.50
    },
    {
        nome: 'Tesoura',
        preco: 4.50
    },
    {
        nome: 'Resma de Papel Chantex',
        preco: 59.00
    },
    {
        nome: 'Luminária p/ Escrivaninha',
        preco: 89.90
    }
];
const body = document.querySelector('body');

body.appendChild(document.createElement("header"));

document.querySelector('header').innerHTML = "<h1>Carrinho de compras</h1>"

body.appendChild(document.createElement("main"));

const main = document.querySelector('main');


main.appendChild(document.createElement('ul'))

const ul = document.querySelector('ul')

ul.innerHTML += `<div>
<p>Nome do Item</p>
<p>Valor</p>
</div>`

for (let i = 0; i < productsCart.length; i++) {
    ul.innerHTML += `
        <li>
        <p>${productsCart[i].nome}</p>
        <p>R$${productsCart[i].preco.toFixed(2)}</p>
        </li>
    `
}

function somaTotal(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total = array[i].preco + total
    }
    return total.toFixed(2)
}


ul.innerHTML += `<div class='total'>
<p>Total:</p>
<p>R$${somaTotal(productsCart)}</p>
</div>`

ul.innerHTML += `<button>Comprar</button>`

body.appendChild(document.createElement('footer'))
const footer = document.querySelector('footer')


footer.innerHTML += '<small>&copy; 2022 - <a href="https://github.com/Felipe-Holanda" target="_blank">Felipe Holanda</a>'
'use strict'


const apiQuote = 'https://stormy-waters-81463.herokuapp.com/api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'
const btnGenerate = document.querySelector('#btn-generate')
const quote = document.querySelector('.quote-container__quote')
const author = document.querySelector('.quote-container__author')
const loader = document.querySelector('.loader')
const btnTwitter = document.querySelector('#twitter-btn')
let quoteText = '';
let quoteAuthor = '';
console.dir(loader);

btnGenerate.addEventListener('click', ()=>{

    loader.style.display = 'block'
    document.querySelector('.quote-container').style.display = 'none'


    fetch(apiQuote)
    .then(res =>res.json() )
    .then(response => {

        quote.innerHTML = response.quoteText;
        author.innerHTML = response.quoteAuthor;
        
        document.querySelector('.quote-container').style.display = 'block'
        loader.style.display = 'none'
        
        console.log(response);

        quoteText = response.quoteText;
        quoteAuthor = response.quoteAuthor;
       

    })

    .catch(error=> console.log('error: ' + error))

    
})
console.log(quote);
btnTwitter.addEventListener('click', ()=>{

    if(quoteText == '')alert('Wait till we get your quote')
    else window.open(`https://twitter.com/intent/tweet?text=${quoteText} ${quoteAuthor}`, '_blank')
    
})
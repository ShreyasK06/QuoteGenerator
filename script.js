const quoteContainer = document.getElementById("quote-container");
const quotetext = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("whatsapp");
const newQuoteBtn = document.getElementById("new-quote");
let apiQuotes = [];

// show new quote
function newQuote() {
    const randQuote = apiQuotes[Math.round(Math.random() * apiQuotes.length)];
    if (!randQuote.author) {
        authorText.innerText = "UNKNOWN";
    } else {
        authorText.innerText = randQuote.author;
    }

    quotetext.innerText = randQuote.text;

}


// Get Quote From API
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';

    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        console.log("whoops, no quote", error);
    }

}

function tweetQuote() {
    const twitterUrl = `https:twitter.com/intent/tweet?text=${quotetext.textContent}-${authorText.textContent}`;
    window.open(twitterUrl, '_parent    ');
}

// On Load
getQuotes();
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
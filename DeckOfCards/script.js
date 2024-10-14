function getCards(){
    // Shuffle a new deck of cards 
    fullUri = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    fetch(fullUri)
    .then(res => {
        // Check respons 
        if (!res.ok) {
            throw new Error('Error, something wrong with api call');
        }
        return res.json();
    })
    .then(data =>
    {
        // Draw a card from deck with id = data.deck_id
        fullUri = `https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=2`
        fetch(fullUri)
        .then(res => {
            // Check respons 
            if (!res.ok) {
                throw new Error('Error, something wrong with api call');
            }
            return res.json();
        })
        .then(data =>
        {
            document.getElementById("card").src = data.cards[0].image // Update img src with url to card image
        })  
        .catch(err => console.log(err))
    })  
    .catch(err => console.log(err))
 } 

// Event (click) listener for button, calls the addToList function 
document.getElementById("button").addEventListener("click", getCards);

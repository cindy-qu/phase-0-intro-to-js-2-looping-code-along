// Code your solutions in this file


// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);

//     }
//     return gifts;
// }
// wrapGifts(gifts);



function writeCards(name, event) {
    let message = []
    for (let i = 0; i < name.length; i++) {

        message.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);

    }

    return message;
}

function countDown(amount) {
    let number = amount;
    while (number >= 0) {
        console.log(number--)
    }
}
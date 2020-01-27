// Code your solutions in this file
function writeCards(names_array, event_name) {
    let wishes_array = [];
    for (let i = 0; i < names_array.length; i++) {
        wishes_array.push(`Thank you, ${names_array[i]}, for the wonderful ${event_name} gift!`)    
    }
    return wishes_array;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num--);
    }
}
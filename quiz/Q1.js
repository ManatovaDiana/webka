var fruits = ['Apple','Orange','Banana','Pineapple'];

function isBanana(element) {
 return element === 'Banana';
}
const indexOfBanana = fruits.findIndex(isBanana);
console.log(indexOfBanana)

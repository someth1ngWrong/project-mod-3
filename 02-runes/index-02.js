// let runes = [
//   'ᚣ',
//   'ᛉ',
//   'ᛈ',
//   'ᚧ'
// ];
//
//  function RandomRune(runes) {
//    return runes[Math.floor(Math.random()*runes.length)];
//  }
//
//
//
// for (let i=0; i<4; i++) {
//   let p = document.createElement('p')
//   p = ()
// }


function RandomRune() {
// let rune1 = document.querySelector('#runeOne');
// let rune2 = document.querySelector('#runetwo');
// let rune3 = document.querySelector('#runeThree');
// let rune4 = document.querySelector('#runefour');
let numberOfRandom = Math.floor(Math.random() * 4) + 1;
console.log(numberOfRandom);

switch(numberOfRandom) {
    case 1 :
      console.log('ᚣ');
    break;
    case 2 :
      console.log('ᛉ');
    break;
    case 3 :
      console.log('ᛈ');
    break;
    case 4 :
      console.log('ᚧ');
    break;
    default: document.write('ошибка');
    }
    }

    RandomRune()

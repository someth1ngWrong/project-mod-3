let runes = [
  'ᚣ',
  'ᛉ',
  'ᛈ',
  'ᚧ'
];

 // function RandomRune(runes) {
 //   return runes[Math.floor(Math.random()*runes.length)];
 // }

 function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.join('');
}

let runeBoxOne = document.querySelector('.runeBoxOne')
// let word = document.createElement('p')

// word.classList.add('word')
// word = (shuffle(runes))
// runeBoxOne.append(word)
// console.log(word);

// let opasityAnim = anime({
//   targets: '.runeBoxOne',
//   opasity: 0,
//   easing: 'easeInOutQuad',
//   // autoplay: false
//   duritation: 100,
// })

let wordleft = document.querySelector('.runeBoxOne .left')
wordleft.style.transition = 'all 500ms ease'

setInterval(function () {
  wordleft.style.opacity = 1
  wordleft.innerText = shuffle(runes)
  setTimeout(function () {
    wordleft.style.opacity = 0
  }, 2500);
}, 4000);

let wordMid = document.querySelector('.runeBoxOne .mid')
wordMid.style.transition = 'all 500ms ease'

setInterval(function () {
  wordMid.style.opacity = 1
  wordMid.innerText = shuffle(runes)
  setTimeout(function () {
    wordMid.style.opacity = 0
  }, 1000);
}, 2000);

let wordRight = document.querySelector('.runeBoxOne .right')
wordRight.style.transition = 'all 500ms ease'

setInterval(function () {
  wordRight.style.opacity = 1
  wordRight.innerText = shuffle(runes)
  setTimeout(function () {
    wordRight.style.opacity = 0
  }, 1500);
}, 3000);

let wordFour = document.querySelector('.runeBoxOne .four')
wordFour.style.transition = 'all 500ms ease'

setInterval(function () {
  wordFour.style.opacity = 1
  wordFour.innerText = shuffle(runes)
  setTimeout(function () {
    wordFour.style.opacity = 0
  }, 3000);
}, 6000);

let wordFive = document.querySelector('.runeBoxOne .five')
wordFive.style.transition = 'all 500ms ease'

setInterval(function () {
  wordFive.style.opacity = 1
  wordFive.innerText = shuffle(runes)
  setTimeout(function () {
    wordFive.style.opacity = 0
  }, 1250);
}, 2500);



// -------- Right side-----------
let runeBoxThree = document.querySelector('.runeBoxThree')

let wordLeftRight = document.querySelector('.runeBoxThree .leftRight')
wordLeftRight.style.transition = 'all 500ms ease'

setInterval(function () {
  wordLeftRight.style.opacity = 1
  wordLeftRight.innerText = shuffle(runes)
  setTimeout(function () {
    wordLeftRight.style.opacity = 0
  }, 6000/2);
}, 6000);

let wordMidRight = document.querySelector('.runeBoxThree .midRight')
wordMidRight.style.transition = 'all 500ms ease'

setInterval(function () {
  wordMidRight.style.opacity = 1
  wordMidRight.innerText = shuffle(runes)
  setTimeout(function () {
    wordMidRight.style.opacity = 0
  }, 3200/2);
}, 3200);

let wordRightRight = document.querySelector('.runeBoxThree .rightRight')
wordRightRight.style.transition = 'all 500ms ease'

setInterval(function () {
  wordRightRight.style.opacity = 1
  wordRightRight.innerText = shuffle(runes)
  setTimeout(function () {
    wordRightRight.style.opacity = 0
  }, 2200/2);
}, 2200);

let wordFourRight = document.querySelector('.runeBoxThree .fourRight')
wordFourRight.style.transition = 'all 500ms ease'

setInterval(function () {
  wordFourRight.style.opacity = 1
  wordFourRight.innerText = shuffle(runes)
  setTimeout(function () {
    wordFourRight.style.opacity = 0
  }, 4500/2);
}, 4500);

let wordFiveRight = document.querySelector('.runeBoxThree .fiveRight')
wordFiveRight.style.transition = 'all 500ms ease'

setInterval(function () {
  wordFiveRight.style.opacity = 1
  wordFiveRight.innerText = shuffle(runes)
  setTimeout(function () {
    wordFiveRight.style.opacity = 0
  }, 1250);
}, 2500);


// shuffleRunes('.left',4000)
// shuffleRunes('.mid',4000)
// shuffleRunes('.right',2000)
//
// function shuffleRunes(selector, time) {
//   tag = document.querySelector(selector)
//   tag.style.transition = 'all 500ms ease'
//
//   setInterval(function () {
//     tag.style.opacity = 1
//     tag.innerText = shuffle(runes)
//     setTimeout(function () {
//       tag.style.opacity = 0
//     }, time/2);
//   }, time);
// }

let runes = [
  'ᚣ',
  'ᛉ',
  'ᛉ',
  'ᛈ',
  'ᚧ'
]

let randomRune = Math.random().toString(36).slice(-10)

let numberOfRunes = 20

for (let i = 0; i < numberOfRunes; i += 1) {
  let p = document.createElement('p')

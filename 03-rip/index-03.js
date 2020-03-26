let fall = anime.timeline({
  // duration: 2000,
  autoplay: false,
  // delay: anime.stagger(0)
})
fall
  .add ({
    targets: '.right-rip-man',
    keyframes: [
    {translateX: '0.8vw',duration: 1000, easing: 'easeOutCirc'},
    {rotateZ: '10deg', duration: 1000},
    {rotateZ: '0deg', duration: 1000},
    {translateX: '-0.2vw' ,duration: 1000, easing: 'easeOutCirc'},
    {translateX: '7vw',duration: 1000, easing: 'easeOutCirc',
    translateY: '1vw',duration: 1000, easing: 'easeOutCirc',
    rotate: '30deg', duration: 300, easing: 'easeInQuad',
  },
    {
    translateY: '25vw' ,duration: 2000, easing: 'easeOutExpo',
    rotate: '200deg', duration: 2000,easing: 'easeOutExpo',
  },
]},200)

  .add ({
    targets: '.right-rip-man2',
    keyframes: [
    {translateX: '2vw',duration: 1000, easing: 'easeOutCirc'},
    {rotateZ: '10deg', duration: 1000},
    {rotateZ: '0deg', duration: 1000},
    {translateX: '-0.2vw' ,duration: 1000, easing: 'easeOutCirc'},
    {translateX: '7.5vw',duration: 1000, easing: 'easeOutCirc',
    translateY: '1vw',duration: 1000, easing: 'easeOutCirc',
    rotate: '30deg', duration: 300, easing: 'easeInQuad',
  },
    {
    translateY: '25vw' ,duration: 2000, easing: 'easeOutExpo',
    rotate: '200deg', duration: 2000,easing: 'easeOutExpo',
  },
]},6000)

  .add ({
    targets: '.right-rip-man3',
    keyframes: [
    {translateX: '4vw',duration: 1000, easing: 'easeOutCirc'},
    {rotateZ: '10deg', duration: 1000},
    {rotateZ: '0deg', duration: 1000},
    {translateX: '-0.2vw' ,duration: 1000, easing: 'easeOutCirc'},
    {translateX: '9vw',duration: 1000, easing: 'easeOutCirc',
    translateY: '1vw',duration: 1000, easing: 'easeOutCirc',
    rotate: '30deg', duration: 300, easing: 'easeInQuad',
  },
    {
    translateY: '25vw' ,duration: 2000, easing: 'easeOutExpo',
    rotate: '200deg', duration: 2000,easing: 'easeOutExpo',
  },
]},12000)

  .add ({
    targets: '.right-rip-man4',
    keyframes: [
    {translateX: '6vw',duration: 1000, easing: 'easeOutCirc'},
    {rotateZ: '10deg', duration: 1000},
    {rotateZ: '0deg', duration: 1000},
    {translateX: '-0.2vw' ,duration: 1000, easing: 'easeOutCirc'},
    {translateX: '12vw',duration: 1000, easing: 'easeOutCirc',
    translateY: '1vw',duration: 1000, easing: 'easeOutCirc',
    rotate: '30deg', duration: 300, easing: 'easeInQuad',
  },
    {
    translateY: '25vw' ,duration: 2000, easing: 'easeOutExpo',
    rotate: '200deg', duration: 2000,easing: 'easeOutExpo',
  },
]},18000)

  .add ({
    targets: '.right-rip-man5',
    keyframes: [
    {translateX: '8vw',duration: 1000, easing: 'easeOutCirc'},
    {rotateZ: '10deg', duration: 1000},
    {rotateZ: '0deg', duration: 1000},
    {translateX: '-0.2vw' ,duration: 1000, easing: 'easeOutCirc'},
    {translateX: '15vw',duration: 1000, easing: 'easeOutCirc',
    translateY: '1vw',duration: 1000, easing: 'easeOutCirc',
    rotate: '30deg', duration: 300, easing: 'easeInQuad',
  },
    {
    translateY: '25vw' ,duration: 2000, easing: 'easeOutExpo',
    rotate: '200deg', duration: 2000,easing: 'easeOutExpo',
  },
]},24000)

  .add ({
    targets: '.right-rip-man6',
    keyframes: [
    {translateX: '11vw',duration: 1000, easing: 'easeOutCirc'},
    {rotateZ: '10deg', duration: 1000},
    {rotateZ: '0deg', duration: 1000},
    {translateX: '-0.2vw' ,duration: 1000, easing: 'easeOutCirc'},
    {translateX: '19vw',duration: 1000, easing: 'easeOutCirc',
    translateY: '1vw',duration: 1000, easing: 'easeOutCirc',
    rotate: '30deg', duration: 300, easing: 'easeInQuad',
  },
    {
    translateY: '25vw' ,duration: 2000, easing: 'easeOutExpo',
    rotate: '200deg', duration: 2000,easing: 'easeOutExpo',
  },
]},30000);



  let btn = document.querySelector('.sick')
  btn.onclick = fall.play



  //
  // translateX: [
  //   { value: '10vw', duration: 1000, delay: 500 },
  //  ]

  // .add ({
  //   targets: '.right-rip-man',
  //   keyframes: [
  //   {translateX: '1vw',duration: 1000, easing: 'easeOutCirc'},
  //   {rotateZ: '5deg', duration: 1000},
  //   {rotateZ: '0deg', duration: 1000},
  //   {translateX: 0,duration: 1000, easing: 'easeOutCirc'},
  //   {translateX: '5vw' ,duration: 500, easing: 'easeOutCirc'},
  //   {translateY: '-2vw' ,duration: 500, easing: 'easeOutCirc'},
  //   {rotateZ: '-180deg', duration: 500},
  //   {translateY: '-30vw' ,duration: 500, easing: 'easeOutCirc'},
  // ]
  // },200);

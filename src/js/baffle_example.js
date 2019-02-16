// const baffle = require('baffle');
const text = window.baffle('.target');
text.set({
  characters:'█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░> 🤷‍♂️',
  speed:120
})
text.start()
text.reveal(4000)

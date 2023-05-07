// // // Score 64 (simple game):
// const frames1 = [
//   [2, 0],
//   [4, 2],
//   [6, 0],
//   [2, 4],
//   [1, 5],
//   [7, 0],
//   [5, 2],
//   [7, 0],
//   [2, 6],
//   [8, 1],
// ]
// // Score 71 (with spares):
// const frames2 = [
//   [6, 1], [4, 0], [6, 4], [2, 7], [3, 5], [5, 0], [5, 5], [0, 0], [1, 6], [7, 2]
// ]
// // Score 104 (with spares and strikes):
// const frames3 = [
//   [6, 4], [8, 0], [10, 0], [2, 7], [5, 5], [4, 0], [10, 0], [2, 1], [2, 6], [4, 4]
// ]
// //
// // Score 119 (with spares, strikes and a double strike):
// const frames4 = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
// ]
// //
// // Score 141 (includes a strike on the last frame):
// const frames5 = [
//   [1, 2],
//   [6, 4], // [6, 4, 5]
//   [5, 4],
//   [10, 0], // [10, 0, 7, 2]
//   [7, 2],
//   [10, 0], // [10, 0, 10, 5]
//   [10, 0], // [10, 0, 5, 2]
//   [5, 2],
//   [7, 0],
//   [10, 10, 10],
// ]
// //
// // Score 300 (perfect game):
// const frames6 = [
//   [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]
// ]

function calculateScore(frames) {
  let score = 0
  for (let i = 0; i < frames.length; i++) {
    let frameScore = frames[i][0] + frames[i][1]
    if (i === 9) {
      if (frames[i][0] === 10 || frames[i][0] + frames[i][1] === 10) {
        frameScore += frames[i][2]
      }
    } else {
      if (frames[i][0] === 10) {
        frameScore += frames[i + 1][0] + frames[i + 1][1]
        if (frames[i + 1][0] === 10) {
          frameScore += frames[i + 2][0]
        }
      } else if (frames[i][0] + frames[i][1] === 10) {
        frameScore += frames[i + 1][0]
      }
    }
    score += frameScore
  }
  return score
}

const frames1 = [
  [2, 0],
  [4, 2],
  [6, 0],
  [2, 4],
  [1, 5],
  [7, 0],
  [5, 2],
  [7, 0],
  [2, 6],
  [8, 1],
]

const totalScore1 = calculateScore(frames1)
console.log('total 1: ', totalScore1) // Output: 64

const frames2 = [
  [6, 1],
  [4, 0],
  [6, 4],
  [2, 7],
  [3, 5],
  [5, 0],
  [5, 5],
  [0, 0],
  [1, 6],
  [7, 2],
]

const totalScore2 = calculateScore(frames2)
console.log('total 2: ', totalScore2) // Output: 71

const frames3 = [
  [6, 4],
  [8, 0],
  [10, 0],
  [2, 7],
  [5, 5],
  [4, 0],
  [10, 0],
  [2, 1],
  [2, 6],
  [4, 4],
]

const totalScore3 = calculateScore(frames3)
console.log('total 3: ', totalScore3) // Output: 104

const frames4 = [
  [1, 2],
  [6, 4],
  [5, 4],
  [10, 0],
  [7, 2],
  [10, 0],
  [10, 0],
  [5, 2],
  [7, 0],
  [4, 4],
]

const totalScore4 = calculateScore(frames4)
console.log('total 4: ', totalScore4) // Output: 119

const frames5 = [
  [1, 2],
  [6, 4], // [6, 4, 5]
  [5, 4],
  [10, 0], // [10, 0, 7, 2]
  [7, 2],
  [10, 0], // [10, 0, 10, 5]
  [10, 0], // [10, 0, 5, 2]
  [5, 2],
  [7, 0],
  [10, 10, 10],
]

const totalScore5 = calculateScore(frames5)
console.log('total 5: ', totalScore5) // Output: 141

const frames6 = [
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 10, 10],
]

const totalScore6 = calculateScore(frames6)
console.log('total 6: ', totalScore6) // output: 300

// Cureent ouputs work for everything EXCEPT a perfectGame...

// frames1 = 64
//frames2 = 71
//frames3 = 104
//frames 4 = 119
//frames5 = 141
// frames6 = XXX error

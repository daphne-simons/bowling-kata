// Score 64 (simple game):
// const frames = [
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
// Score 71 (with spares):
// const frames = [
//   [6, 1],
//   [4, 0],
//   [6, 4],
//   [2, 7],
//   [3, 5],
//   [5, 0],
//   [5, 5],
//   [0, 0],
//   [1, 6],
//   [7, 2],
// ]
// Score 104 (with spares and strikes):
// const frames = [
//   [6, 4],
//   [8, 0],
//   [10, 0],
//   [2, 7],
//   [5, 5],
//   [4, 0],
//   [10, 0],
//   [2, 1],
//   [2, 6],
//   [4, 4],
// ]
//
// Score 119 (with spares, strikes and a double strike):
const frames = [
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
//
// Score 141 (includes a strike on the last frame):
// const frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
// ]
//
// Score 300 (perfect game):
// const frames = [
//   [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]
// ]
function getFrameType(frame, index) {
  if (index === 9) return 'final' // Last frame
  else if (frame[0] === 10 && index === 8) return 'strikeBeforeLast' //
  else if (frame[0] === 10 && frames[index + 1][0] === 10)
    return 'strikeThenStrike'
  else if (frame[0] === 10) return 'strike'
  else if (frame[0] + frame[1] === 10) return 'spare'
  else return 'normal'
}

const reduceResult = frames.reduce((total, frame, i) => {
  const frameType = getFrameType(frame, i)
  const totalAndFrame = frame.reduce((frTotal, ball) => frTotal + ball, total)
  if (frameType === 'normal') return totalAndFrame
  if (frameType === 'spare') return totalAndFrame + frames[i + 1][0]
  if (frameType === 'strikeBeforeLast')
    return totalAndFrame + frames[i + 1][0] + frames[i + 1][1]
  if (frameType === 'strikeThenStrike')
    return totalAndFrame + frames[i + 1][0] + frames[i + 2][0]
  if (frameType === 'strike')
    return totalAndFrame + frames[i + 1][0] + frames[i + 1][1]
  if (frameType === 'final') return totalAndFrame
}, 0)

console.log('Final result is: ', reduceResult)

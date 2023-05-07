// // Score 64 (simple game):
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
// Score 71 (with spares):
const frames2 = [
  [6, 1], [4, 0], [6, 4], [2, 7], [3, 5], [5, 0], [5, 5], [0, 0], [1, 6], [7, 2]
]
// Score 104 (with spares and strikes):
const frames3 = [
  [6, 4], [8, 0], [10, 0], [2, 7], [5, 5], [4, 0], [10, 0], [2, 1], [2, 6], [4, 4]
]
//
// Score 119 (with spares, strikes and a double strike):
const frames4 = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
]
//
// Score 141 (includes a strike on the last frame):
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
//
// Score 300 (perfect game):
const frames6 = [
  [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]
]

// Make a basic function that gives total for simple game: 
function simpleGameScore(arr) {
  // 1. map through array and add up the items in each element(also arrays)
  const mappedArr = arr
    .map((element) => element.reduce((acc, curr) => acc + curr, 0))
    //2. Reduce this new array to a total. 
  const total = mappedArr.reduce((acc, curr) => acc + curr, 0)
  return total
}

console.log("simple score total: ",simpleGameScore(frames1))

function complexGameScore(arr) {
  const calcArr = arr.map((element, i, arr) => {
    if (i != arr.length - 1) {
      if (element[0] + element[1] == 10) { // If it is Spare
        element.push(arr[i + 1][0]) // note - "element" is a mini array
        if (element[0] == 10) {   // If it is Strike
          element.push(arr[i + 1][1])
          
          if (element[0] == 10 && arr[i + 1][0] == 10) { // If current and next are strike
            if (i == arr.length - 2) {
              element.push(arr[i + 1][1])
            } else {
              element.push(arr[i + 2][0])
            }
          }
        }
      }
    }
    return element
  })
  console.log("calcArr = ", calcArr)
  return simpleGameScore(calcArr)
}

console.log("total complex score: ", complexGameScore(frames5))

function perfectGameScore(arr) {
  const calcArr = arr.map((element, i, arr) => {
    if (i != arr.length - 1) {
      // If current and next both are strike
      if (element[0] == 10 && arr[i + 1][0] == 10) {
        if (i == arr.length - 2) {
          element.push(arr[i + 1][1])
        } else {
          element.push(arr[i + 2][0])
        }
        element.push(arr[i + 1][0])
      }
      // If only current is Strike
      else if (element[0] == 10) {
        element.push(arr[i + 1][0])
        element.push(arr[i + 1][1])
      }
      // If it is spare 
      else if (element[0] + element[1] == 10) {
        element.push(arr[i + 1][0])
      }
    }
    return element
  })
  return simpleGameScore(calcArr)
}

console.log("Perfect game score: ", perfectGameScore(frames6))

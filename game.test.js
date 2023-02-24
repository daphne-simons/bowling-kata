const fn= require(`./game.js`)
let frames
let score

test("here",()=>{
    score=64
    frames = [
          [2, 0], [4, 2], [6, 0], [2, 4], [1, 5], [7, 0], [5, 2], [7, 0], [2, 6], [8, 1]
        ]
    expect(score).toBe(fn(frames))
})
test("test the test",()=>{
    score=71
    frames =  [
  [6, 1], [4, 0], [6, 4], [2, 7], [3, 5], [5, 0], [5, 5], [0, 0], [1, 6], [7, 2]
]

    expect(score).toBe(fn(frames))
})
test("test the test",()=>{
    score=104
    frames =   [ [6, 4], [8, 0], [10, 0], [2, 7], [5, 5], [4, 0], [10, 0], [2, 1], [2, 6], [4, 4] ]
    expect(score).toBe(fn(frames))
})
test("test the test",()=>{
    score=119
    frames = [ [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
    ]
    expect(score).toBe(fn(frames))
})
test("test the test",()=>{
    score=141
    frames = [  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
]
    expect(score).toBe(fn(frames))
})
test("test the test",()=>{
    score=300
    frames = [  [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]
]
    expect(score).toBe(fn(frames))
})

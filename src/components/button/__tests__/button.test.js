const sum = function (a, b) {
  return a + b
}

describe('test Button component', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
})

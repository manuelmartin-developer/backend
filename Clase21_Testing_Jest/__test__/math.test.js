const { sum, mul, sub, div } = require('../math')

beforeAll(() => console.log('Se EJECUTA ANTES DE TODO'));
afterAll(() => console.log('SE EJECUTA DESPUÉS DE TODO'));
beforeEach(() => console.log('***beforeEach***'));
afterEach(() => console.log('+++afterEach+++'));

describe('Verify exit value', () => {
test('Adding 1 + 1 equals 2', () => {
  expect(sum(1, 1)).toBe(2)
})
test('Multiplying 1 * 1 equals 1', () => {
  expect(mul(1, 1)).toBe(1)
})
test('Subtracting 1 - 1 equals 0', () => {
  expect(sub(1, 1)).toBe(0)
})
test('Dividing 1 / 1 equals 1', () => {
  expect(div(1, 1)).toBe(1)
})
})


describe('Verify type of return value', () => {
  test('Return typeof number', () => {
    expect(typeof (sum(1, 1))).toBe('number')
  })
  test('Return typeof number', () => {
    expect(typeof (mul(1, 1))).toBe('number')
  })
  test('Return typeof number', () => {
    expect(typeof (sub(1, 1))).toBe('number')
  })
  test('Return typeof number', () => {
    expect(typeof (div(1, 1))).toBe('number')
  })
})

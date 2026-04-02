import runGeneral from '../index.js'

const findGCD = (a, b) => {
  let num1 = a
  let num2 = b

  while (num2 !== 0) {
    const temp = num2
    num2 = num1 % num2
    num1 = temp
  }

  return num1
}

const getRandomNumber = (max = 100) => {
  return Math.floor(Math.random() * max) + 1
}

const ruleGame = 'Find the greatest common divisor of given numbers.'

const getGameData = () => {
  const num1 = getRandomNumber()
  const num2 = getRandomNumber()

  const question = `${num1} ${num2}`
  const correctAnswer = String(findGCD(num1, num2))

  return [question, correctAnswer]
}

export default () => runGeneral(ruleGame, getGameData)

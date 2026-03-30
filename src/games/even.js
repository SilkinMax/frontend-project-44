import runGeneral from '../index.js'

const ruleGame = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = number => number % 2 === 0

const getGameData = () => {
  const maxNumber = 100
  const number = Math.floor(Math.random() * maxNumber) + 1
  const correctAnswer = isEven(number) ? 'yes' : 'no'
  return [number, correctAnswer]
}

export default () => runGeneral(ruleGame, getGameData)

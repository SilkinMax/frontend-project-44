import runGeneral from '../index.js'
import { getRandomNumber } from '../library.js'

const isPrime = (num) => {
  if (num < 2) return false
  if (num === 2) return true
  if (num % 2 === 0) return false

  const limit = Math.sqrt(num)
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) return false
  }
  return true
}

const ruleGame = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const getGameData = () => {
  const number = getRandomNumber()

  const question = String(number)

  const correctAnswer = isPrime(number) ? 'yes' : 'no'

  return [question, correctAnswer]
}

export default () => runGeneral(ruleGame, getGameData)

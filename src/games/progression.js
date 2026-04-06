import runGeneral from '../index.js'
import { getRandomNumber } from '../library.js'

const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}

const ruleGame = 'What number is missing in the progression?'

const getGameData = () => {
  const length = getRandomNumber(5, 10)
  const start = getRandomNumber(1, 100)
  const step = getRandomNumber(1, 10)

  const fullProgression = generateProgression(start, step, length)

  const hiddenIndex = getRandomNumber(0, length - 1)

  const correctAnswer = String(fullProgression[hiddenIndex])

  const displayProgression = [...fullProgression]
  displayProgression[hiddenIndex] = '..'

  const question = displayProgression.join(' ')

  return [question, correctAnswer]
}

export default () => runGeneral(ruleGame, getGameData)

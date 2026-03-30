import runGeneral from '../index.js'

const ruleGame = 'What is the result of the expression?'

const getRandomNumber = (max = 100) => {
  return Math.floor(Math.random() * max) + 1
}

const getRandomOperation = () => {
  const operations = ['+', '-', '*']
  const randomIndex = Math.floor(Math.random() * operations.length)
  return operations[randomIndex]
}

const calculate = (num1, num2, operation) => {
  let result = num1 + num2
  switch (operation) {
    case '+':
      result = num1 + num2
      break
    case '-':
      result = num1 - num2
      break
    case '*':
      result = num1 * num2
      break
  }
  return result
}

const getGameData = () => {
  const num1 = getRandomNumber()
  const num2 = getRandomNumber()
  const operation = getRandomOperation()

  const expression = `${num1} ${operation} ${num2}`
  const correctAnswer = String(calculate(num1, num2, operation))

  return [expression, correctAnswer]
}

export default () => runGeneral(ruleGame, getGameData)

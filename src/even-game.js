import readlineSync from 'readline-sync'

const printRules = () => {
  console.log(`Answer "yes" if the number is even, otherwise answer "no".`)
}

const checkEven = (number) => {
  if (number % 2 == 0)
    return true
  return false
}
const getStringCorrectAnswer = (number) => {
  if (checkEven(number))
    return 'yes'
  return 'no'
}

const evenGame = (runNumber = 1, nameUser = '') => {
  if (runNumber == 1) {
    console.log('Welcome to the Brain Games!')
    nameUser = readlineSync.question('May I have your name? ')
    console.log(`Hello, ${nameUser}!`)
    printRules()
  }
  const maxCorrectAnswers = 3
  if (runNumber > maxCorrectAnswers) {
    console.log(`Congratulations, ${nameUser}!`)
    return true
  }

  const maxNumber = 100
  const number = Math.floor(Math.random() * maxNumber) + 1
  console.log(`Question: ${number}`)
  const userAnswer = readlineSync.question(`Your answer: `)
  const correctAnswer = getStringCorrectAnswer(number)
  if (getStringCorrectAnswer(number) == userAnswer) {
    console.log('Correct!')
    evenGame(runNumber + 1, nameUser)
  }
  else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
    console.log(`Let's try again, ${nameUser}!`)
    return false
  }
}
export default evenGame

import getElement from './utils/getElement'
import getAllElements from './utils/getAllElements'

export default function setupQuizCards() {
  const buttonsAnswer = getAllElements('.button-answer')

  buttonsAnswer.forEach(buttonAnswer => {
    buttonAnswer.addEventListener('click', event => {
      console.log(event.currentTargetParentNode)
      const answerText = getElement('.answer-text', event.target.parentNode)
      answerText.classList.toggle('hidden')
    })
  })
}

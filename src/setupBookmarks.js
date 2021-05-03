import getAllElements from './utils/getAllElements'

export default function setupBookmarks() {
  const bookMarks = getAllElements('.quiz-card__bookmark')

  bookMarks.forEach(bookMark => {
    bookMark.addEventListener('click', () => {
      bookMark.classList.toggle('quiz-card__bookmark--selected')
    })
  })
}

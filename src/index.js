const buttonHome = document.querySelector('.button-home')
const buttonBookmarks = document.querySelector('.button-bookmarks')
const buttonCreate = document.querySelector('.button-create')
const buttonProfile = document.querySelector('.button-profile')

const homePage = document.querySelector('.home-page')
const createPage = document.querySelector('.create-page')
const bookmarksPage = document.querySelector('.bookmarks-page')
const profilePage = document.querySelector('.profile-page')

buttonHome.addEventListener('click', () => {
  homePage.classList.remove('hidden')
  createPage.classList.add('hidden')
  bookmarksPage.classList.add('hidden')
  profilePage.classList.add('hidden')
  buttonHome.classList.add('active')
  buttonCreate.classList.remove('active')
  buttonBookmarks.classList.remove('active')
  buttonProfile.classList.remove('active')
})

buttonBookmarks.addEventListener('click', () => {
  homePage.classList.add('hidden')
  createPage.classList.add('hidden')
  bookmarksPage.classList.remove('hidden')
  profilePage.classList.add('hidden')
  buttonHome.classList.remove('active')
  buttonCreate.classList.remove('active')
  buttonBookmarks.classList.add('active')
  buttonProfile.classList.remove('active')
})

buttonCreate.addEventListener('click', () => {
  homePage.classList.add('hidden')
  createPage.classList.remove('hidden')
  bookmarksPage.classList.add('hidden')
  profilePage.classList.add('hidden')
  buttonHome.classList.remove('active')
  buttonCreate.classList.add('active')
  buttonBookmarks.classList.remove('active')
  buttonProfile.classList.remove('active')
})

buttonProfile.addEventListener('click', () => {
  homePage.classList.add('hidden')
  createPage.classList.add('hidden')
  bookmarksPage.classList.add('hidden')
  profilePage.classList.remove('hidden')
  buttonHome.classList.remove('active')
  buttonCreate.classList.remove('active')
  buttonBookmarks.classList.remove('active')
  buttonProfile.classList.add('active')
})

const firstButton = document.querySelector('.first-button')
const firstAnswer = document.querySelector('.first-answer')

firstButton.addEventListener('click', () => {
  firstAnswer.classList.toggle('hidden')
})

const bookmark = document.querySelector('.quiz-card__bookmark')

bookmark.addEventListener('click', () => {
  bookmark.classList.toggle('quiz-card__bookmark--selected')
})

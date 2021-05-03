import getElement from './utils/getElement'

export default function setupNavigation() {
  const buttonHome = getElement('.button-home')
  const buttonCreate = getElement('.button-create')
  const buttonBookmarks = getElement('.button-bookmarks')
  const buttonProfile = getElement('.button-profile')

  const homePage = getElement('.home-page')
  const createPage = getElement('.create-page')
  const bookmarksPage = getElement('.bookmarks-page')
  const profilePage = getElement('.profile-page')

  const headerHome = getElement('.app-header1')
  const headerCreate = getElement('.app-header2')
  const headerBookmarks = getElement('.app-header3')
  const headerProfile = getElement('.app-header4')

  buttonHome.addEventListener('click', navigateToHome)
  buttonCreate.addEventListener('click', navigateToCreate)
  buttonBookmarks.addEventListener('click', navigateToBookmarks)
  buttonProfile.addEventListener('click', navigateToProfile)

  function navigateToHome() {
    changePage(homePage)
    selectButton(buttonHome)
    changeHeader(headerHome)
  }

  function navigateToCreate() {
    changePage(createPage)
    selectButton(buttonCreate)
    changeHeader(headerCreate)
  }

  function navigateToBookmarks() {
    changePage(bookmarksPage)
    selectButton(buttonBookmarks)
    changeHeader(headerBookmarks)
  }

  function navigateToProfile() {
    changePage(profilePage)
    selectButton(buttonProfile)
    changeHeader(headerProfile)
  }

  function changePage(page) {
    hideAllPages()
    page.classList.remove('hidden')
  }

  function selectButton(button) {
    deactivateButtons()
    button.classList.add('active')
  }

  function hideAllPages() {
    homePage.classList.add('hidden')
    bookmarksPage.classList.add('hidden')
    createPage.classList.add('hidden')
    profilePage.classList.add('hidden')
  }

  function deactivateButtons() {
    buttonHome.classList.remove('active')
    buttonBookmarks.classList.remove('active')
    buttonCreate.classList.remove('active')
    buttonProfile.classList.remove('active')
  }

  function changeHeader(header) {
    hideHeader()
    header.classList.remove('hidden')
  }

  function hideHeader() {
    headerHome.classList.add('hidden')
    headerBookmarks.classList.add('hidden')
    headerCreate.classList.add('hidden')
    headerProfile.classList.add('hidden')
  }
}

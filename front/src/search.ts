import { filter, store } from  './redux/users'
import { IUser } from "./interfaces"
const buttonSearch = document.querySelector('.users__search-button') as HTMLDivElement
const inputSearch = document.querySelector('.users__search-input') as HTMLInputElement

    function pasteUser(user: IUser): HTMLDivElement{
        const div = document.createElement('div')
        div.dataset.name = user.name
        div.dataset.id = String(user.id)
        div.classList.add('users__item')
        div.innerHTML = `<h3 class="users__item-title">${user.name}</h3>
        <div class="users__item-info"> <img class="users__item-icon" src="./images/phone.svg" alt="Телефон">
            <a class="users__item-link " href="tel:${user.phone}">${user.phone}</a>
        </div>
        <div class="users__item-info">
            <img class="users__item-icon" src="./images/email.svg" alt="Почта">
            <a class="users__item-link users__item-link--underline" href="mailto:${user.email}">${user.email}</a>
        </div>`
    
        return div
    }




store.subscribe(() => {
    const allUsers = document.querySelectorAll('.users__item')
    const pageIdUsers = Array.from(allUsers).map((user: HTMLDivElement) => Number(user.dataset.id))
    const filterUsers = store.getState().filterUsers 
    const stateIdUsers = filterUsers.map(user => user.id) 
    const usersList = document.querySelector('.users__list')
    const delteIndx = pageIdUsers.filter(indx => !stateIdUsers.includes(indx))

    allUsers.forEach((pageUser: HTMLDivElement) => {
        if(delteIndx.includes(Number(pageUser.dataset.id))){
            pageUser.remove()
        }
    })

    const pasteUsersId = stateIdUsers.filter(indx => !pageIdUsers.includes(indx))

    pasteUsersId.forEach((userId) => {
        usersList.append(pasteUser(filterUsers.find(filterUser => filterUser.id === userId)))
    })
 }
)


function usersFilter(){
    store.dispatch(filter(inputSearch.value))
}

buttonSearch.addEventListener('click', () => {
    usersFilter()
})

inputSearch.addEventListener('input', () => {
    if(inputSearch.value == ''){
        usersFilter()
    }
})
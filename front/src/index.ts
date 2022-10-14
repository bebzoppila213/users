import '../public/fonts/stylesheet.sass'
import '../public/css/test.sass'
import './search.ts'
import './modal.ts'
import { IUser } from "./interfaces"
import { getAllUsers } from './api'
import { appendUsers, store } from  './redux/users'

// function loadAllUser(){
//     const usersList = document.querySelector('.users__list')

//     getAllUsers().then(allUsers => {
//         allUsers.forEach(user => {
//             usersList.append(pasteUser(user))
//         })
//     })
    
    
//     function pasteUser(user: IUser): HTMLDivElement{
//         const div = document.createElement('div')
//         div.dataset.name = user.name
//         div.dataset.id = String(user.id)
//         div.classList.add('users__item')
//         div.innerHTML = `<h3 class="users__item-title">${user.name}</h3>
//         <div class="users__item-info"> <img class="users__item-icon" src="./images/phone.svg" alt="Телефон">
//             <a class="users__item-link " href="tel:${user.phone}">${user.phone}</a>
//         </div>
//         <div class="users__item-info">
//             <img class="users__item-icon" src="./images/email.svg" alt="Почта">
//             <a class="users__item-link users__item-link--underline" href="mailto:${user.email}">${user.email}</a>
//         </div>`
    
//         return div
//     }
// }


getAllUsers().then(allUsers => {
    store.dispatch(appendUsers(allUsers))
    // console.log(store.getState());
    
})
// loadAllUser()
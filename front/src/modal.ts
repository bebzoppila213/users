import { getUser } from "./api"
import { IUser } from "./interfaces"

const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.modal__bitton')
const modalInner = document.querySelector('.modal__inner')

function getUserItem(event: MouseEvent): HTMLDivElement{
    const element = event.target as HTMLDivElement
    if(element.classList.contains('users__item')){
        return element
    }
}

document.addEventListener('click', event => {
    
    const userItem = getUserItem(event)
 if(userItem){
        const user = event.target as HTMLDivElement
        console.log(user.dataset.id);
        
        getUser(Number(user.dataset.id)).then(data => updateModalData(data)).then(() => modal.classList.add('modal--open'))
        
    }
})

function updateModalData(user: IUser){
   
    const keyNames = ['name', 'address', 'phone', 'email', 'hire_date', 'position_name', 'department'] as Array<keyof IUser>
    keyNames.forEach(key => {
        modal.querySelector(`#modal_${key}`).textContent = String(user[key]).slice(0, 29)
    })
}


modalClose.addEventListener('click', () => {
    modal.classList.remove('modal--open')
})

modal.addEventListener('click', () => {
    modal.classList.remove('modal--open')
})

modalInner.addEventListener('click', (event) => {
    event.stopPropagation()
})
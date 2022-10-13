const buttonSearch = document.querySelector('.users__search-button') as HTMLDivElement
const inputSearch = document.querySelector('.users__search-input') as HTMLInputElement


function checkUserFromFilter(user:HTMLElement, value: string): boolean{
    return user.dataset.name.toLowerCase().trim().includes(value.toLowerCase())
}

function userFilter(){
    const allUsers = document.querySelectorAll('.users__item') as NodeListOf<Element>
    allUsers.forEach((user) => { 
        if (user instanceof HTMLElement) 
        {
            if(checkUserFromFilter(user, inputSearch.value.trim())){
                user.classList.remove('users__item--hide')
            }else{
                user.classList.add('users__item--hide')
            }
        }
    }) 
}


buttonSearch.addEventListener('click', () => {
    userFilter()
})

inputSearch.addEventListener('input', () => {
    if(inputSearch.value == ''){
        userFilter()
    }
})
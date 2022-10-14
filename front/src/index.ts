import '../public/fonts/stylesheet.sass'
import '../public/css/test.sass'
import './search.ts'
import './modal.ts'
import { getAllUsers } from './api'
import { appendUsers, store } from  './redux/users'

getAllUsers().then(allUsers => {
    store.dispatch(appendUsers(allUsers))
})
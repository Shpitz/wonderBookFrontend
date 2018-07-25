
import bookSerivce from '../services/book-service.js'
//actions
export const LOAD_BOOKS = 'book/actions/loadBooks'


// mutations
export const SET_BOOKS = 'book/mutations/setBooks'

// getters
export const BOOKS_FOR_DISPLAY = 'book/getters/Books'
export const FILTRT_BY = 'book/getters/filterBy'
export const BOOKS_FOR_DISPLAY = 'book/getters/books'



export default {
    state: {
        books: [],
        filterBy: {}
    },
    mutations: {
        [SET_BOOKS](state, { books }) {
            state.books = books
        }
    },
    getters: {
        [BOOKS_FOR_DISPLAY](state){
            return state.books
        }
    },
    actions: {
        [LOAD_BOOKS](context) {
            // context.state.filterBy
            return bookSerivce.query()
                .then(books => {
                    context.commit({ type: SET_BOOKS, books })
                    console.log(books, 'from action')
                })
        }
    }
}

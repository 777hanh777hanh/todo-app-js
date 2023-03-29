const TODO_STORAGE_KEY = 'todos';

export default {
    get() {
        return JSON.parse(localStorage.getItem(TODO_STORAGE_KEY)) || {};
    },
    set(data) {
        return localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(data))
    }
}
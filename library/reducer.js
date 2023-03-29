import storageTodo from "../util/storageTodo.js";

// Giá trị state mặc định
let init = {
    animals: ['dog', 'cat', 'parrot'],
    persons: ['Lan', 'My', 'Phương'],
    todos: storageTodo.get()?.todos || [],
    filter: 'all',
    filters: {
        all: () => true,
        active: (todo) => !todo.completed,
        completed: (todo) => todo.completed,
    },
    editIndex: null,
}

let data = init;

const actions = {
    addTodo({ todos }, title) {
        if (title.trim().length > 0) {
            todos.push({
                title,
                completed: false
            })
            storageTodo.set({ todos })
        }
    },
    destroyTodo({ todos }, index) {
        todos = todos.splice(index, 1);
        storageTodo.set({ todos })
    },
    clearCompleted(state) {
        console.log(state.filters)
        state.todos = state.todos.filter(state.filters.active)
        storageTodo.set({ todos: state.todos })
    },
    toggle({ todos }, index) {
        const todo = todos[index]
        todo.completed = !todo.completed
        storageTodo.set({ todos })
    },
    toggleAll({ todos }, completed) {
        for (const todo of todos) {
            todo.completed = completed;
        }
        storageTodo.set({ todos })
    },
    changeFilter(state, filter) {
        state.filter = filter;
    },
    editing(state, index) {
        state.editIndex = index;
    },
    editTodo(state, title) {
        if (state.editIndex !== null) {
            if (title) {
                state.todos[state.editIndex].title = title;
                storageTodo.set(state)
            }
            else {
                this.destroyTodo(state, state.editIndex)
            }
            state.editIndex = null;
        }
    },
    cancelEdit(state) {
        state.editIndex = null
        storageTodo.set(state)
    }
}

function reducer(state = data, action, args) {
    // Tương ứng từng hành động sẽ xữ lí state tương ứng với từng hành động đó
    actions[action] && actions[action](state, ...args);
    return state
}

export default reducer;
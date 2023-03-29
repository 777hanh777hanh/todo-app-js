import html from "../core/html.js";
import { connect } from "../library/store.js";


function TodoListAction({ todos, filters, filter }) {
    return html`
    <footer class="footer">
        <span class="todo-count"><strong>${todos.filter(filters.active).length}</strong> item left</span>
        <ul class="filters">
            ${Object.keys(filters).map(type => html`
                <li>
                    <a 
                        class="${filter === type && 'selected'}"
                        href="#"
                        onclick = "dispatch('changeFilter','${type}')"
                    >
                        ${type[0].toUpperCase() + type.slice(1)}
                    </a>
                </li>
            `)}
        </ul>
        ${todos.some(todo => todo.completed) && html`
            <button 
                class="clear-completed"
                onclick="dispatch('clearCompleted')"
            >
                Clear completed
            </button>
        `}
    </footer>
    `
}

export default connect(state => state)(TodoListAction)
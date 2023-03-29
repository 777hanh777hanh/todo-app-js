import html from "../core/html.js";
import { connect } from "../library/store.js";
import TodoItem from "./TodoItem.js";

TodoList = connect()(TodoList);

export default function TodoList({ todos, filters, filter }) {
    return html`
        <section class="main">
            <input
                id="toggle-all"
                class="toggle-all"
                type="checkbox"
                onchange="dispatch('toggleAll', this.checked)"
                ${todos.every(filters.completed) && 'checked'}
            />
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                ${todos && todos[0] && todos.filter(filters[filter]).map((todo, index) => TodoItem({ index, todo }))}
            </ul>
        </section>
    `
}
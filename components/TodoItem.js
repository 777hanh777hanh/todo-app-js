import html from "../core/html.js";
import { connect } from "../library/store.js";

function TodoItem({ todo, index, editIndex }) {
    return html`
        <li class="${todo.completed && 'completed'} ${editIndex === index && 'editing'}">
            <div class="view">
                <input
                    class="toggle"
                    type="checkbox"
                    ${todo.completed && 'checked'} 
                    onchange="dispatch('toggle', ${index})"
                />
                <label
                    ondblclick="dispatch('editing',${index})"
                >
                    ${todo.title}
                </label>
                <button class="destroy" onclick="dispatch('destroyTodo',${index})"></button>
            </div>
            <input 
                class="edit" 
                value="${todo.title}" 
                onkeyup="event.keyCode===13 && dispatch('editTodo', this.value.trim()) || event.keyCode === 27 && dispatch('cancelEdit')"
                onblur="dispatch('editTodo', this.value.trim())"
            />
        </li>
    `
}

export default connect()(TodoItem)
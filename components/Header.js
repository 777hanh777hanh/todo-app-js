import html from "../core/html.js";

const Header = () => {
    let body = `
        <header class="header">
            <h1>Todos</h1>
            <input 
                class="new-todo" 
                placeholder="What needs to be done?" 
                autofocus 
                onkeyup="event.keyCode === 13 && dispatch('addTodo', this.value.trim()) || event.keyCode === 27 && (this.value='') && this.focus() "
            />
        </header>   
    `

    return html`${body}`
}

export default Header
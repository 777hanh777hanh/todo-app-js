import html from "../core/html.js";
import { connect } from "../library/store.js";
import Footer from "./Footer.js";
import Header from "./Header.js";
import TodoList from "./TodoList.js";
import TodoListAction from "./TodoListAction.js";

const connector = connect();

function App({ todos }) {
    let body = `
        <section class="todoapp">
            ${Header()}
            ${html`${todos.length > 0 && TodoList()}`}
            ${html`${todos.length > 0 && TodoListAction()}`}
        </section >
    ${Footer()}
`

    return html`${body} `
}

export default connector(App)
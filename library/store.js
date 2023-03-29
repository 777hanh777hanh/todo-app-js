import createStore from "../core/createStore.js";
import reducer from "./reducer.js";
import loggerAction from "../middleware/loggerAction.js";

// Tạo createStore với reducer
// Lấy ra các hàm attach, connect, dispatch
// log trạng thái của store qua middleware `loggerAction`
const { attach, connect, dispatch } = createStore(loggerAction(reducer))
// const { attach, connect, dispatch } = createStore(reducer)

// Gán hàm dispatch vào biến dispatch thuộc phạm vi window
window.dispatch = dispatch

export {
    attach,
    connect
}

// Hàm createStore nhận hàm reducer
function createStore(reducer) {
    // Chạy hàm reducer => trả về state
    let state = reducer()
    // Khởi tạo roots bằng dữ liệu `Map`
    // roots chứa các cặp element và hàm component (trả về html) tương ứng
    const roots = new Map(); // có thể đặt key vơi bất kỳ kiểu dữ liệu nào ( bình thường chỉ có thể là chuỗi ).

    function render() {
        // Chạy từng item của roots
        for (const [root, component] of roots) {
            // Chạy hàm component trả về code html
            const output = component();
            // inner html vào root (element)
            root.innerHTML = output;
        }
    }

    return {
        // Gắn element với component tương ứng
        attach(component, root) {
            // Đưa vào object roots ở trên với key là element (object) và value là hàm component
            roots.set(root, component);
            render();
        },
        // Hàm Connect bọc component với dữ liệu state
        // Hàm selector sẽ xác định dữ liệu trong state cần lấy
        connect(selector = state => state) {
            // Nhận Component và trả về component với tham số kết hợp
            return component => (props, ...args) => {
                // Kết hợp dữ liệu từ selector, props, args qua phương thức Object.assign
                // Trả lại hàm component với selector (hàm chưa trả về) ở trên
                return component(Object.assign({}, props, selector(state), ...args))
                // return component(props, selector(state), ...args)
            }
        },
        // Đưa action vào reducer để thực hiện thay đổi state của store
        dispatch(action, ...args) {
            // Gán state lại giá trị mới vừa được trả về qua hàm reducer
            state = reducer(state, action, args);
            // Render lại với state mới
            render();
        }
    }

}

export default createStore
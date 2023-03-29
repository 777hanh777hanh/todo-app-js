// // Định nghĩa hàm html với `mảng strings` và `rest parameter`
// function html(strings, ...values) {
//     // Duyệt qua các chuỗi trong mảng `strings`
//     return strings.reduce((acc, cur, i) => {
//         // Thêm chuỗi hiện tại vào mảng `acc`
//         acc.push(cur);
//         // Nếu giá trị ứng với chuỗi hiện tại có giá trị khác `undefined`, thêm giá trị đó vào mảng kết quả
//         if (values[i] !== undefined) {
//             acc.push(values[i]);
//         }
//         return acc
//     }, [])
//         // Loại bỏ các giá trị không hợp lệ khỏi mảng `output`
//         .filter(str => str && str !== true || str === 0)
//         // Nối các chuỗi lại với nhau
//         .join('');
// }

export default html

function html([first, ...strings], ...values) {
    return values.reduce((acc, cur) => {
        return acc.concat(cur, strings.shift())
    }, [first])
        .filter(text => text && text !== true || text === 0)
        .join('');
}
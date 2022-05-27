let arr = [];
let count = 0;

function sumInput() {
    for (let i = 0; i < Infinity; i++) {
        let num = +prompt('Введите число');
        if (num == false) {
            break
        }
        arr.push(num);
        arr.sort((a, b) => a - b);
        arr.forEach(item => {
            count = count + item
        })
        alert(count);
    }
}
sumInput()
// console.log(arr);
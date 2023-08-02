

function res() {
    let num = document.getElementById('num').value;
    let resElement = document.getElementById('res');
    let table = '';

    for (let i = 1; i <= 12; i++) {
        table +=`${num} X ${i} = ${num * i}\n `;
    }

    resElement.textContent = table;
}
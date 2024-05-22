var todo_input = document.getElementById('todo_input');
var todo_input2 = document.getElementById('todo_input2');
var todo_input3 = document.getElementById('todo_input3');
var todo_input4 = document.getElementById('todo_input4');
var todo_input5 = document.getElementById('todo_input5');
var add_todo_btn = document.getElementById('add_todo_btn');
var delete_all_todo_btn = document.getElementById('delete_all_todo_btn');
var todo_list = document.querySelector('#todo_list tbody');

delete_all_todo_btn.addEventListener('click', function () {
    todo_list.innerHTML = '';
    updateRowNumbers();
});

add_todo_btn.addEventListener('click', function () {
    if (!todo_input.value.trim() || !todo_input2.value.trim() || !todo_input3.value.trim() || !todo_input4.value.trim() || !todo_input5.value.trim()) {
        return alert('Please fill all fields');
    }

    var list_item = `
        <tr>
            <td></td>
            <td>${todo_input.value}</td>
            <td>${todo_input2.value}</td>
            <td>${todo_input3.value}</td>
            <td>${todo_input4.value}</td>
            <td>${todo_input5.value}</td>
            <td>
                <button class="editBtn" onclick="edit(this)">edit</button>
                <button class="delBtn" onclick="deleteFun(this)">del</button>
            </td>
        </tr>`;
    todo_list.innerHTML += list_item;

    updateRowNumbers();

    todo_input.value = '';
    todo_input2.value = '';
    todo_input3.value = '';
    todo_input4.value = '';
    todo_input5.value = '';
});

function updateRowNumbers() {
    const rows = todo_list.querySelectorAll('tr');
    rows.forEach((row, index) => {
        row.querySelector('td').innerText = index + 1;
    });
}

function edit(element) {
    var row = element.closest('tr');
    var cells = row.querySelectorAll('td');
    var previousValues = [];
    cells.forEach((cell, index) => {
        if (index > 0 && index < cells.length - 1) {
            previousValues.push(cell.innerText);
        }
    });

    var updatedValues = previousValues.map((value, index) => {
        return prompt(`Edit value for ${['Name', 'English', 'Urdu', 'General Knowledge', 'Science'][index]}`, value);
    });

    updatedValues.forEach((value, index) => {
        cells[index + 1].innerText = value;
    });
}

function deleteFun(element) {
    element.closest('tr').remove();
    updateRowNumbers();
}


function getUpdate() {

    console.log("Updating List...");
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if (localStorage.getItem('itemsJson') == null) {
        itemArray = [];
        itemArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemArray))
    }
    else {
        itemArrayStr = localStorage.getItem('itemsJson')
        itemArray = JSON.parse(itemArrayStr);
        itemArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemArray))
    }
    update();
}

function update() {

    if (localStorage.getItem('itemsJson') == null) {
        itemArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemArray))
    }
    else {
        itemArrayStr = localStorage.getItem('itemsJson')
        itemArray = JSON.parse(itemArrayStr);
    }
    // Populate the table
    let tableBody = document.getElementById("tableBody");
    let str = "";
    itemArray.forEach((element, index) => {
        str += `
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td> 
        <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td> 
        </tr>`;

    });
    tableBody.innerHTML = str;
    document.getElementById('title').value = "";
    document.getElementById('description').value = "";

}

add = document.getElementById("add");
add.addEventListener("click", getUpdate);
update();

function deleted(itemIndex) {
    console.log("Delete", itemIndex);
    itemArrayStr = localStorage.getItem('itemsJson')
    itemArray = JSON.parse(itemArrayStr);
    // Delete itemIndex element from the array
    itemArray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemArray));
    update();

}

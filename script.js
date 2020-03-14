//UI variables.

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
const items = ['item 1', 'item 2', 'item 3'];

//load items
loadItems();

//call event listeners
eventListeners()

function eventListeners() {
    //submit event
    form.addEventListener("submit", addNewItem);
    //delete an item
    taskList.addEventListener("click", deleteItem);
    //delete All Items
    btnDeleteAll.addEventListener("click", deleteAllItems);
}

function loadItems(){
    items.forEach(function(item) {
        createItem(item)
    });

}
function createItem(text){
        // create li
        const li = document.createElement("li");
        li.className = "list-group-item list-group-item-secondary";
        li.appendChild(document.createTextNode(text))
    
        // create a
        const a = document.createElement("a");
        a.classList = "delete-item float-right";
        a.setAttribute = ("href", "#");
        a.innerHTML = "<i class='fas fa-times'></i>";
        a.style.color = "red";
    
        //adding a to li
        li.appendChild(a);
    
        //adding li to ul
        taskList.appendChild(li);
}
//add new item
function addNewItem(e) {
    if (input.value === "") {
        alert("add  a new item");
    }

    //create item
    createItem(input.value);


    //clear input
    input.value = "";

    e.preventDefault();
}

//delete an item

function deleteItem(e) {
    if (e.target.className === 'fas fa-times') {
        e.target.parentElement.parentElement.remove();
    }
    e.preventDefault();
}

function deleteAllItems(e) {

    if (confirm("are you sure to delete all ToDo?")) {

        while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild);
        }
    }
    e.preventDefault();
}
//5:17 de kaldim class list ekliyorum saygilar hayirli forumlar
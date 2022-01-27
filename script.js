function addItem() {
    let newItem = document.createElement("div");
    newItem.classList.add("item")
    newItem.innerHTML = document.getElementById("box").value;
    newItem.onclick = removeItem;
    document.getElementById("list").appendChild(newItem);
    saveList();
}
function removeItem() {
    document.getElementById("list").removeChild(this);
    saveList();
}

function saveList() {
    localStorage.storageList = document.getElementById("list").innerHTML;
}

function loadList() {
   document.getElementById("list").innerHTML = localStorage.storageList;
   for (let i = 0;i < list.children.length; i++) {
       list.children[i].onclick = removeItem;
   }
}

function saveList() {
    localStorage.storageList = document.getElementById("list").innerHTML;
}
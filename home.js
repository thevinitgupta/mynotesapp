//My Notes

showNotes();

//If user adds a note and a title,it will be stored in the localStorage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {

    let addTxt = document.getElementById('addTxt');
    let addTitle = document.getElementById('addTitle');
    let notes = localStorage.getItem('notes');

    if (notes === null) {
         notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let valObj = {
        title: addTitle.value,
        text: addTxt.value
    }

    notesObj.push(valObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";

    showNotes();

})

//function to show notes from localStorage
function showNotes() {
    let notes = localStorage.getItem('notes');

    if (notes === null) {
         notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let html = '';

    notesObj.forEach(function (element, index) {
        html += ` <div class="card my-2 mx-2 noteCard" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.text}</p>
            <button id = "${index}" onClick = "deleteBtn(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div> `;
    });

    let notesDiv = document.getElementById('notesDiv');

    if (notesObj.length != 0) {
        notesDiv.innerHTML = html;
    } else {
        notesDiv.innerHTML = "No Notes Available!";
    }
}

//function to delete a note
function deleteBtn(index) {
    let notes = localStorage.getItem('notes');

    if (notes === null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

//Search a note
let search = document.getElementById("searchInput");
search.addEventListener("input", function () {

    let inputValue = search.value;
    let cards = document.getElementsByClassName('noteCard');

    Array.from(cards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        let cardTitle = element.getElementsByTagName("h5")[0].innerText;
        if (cardTxt.includes(inputValue)) {
            element.style.display = "block";
        } else if (cardTitle.includes(inputValue)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
      
    })
})

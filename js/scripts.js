// business logic for library
let myLibrary = [];

function Book(title, author, status) {
  this.title = title;
  this.author = author;
  this.status = status;
  this.currentId = 0;
}

// Book.prototype.addID = function() {
//   this.currentId += 1;
//   return this.currentId;
// }

// function deleteBook = function(id) {
//   for (let i=0; i< this.myLibrary.length; i++) {
//     if (this.myLibrary[i]) {    
//       if (this.myLibrary[i].id == id) {
//         delete this.myLibrary[i];
//         return true;
//       }
//     }                          
//   };
//   return false;
// }


function addBookToLibrary(x) {
  myLibrary.push(x)
}


// user interface
$(document).ready(function() {
  $("form#form-group").submit(function(event) {
    event.preventDefault();
    let inputtedTitle = ($("input#inputted-title").val());
    let inputtedAuthor = ($("input#inputted-author").val());
    let inputtedStatus = ($("input#inputted-status").val());
    $("input#inputted-title").val("");
    $("input#inputted-author").val("");
    $("input#inputted-status").val("");
    let book = new Book(inputtedTitle, inputtedAuthor, inputtedStatus);
    addBookToLibrary(book);
    
    let bookString = "";
    myLibrary.forEach(function(book) {
      bookString += "<li>" + book.title + ", " + book.author + ", " + book.status + "</li>"
    });

    bookString = "<ul>" + bookString + "</ul>"; 
    document.querySelector("#list").innerHTML = bookString;
  });
});


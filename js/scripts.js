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

//event handlers, take in events as parameters 
function removeBookVanilla(event) {
  let index = event.target.getAttribute("data-index");   //target is an event object property and its value is the html element that was clicked (button)
  removeBook(index);
}

function removeBookjQuery(event) { //event not needed
  let index = $(this).attr("data-index");                    //this is button itself.
  removeBook(index);
}

function removeBook(index) {
  myLibrary.splice(Number(index), 1);   //1 item starting at that index. Number converts string to number (can also use parseInt, but needs second arguement). with num 0, while convert improperly. Just use Number!
  displayBooks();
}
//If a chunk of code needs to be called from 2 or more different places then that chunk must be separated out into its own standalone function.
//In this case, displaybooks needed to be called whenever a book was added or removed from the array since both of those things change the list. 
//it needs to be displayed again. Same chunks of code to be called from two different locations. FFC outdated. rigid, rely on unit testing. One right way and that's it. 
function displayBooks() {
  let bookString = "";
  myLibrary.forEach(function(book, index) { //3 arguements by default, would work but not able to act if no arguements, 1st item, 2nd index, 3rd original array in entirety. map and filter same thing. there whether you use them or not
    bookString += "<li>" + book.title + ", " + book.author + ", " + book.status + "<button data-index=" + index + ">Remove</button>" + "</li>"
  });

  bookString = "<ul>" + bookString + "</ul>"; 
  document.querySelector("#list").innerHTML = bookString; //now thatthe line actually exists, now action can be performed. 

  //like in css, this means button withing #list
  // $("#list button").on("click", removeBookjQuery);

  document.querySelectorAll("#list button").forEach(function(button){
    button.addEventListener("click", removeBookVanilla);
  });
} //when using curly braces as code block, no semicolon


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
    //61-74 standalone function call from somewhere to redisplay list once book is removed. But way it is written, it is impossible to get 
    //to line 61

    displayBooks();




  });
});
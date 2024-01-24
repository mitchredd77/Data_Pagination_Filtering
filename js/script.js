/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
*/
const studentContainer = document.querySelector('.student-list')
const paginationList = document.querySelector('.link-list')
const searchInput = document.querySelector('#search')

const studentsPerPage = 9;

//Search function for students
searchInput.addEventListener("keyup", () => {
   const newData = [];
   const searchString = searchInput.value.toLowerCase();
   for (i = 0; i < data.length; i++) {
     const student_last = data[i].name.last.toLowerCase();
     const student_first = data[i].name.first.toLowerCase();
     if (student_last.includes(searchString) || student_first.includes(searchString)) {
       newData.push(data[i]);
     }
     }
     if (newData.length > 0) {
      console.log(newData.length);
       addPagination(newData);
       showPage(newData, 1);
     } else {
       studentContainer.innerHTML = "<h3>No results were found.</h3>";
       studentContainer.innerHTML = html;
       paginationList.innerHTML = "";
     }
 });

 //Displays page with correct number of students on page
function showPage(list, page) {
   const startStudent = (page * studentsPerPage) - studentsPerPage;
   const lastStudent = (page * studentsPerPage) - 1;
   studentContainer.innerHTML = '';
   for (let i = 0; i < list.length; i++) {
      const student = list[i];
      if (i>=startStudent && i<=lastStudent) {
       const studentTemplate = `<li class="student-item cf">
       <div class="student-details">
         <img class="avatar" src=${student.picture.thumbnail} alt="Profile Picture">
         <h3>${student.name.first} ${student.name.last}</h3>
         <span class="email">ethel.dean@example.com</span>
       </div>
       <div class="joined-details">
         <span class="date">${student.registered.date}</span>
       </div>
     </li>`
     studentContainer.insertAdjacentHTML("beforeend", studentTemplate);
   }
   }
 }

// Creates buttons for each page
function addPagination(list) {
  const buttons = Math.ceil(list.length / studentsPerPage);
  paginationList.innerHTML = '';
  for (let i=1; i <= buttons; i++) {
    const buttonTemplate = `<li>
    <button>${i}</button>
  </li>
  `;
  paginationList.insertAdjacentHTML("beforeend", buttonTemplate);
}
paginationList.querySelector("button").classList.add("active");
}

//Adding Listener for navigation buttons
paginationList.addEventListener("click", (e) => {
   const activeButton = document.querySelector(".link-list button.active");
 
   if (e.target.tagName === "BUTTON") {
      activeButton.classList.remove("active");
      e.target.classList.add("active");
      showPage(data, parseInt(e.target.textContent));
   }
 });

// Call functions
addPagination(data);
showPage(data, 1);
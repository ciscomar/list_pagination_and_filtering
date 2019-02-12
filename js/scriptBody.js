let students = document.getElementsByClassName('student-item cf');
const parent = document.querySelector('.page');
const child = document.querySelector('.student-list');
const div = document.createElement('div');
div.className = 'pagination';
const ul = document.createElement('ul');
div.appendChild(ul);
parent.insertBefore(div,child.nextElementSibling);

const numberStudents = 10;
let start = 1;

//Call Functions to start the page

startPage();
appendPageLinks();
showPage();

//Function to get the number of pages
function pages(){
   return Math.ceil(students.length / numberStudents);
   
}

//Function to start with the first students
function startPage(){

   for(let i = 10; i < students.length; i++){
      
      students[i].style.display = 'none';

   }
}

//Function to show the pages links on the bottom
function appendPageLinks(){

   for(let i=0; i < pages(); i++){

      let li = document.createElement('li');
      let a = document.createElement('a');

      a.textContent = start.toString();
      a.href = '#';
      ul.appendChild(li);
      li.appendChild(a);
      start++;
   }
}

//Function to select the students when selecting the number of page
function showPage(){

   let pageSelected = document.querySelector('.pagination');    
   pageSelected.addEventListener('click',(e) =>{
      document.querySelector('h2').textContent='STUDENTS';
      e.preventDefault();
      let selected = parseInt(e.target.textContent);
      const last = (selected * 10)-1;
      const first = (selected * 10) - numberStudents;

      for (let i = 0; i < students.length ; i++){

         if(i < first || i > last)
         {
            students[i].style.display = 'none';

         }else
         {
            students[i].style.display = 'block';
         }     
      }
   });
}




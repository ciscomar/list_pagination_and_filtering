const header = document.querySelector('.page-header');
const divheader = document.createElement('div');
divheader.className ='student-search';
const input = document.createElement('input');
input.placeholder='Search for students...';
divheader.appendChild(input);
const btn = document.createElement('button');
btn.textContent='Search';
divheader.appendChild(btn);

header.appendChild(divheader);


//Listen for search button click
btn.addEventListener('click', search);

//Function to search for matching 
function search(){

    let text = input.value.toLowerCase();
    let items = child.getElementsByTagName('h3');
    let cont=0;
    Array.from(items).forEach(function(item){
        let itemName= item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1){

            item.parentElement.parentElement.style.display= 'block';
            document.querySelector('h2').textContent='STUDENTS';

        }else
        {
            item.parentElement.parentElement.style.display= 'none';
            cont++;
        }
    });
//Check no students were dIsplayed to display 'NO RESULTS' message
    if(cont == students.length){
        console.log(cont)
        console.log(students.length)
        document.querySelector('h2').textContent='NO RESULTS';
    }
}

// Menu Slide in
const logButton = document.querySelector('.logButton');
const formSection = document.querySelector('.formSection');

logButton.addEventListener('click', formSlideIn);

function formSlideIn(e) {
    e.preventDefault()
    formSection.style.left = '0';
}


//get the data

// function getData() {
//     const getFormData = document.querySelector('.jobDetailForm input').value;

//     console.log(getFormData);
    

//     const dataOutput = Array.from(document.querySelectorAll('.jobDetailForm input')).reduce((acc, input) => ({ ...acc, [input.placeholder]: input.value }), {});

//     console.log(dataOutput);
    
    
// }

const formElement = document.querySelector('.jobDetailForm');


formElement.addEventListener('submit', function(e) {
    e.preventDefault();
    //after submit it closes the form
    formSection.style.left = '-100%';

    const companyName = document.querySelector('.cName').value;
    const jobRole = document.querySelector('.jobTitle').value;
    const dateApplied = document.querySelector('.date').value;
    const jobSource = document.querySelector('.source').value;
    const fullName = document.querySelector('.fullName').value;
    const emailAdd = document.querySelector('.email').value;
    const urlLinkedin = document.querySelector('.linkedin').value;
    const jobTitle = document.querySelector('.title').value;

    
    
})
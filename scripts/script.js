// Menu Slide in
const logButton = document.querySelector('.logButton');
const formSection = document.querySelector('.formSection');

logButton.addEventListener('click', formSlideIn);

function formSlideIn(e) {
    e.preventDefault()
    formSection.style.left = '0';
}


//get the data

function getData() {
    const getFormData = document.querySelector('.jobDetailForm input').value;

    console.log(getFormData);
    

    const dataOutput = Array.from(document.querySelectorAll('.jobDetailForm input')).reduce((acc, input) => ({ ...acc, [input.placeholder]: input.value }), {});

    console.log(dataOutput);
    
    
}
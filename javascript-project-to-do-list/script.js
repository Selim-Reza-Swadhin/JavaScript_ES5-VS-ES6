// Write your code here
const selectItem = document.querySelector('.body ul');
const selectForm = document.querySelector('.todo');

//Select Item
selectItem.addEventListener('click', (ei) => {
    if(ei.target.tagName==='LI') {
        if(ei.target.classList.contains('done')) {
            ei.target.classList.remove('done');
        } else {
            ei.target.classList.add('done');
        }
    }

    if(ei.target.classList.contains('remove')) {
        ei.target.parentNode.remove()
    }
})

//Select Form
selectForm.addEventListener('submit', (ei) => {
    ei.preventDefault();
    const inpute = ei.target.task.value;
    if(validateInput(inpute, ei.target.task)) {
        selectItem.insertAdjacentElement('afterbegin', newItem(ei.target.task.value));
        ei.target.task.value = '';
    }
});

const validateInput = (inputt, elementt) => {
    if(inputt) {
        elementt.parentNode.classList.remove('error');
        return true;
    } else {
        elementt.parentNode.classList.add('error');
        return false;
    }
}

const newItem = (contentt) => {
    const createAItem = document.createElement('li');
    createAItem.textContent = contentt;
    createAItem.insertAdjacentElement('afterbegin', removeButton());
    return createAItem;
}

const removeButton = () => {
    const createRemoveBtn = document.createElement('span');
    createRemoveBtn.classList.add('remove');
    createRemoveBtn.textContent = 'X';
    return createRemoveBtn;
}


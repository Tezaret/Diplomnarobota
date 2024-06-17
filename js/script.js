//donat
const btnNext = document.getElementById('donat-next');
const txtDonate = document.getElementById('donat-text');
const amountField = document.getElementById('amount');
const btnCloseDonat = document.getElementById('btn__close-donat');
const formDonat = document.getElementById('form-donat');
const cover = document.getElementById('cover');
const formBank = document.getElementById('form-bank');
const btnDonateProject = document.querySelectorAll('.donate');

btnDonateProject.forEach((elem) => {
  elem.addEventListener('click', () => {
    document.body.classList.add('nonScroll');
    cover.classList.remove('hidden');
    formDonat.classList.remove('hidden');
  });
});


function closeDonat() {
    document.body.classList.remove('nonScroll');
    cover.classList.add('hidden');
    formDonat.classList.add('hidden');
}

cover.addEventListener('click', closeDonat);
btnCloseDonat.addEventListener('click', closeDonat);

function validateAmount() {
  if (amountField.validity.valid) {
      btnNext.classList.remove('disable');
  }
  else {
      btnNext.classList.add('disable');
  }
}

btnNext.addEventListener('click', (e) => {
    if (btnNext.classList.contains('disable')) return false;
    amountField.value = '';
    txtDonate.value = '';
    formDonat.classList.add('hidden');
    formBank.classList.remove('hidden');
    e.preventDefault();
});

amountField.addEventListener('input', validateAmount);

//currency 
const wrapperSelect2 = document.getElementById('wrapper-dropdown-2');
const dropdownItems2 = document.querySelectorAll('.dropdown-item-2');
const spanSelect2 = document.getElementById('selected-item-2');

const selectItem2 = (event) => {
    if (event.target.classList.contains('dropdown-item-2')) {
        spanSelect2.innerHTML = event.target.innerHTML;
        spanSelect2.classList.add('active');
    }
};

wrapperSelect2.addEventListener('click', () => {
    wrapperSelect2.classList.toggle('active');
    dropdownItems2.forEach((elem) => {
        elem.addEventListener('click', selectItem2);
    });
});

//bank card
const btnDonate = document.getElementById('donat-button');
const cardNumberField = document.getElementById('card-number');
const monthField = document.getElementById('selected-item-3');
const yearField = document.getElementById('selected-item-4');
const cardholderField = document.getElementById('cardholder');
const cvcField = document.getElementById('cvc');
const btnCloseBank = document.getElementById('btn__close-bank');

function validateCard() {
    if (cardNumberField.validity.valid && monthField.validity.valid && yearField.validity.valid && cardholderField.validity.valid && cvcField.validity.valid && monthField.value !== '' && yearField.value !== '' && cardholderField.value !== '' && cardNumberField.value.length == 16 && cvcField.value.length == 3) {
        btnDonate.classList.remove('disable');
        return true;
    }
    else {
        btnDonate.classList.add('disable');
        return false;
    }
}

function closeBank() {
    document.body.classList.remove('nonScroll');
    cover.classList.add('hidden');
    formBank.classList.add('hidden');
}

cover.addEventListener('click', closeBank);
btnCloseBank.addEventListener('click', closeBank);

btnDonate.addEventListener('click', (e) => {
    e.preventDefault();
    if (!validateCard()) {
        return false;
    }
    else {
        closeBank();
    }
});

//month
const wrapperSelect3 = document.getElementById('wrapper-dropdown-3');
const dropdownItems3 = document.querySelectorAll('.dropdown-item-3');
const spanSelect3 = document.getElementById('selected-item-3');

const selectItem3 = (event) => {
    if (event.target.classList.contains('dropdown-item-3')) {
        spanSelect3.value = event.target.innerHTML;
        spanSelect3.classList.add('active');
    }
};

wrapperSelect3.addEventListener('click', () => {
    wrapperSelect3.classList.toggle('active');
    wrapperSelect4.classList.remove('active');
    dropdownItems3.forEach((elem) => {
        elem.addEventListener('click', selectItem3);
    });
});

cardNumberField.addEventListener('keyup', function() {
    this.value =this.value.replace(/\D/, '');
});

cvcField.addEventListener('keyup', function() {
    this.value =this.value.replace(/\D/, '');
});

cardholderField.addEventListener('keyup', function() {
    this.value =this.value.replace(/[0-9]/, '');
});


cardNumberField.addEventListener('input', validateCard);
monthField.addEventListener('input', validateCard);
yearField.addEventListener('input', validateCard);
cardholderField.addEventListener('input', validateCard);
cvcField.addEventListener('input', validateCard);

//year
const wrapperSelect4 = document.getElementById('wrapper-dropdown-4');
const dropdownItems4 = document.querySelectorAll('.dropdown-item-4');
const spanSelect4 = document.getElementById('selected-item-4');

const selectItem4 = (event) => {
    if (event.target.classList.contains('dropdown-item-4')) {
        spanSelect4.value = event.target.innerHTML;
        spanSelect4.classList.add('active');
    }
};

wrapperSelect4.addEventListener('click', () => {
    wrapperSelect4.classList.toggle('active');
    wrapperSelect3.classList.remove('active');
    dropdownItems4.forEach((elem) => {
        elem.addEventListener('click', selectItem4);
    });
});

function clearInput() {
    cardNumberField.value = '';
    monthField.value = '';
    yearField.value = '';
    cardholderField.value = '';
    cvcField.value = ''
};


btnDonate.addEventListener('click', () => {
    if (btnDonate.classList.contains('disable')) return false;
});

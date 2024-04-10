const gameForm = document.querySelector('.game-form');
const buttonSelect = document.querySelector('.game-button');
const resultFinal = document.querySelector('.game-result');


const finalResult = () => {

  // e.preventDefault();

  // const formData = new FormData(gameForm);
  
  // let selectOne = formData.get('first-selection');
  // let selectTwo = formData.get('second-selection');

  // let selectOne = document.querySelector('.first-selection');
  // let selectTwo = document.querySelector('.second-selection');

  let selectOne = document.querySelector('.first-selection').value;
  let selectTwo = document.querySelector('.second-selection').value;

  if (selectOne === selectTwo) {
    resultFinal.innerText = 'Egalitate';
  }

  if (selectOne === 'foarfeca') {
    if(selectTwo === 'hartie') {
      return 'Player 1 a castigat';
    }
    if(selectTwo === 'piatra') {
      return 'Player 2 a castigat';
    }
  } 
  
  else if (selectOne === 'piatra') {
    if (selectTwo === 'hartie') {
      return 'Player 2 a castigat';
    }
    if (selectTwo === 'foarfeca') {
      return 'Player 1 a castigat';
    }
  } 

  else if (selectOne === 'hartie') {
    if (selectTwo === 'piatra') {
      return 'Player 1 a castigat';
    }
    if (selectTwo === 'foarfeca') {
      return 'Player 2 a castigat';
    }
  }

  if (selectTwo === 'foarfeca') {
    if (selectOne === 'hartie') {
      return 'Player 2 a castigat';
    }
    if (selectOne === 'piatra') {
      return 'Player 1 a castigat';
    }
  }

  else if (selectTwo === 'hartie') {
    if (selectOne === 'piatra') {
      return 'Player 2 a castigat';
    }
    if (selectOne === 'foarfeca') {
      return 'Player 1 a castigat';
    }
  }

  else if (selectTwo === 'piatra') {
    if (selectOne === 'hartie') {
      return 'Player 1 a castigat';
    }
    if (selectOne === 'foarfeca') {
      return 'Player 2 a castigat';
    }
  }
};

gameForm.addEventListener('submit', finalResult);


const final = () => {
  resultFinal.style.display = 'block';
  final.innerText = finalResult.value;

};

buttonSelect.addEventListener('click', final);

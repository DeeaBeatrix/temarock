const gameForm = document.querySelector('.game-form');
const buttonSelect = document.querySelector('.game-button');
const resultFinal = document.querySelector('.game-result');
// const selectOne = document.querySelector('.first-selection');
// const selectTwo = document.querySelector('.second-selection');

const finalResult = () => {
  console.log('text')

  const formData = new FormData(gameForm);
  
  let selectOne = formData.get('first-selection');
  let selectTwo = formData.get('second-selection');

  // let selectOne = document.querySelector('.first-selection');
  // let selectTwo = document.querySelector('.second-selection');

  // const playerOne = selectOne.value;
  // const playerTwo = selectTwo.value;

  // let selectOne = document.querySelector('.first-selection').value;
  // let selectTwo = document.querySelector('.second-selection').value;

  if (selectOne === selectTwo) {
    return 'Egalitate';
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

const final = (e) => {
  e.preventDefault();

  resultFinal.style.display = 'block';
  resultFinal.innerText = finalResult();
};

gameForm.addEventListener('submit', final);

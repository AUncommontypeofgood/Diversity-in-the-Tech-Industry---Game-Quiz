const questionDivOne = document.querySelector(`.questionOne`);
const answerDivOne = document.querySelector(`.answerOne`);
const messageDivOne = document.querySelector(`.messageOne`);

const questionDivTwo = document.querySelector(`.questionTwo`);
const answerDivTwo = document.querySelector(`.answerTwo`);
const messageDivTwo = document.querySelector(`.messageTwo`);

const questionDivThree = document.querySelector(`.questionThree`);
const answerDivThree = document.querySelector(`.answerThree`);
const messageDivThree = document.querySelector(`.messageThree`);

const questionDivFour = document.querySelector(`.questionFour`);
const answerDivFour= document.querySelector(`.answerFour`);
const messageDivFour = document.querySelector(`.messageFour`);

const questionDivFive = document.querySelector(`.questionFive`);
const answerDivFive = document.querySelector(`.answerFive`);
const messageDivFive = document.querySelector(`.messageFive`);

fetch('questions.json')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    const questionThree = data.find((question) => {
      return question.name === "questionThree";
    });
    console.log("questionThree", questionThree);

    questionDivThree.textContent = questionThree.questionThree;
    for (const answer of questionThree.answerThree) {
      const answerButton = document.createElement('div');
      answerButton.classList.add('answer');
      answerButton.textContent = answer.text
      answerButton.addEventListener('click', () => {
        if (answer.correct) {
          messageDivThree.textContent = 'Correct!';
          messageDivThree.style.color = 'green';
        } else {
          messageDivThree.textContent = 'Incorrect!';
          messageDivThree.style.color = 'red';
        }
      });
      answerDivThree.appendChild(answerButton);
    }
  })
  .catch(console.log)

fetch('questions.json')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    const questionTwo = data.find((question) => {
      return question.name === "questionTwo";
    });
    console.log("questionTwo", questionTwo);

    questionDivTwo.textContent = questionTwo.questionTwo;
    for (const answer of questionTwo.answerTwo) {
      const answerButton = document.createElement('div');
      answerButton.classList.add('answer');
      answerButton.textContent = answer.text
      answerButton.addEventListener('click', () => {
        if (answer.correct) {
          messageDivTwo.textContent = 'Correct!';
          messageDivTwo.style.color = 'green';
        } else {
          messageDivTwo.textContent = 'Incorrect!';
          messageDivTwo.style.color = 'red';
        }
      });
      answerDivTwo.appendChild(answerButton);
    }
  })
  .catch(console.log)

fetch('questions.json')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    const questionOne = data.find((question) => {
      return question.name === "questionOne";
    });
    console.log("questionOne", questionOne);

    questionDivOne.textContent = questionOne.questionOne;
    for (const answer of questionOne.answerOne) {
      const answerButton = document.createElement('div');
      answerButton.classList.add('answer');
      answerButton.textContent = answer.text
      answerButton.addEventListener('click', () => {
        if (answer.correct) {
          messageDivOne.textContent = 'Correct!';
          messageDivOne.style.color = 'green';
        } else {
          messageDivOne.textContent = 'Incorrect!';
          messageDivOne.style.color = 'red';
        }
      });
      answerDivOne.appendChild(answerButton);
    }
  })
  .catch(console.log)

fetch('questions.json')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    const questionFour = data.find((question) => {
      return question.name === "questionFour";
    });
    console.log("questionFour", questionFour);

    questionDivFour.textContent = questionFour.questionFour;
    for (const answer of questionTwo.answerFour) {
      const answerButton = document.createElement('div');
      answerButton.classList.add('answer');
      answerButton.textContent = answer.text
      answerButton.addEventListener('click', () => {
        if (answer.correct) {
          messageDivTwo.textContent = 'Correct!';
          messageDivTwo.style.color = 'green';
        } else {
          messageDivTwo.textContent = 'Incorrect!';
          messageDivTwo.style.color = 'red';
        }
      });
      answerDivFour.appendChild(answerButton);
    }
  })
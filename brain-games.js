window.onload = function startEven() {
	let textInConsole = document.getElementById("description");
	let userAnswer = document.getElementById("user-answer");
	let btnStartGame = document.querySelector("input[value='Start game']");

	let selectElement = document.querySelector('.game');
	userAnswer.disabled = true;
	
	//определяем игру выбранную пользователем
	selectElement.addEventListener('change', (e) => {
		console.log(e.target.value);
		switch (selectElement.value) {
			case 'even':
				btnStartGame.onclick = startGameEven;
			break;
			case 'calc':
				btnStartGame.onclick = startGameCalc;
			break;
			case 'prime':
				btnStartGame.onclick = startGamePrime;
			break;
			case 'progression':
					btnStartGame.onclick = startGameProgression;
			break;
			case 'gcd':
					btnStartGame.onclick = startGameGcd;
			break;
			default:
				//btnStartGame.onclick = startGameEven;
		}
	  }
	);

	let counter = 0;

	function getRandomNum(min, max) {
		let rand = min + Math.random() * (max + 1 - min);
		return Math.floor(rand);
	}

	function isEven(num) {
		return num % 2 === 0;
	}

	function startGameEven() {
		counter = 0;
		userAnswer.disabled = false;
		textInConsole.innerHTML = `<div>Answer "yes" if number even otherwise answer "no".</div>`;
		let question = getRandomNum(1, 100);
		textInConsole.innerHTML += `<div class='userText'>${question}</div>`;
		userAnswer.onkeydown = function(e) {
			if (e.key === "Enter") {
				let answer = userAnswer.value;
				let rightAnswer = isEven(question) ? 'yes' : 'no';

				if (answer === rightAnswer) {
					counter += 1;
					console.log(counter);
					userAnswer.value = "";
					textInConsole.innerHTML += `<div class='userText'>${answer}</div>`;
					textInConsole.innerHTML += `<div>Right!</div>`;
					question = getRandomNum(1, 100);
					textInConsole.innerHTML += `<div class='userText'>${question}</div>`;
					if (counter >= 3) {
						textInConsole.removeChild(textInConsole.childNodes[textInConsole.childNodes.length - 1]);
						textInConsole.innerHTML += `<div>Congratulations!</div>`;
						userAnswer.disabled = true;
						counter = 0;
					}
				} else {
					userAnswer.value = "";
					textInConsole.innerHTML += `<div>${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.</div>`;
					textInConsole.innerHTML += `<div>You gave '${counter}' correct answers. Let's try again!</div>`;
					userAnswer.disabled = true;
					counter = 0;
				}

				while (textInConsole.clientHeight > 230) {
					textInConsole.removeChild(textInConsole.childNodes[1]);
				}
			}
		}
	}

	const operators = ['+', '-', '*'];

	function performOperation(a, b, c) {
		switch (c) {
			case '+':
				return a + b;
			case '-':
				return a - b;
			case '*':
				return a * b;
			default:
				return null;
		}
	};

	function startGameCalc() {
		counter = 0;
		userAnswer.disabled = false;
		textInConsole.innerHTML = `<div>What is the result of the expression?</div>`;
		let num1 = getRandomNum(1, 20);
		let num2 = getRandomNum(1, 20);
		let operator = operators[getRandomNum(Math.floor(Math.random()), operators.length - 1)];
		let question = `${num1} ${operator} ${num2}`;
		textInConsole.innerHTML += `<div class='userText'>${question}</div>`;

		userAnswer.onkeydown = function(e) {
			if (e.key === "Enter") {
				let answer = userAnswer.value;
				let rightAnswer = String(performOperation(num1, num2, operator));
				if (answer === rightAnswer) {
					counter += 1;
					userAnswer.value = "";
					textInConsole.innerHTML += `<div class='userText'>${answer}</div>`;
					textInConsole.innerHTML += `<div>Right!</div>`;
					num1 = getRandomNum(1, 20);
					num2 = getRandomNum(1, 20);
					operator = operators[getRandomNum(Math.floor(Math.random()), operators.length - 1)];
					question = `${num1} ${operator} ${num2}`;
					textInConsole.innerHTML += `<div class='userText'>${question}</div>`;
					if (counter >= 3) {
						textInConsole.removeChild(textInConsole.childNodes[textInConsole.childNodes.length - 1]);
						textInConsole.innerHTML += `<div>Congratulations!</div>`;
						userAnswer.disabled = true;
						counter = 0;
					}
				} else {
					userAnswer.value = "";
					textInConsole.innerHTML += `<div>${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.</div>`;
					textInConsole.innerHTML += `<div>You gave '${counter}' correct answers. Let's try again!</div>`;
					userAnswer.disabled = true;
					counter = 0;
				}

				while (textInConsole.clientHeight > 230) {
					textInConsole.removeChild(textInConsole.childNodes[1]);
				}
			}
		}
	}

	function isPrime(num) {
		if (num <= 1) {
		  return false;
		}
	  
		for (let i = 2; i <= Math.sqrt(num); i += 1) {
		  if (num % i === 0) {
			return false;
		  }
		}
		return true;
	  };

	function startGamePrime() {
		counter = 0;
		userAnswer.disabled = false;
		textInConsole.innerHTML = `<div>Answer "yes" if given number is prime. Otherwise answer "no".</div>`;
		let question = getRandomNum(1, 100);
		textInConsole.innerHTML += `<div class='userText'>${question}</div>`;

		userAnswer.onkeydown = function(e) {
			if (e.key === "Enter") {
				let answer = userAnswer.value;
				let rightAnswer = isPrime(question) ? 'yes' : 'no';

				if (answer === rightAnswer) {
					counter += 1;
					userAnswer.value = "";
					textInConsole.innerHTML += `<div class='userText'>${answer}</div>`;
					textInConsole.innerHTML += `<div>Right!</div>`;
					question = getRandomNum(1, 100);
					textInConsole.innerHTML += `<div class='userText'>${question}</div>`;
					if (counter >= 3) {
						textInConsole.removeChild(textInConsole.childNodes[textInConsole.childNodes.length - 1]);
						textInConsole.innerHTML += `<div>Congratulations!</div>`;
						userAnswer.disabled = true;
						counter = 0;
					}
				} else {
					userAnswer.value = "";
					textInConsole.innerHTML += `<div>${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.</div>`;
					textInConsole.innerHTML += `<div>You gave '${counter}' correct answers. Let's try again!</div>`;
					userAnswer.disabled = true;
					counter = 0;
				}

				while (textInConsole.clientHeight > 230) {
					textInConsole.removeChild(textInConsole.childNodes[1]);
				}
			}
		}
	}

	function getProgression(start, diff, lengthProgression) {
		let progression = [];

		for (let i = 0; i < lengthProgression; i += 1) {
			progression.push(start + diff * i);
		}

		return progression;
	}

	function startGameProgression() {
		counter = 0;
		userAnswer.disabled = false;
		textInConsole.innerHTML = `<div>What number is missing in the progression?</div>`;
		let lengthProgression = 10;
		let start = getRandomNum(1, 100);
		let diff = getRandomNum(1, 10);
		
		let progression = getProgression(start, diff, lengthProgression);
		let hiddenElementPosition = getRandomNum(1, lengthProgression);
		let rightAnswer = String(progression[hiddenElementPosition]);
		progression[hiddenElementPosition] = '..';
		let question = `${progression.join(' ')}`;

		textInConsole.innerHTML += `<div class='userText'>${question}</div>`;

		userAnswer.onkeydown = function(e) {
			console.log(e)
			if (e.key === "Enter") {
				let answer = userAnswer.value;
				if (answer === rightAnswer) {
					counter += 1;
					console.log(counter);
					userAnswer.value = "";
					textInConsole.innerHTML += `<div class='userText'>${answer}</div>`;
					textInConsole.innerHTML += `<div>Right!</div>`;

					start = getRandomNum(1, 100);
					diff = getRandomNum(1, 10);
					
					progression = getProgression(start, diff, lengthProgression);
					hiddenElementPosition = getRandomNum(1, lengthProgression);
					rightAnswer = String(progression[hiddenElementPosition]);
					progression[hiddenElementPosition] = '..';
					question = `${progression.join(' ')}`;

					textInConsole.innerHTML += `<div class='userText'>${question}</div>`;
					if (counter >= 3) {
						textInConsole.removeChild(textInConsole.childNodes[textInConsole.childNodes.length - 1]);
						textInConsole.innerHTML += `<div>Congratulations!</div>`;
						userAnswer.disabled = true;
						counter = 0;
					}
				} else {
					userAnswer.value = "";
					textInConsole.innerHTML += `<div>${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.</div>`;
					textInConsole.innerHTML += `<div>You gave '${counter}' correct answers. Let's try again!</div>`;
					userAnswer.disabled = true;
					counter = 0;
				}

				while (textInConsole.clientHeight > 230) {
					textInConsole.removeChild(textInConsole.childNodes[1]);
				}
			}
		}
	}

	function performGcd(a, b) {
		if (!b) {
			return a;
		}

		return performGcd(b, a % b);
	};

	function startGameGcd() {
		counter = 0;
		userAnswer.disabled = false;
		textInConsole.innerHTML = `<div>Find the greatest common divisor of given numbers.</div>`;
		let num1 = getRandomNum(1, 100);
		let num2 = getRandomNum(1, 100);
		let question = `${num1} ${num2}`;

		textInConsole.innerHTML += `<div class='userText'>${question}</div>`;

		userAnswer.onkeydown = function(e) {
			if (e.key === "Enter") {
				let answer = userAnswer.value;
				let rightAnswer = String(performGcd(num1, num2));
				if (answer === rightAnswer) {
					counter += 1;
					userAnswer.value = "";
					textInConsole.innerHTML += `<div class='userText'>${answer}</div>`;
					textInConsole.innerHTML += `<div>Right!</div>`;

					num1 = getRandomNum(1, 100);
					num2 = getRandomNum(1, 100);
					question = `${num1} ${num2}`;
					rightAnswer = String(performGcd(num1, num2));

					textInConsole.innerHTML += `<div class='userText'>${question}</div>`;
					if (counter >= 3) {
						textInConsole.removeChild(textInConsole.childNodes[textInConsole.childNodes.length - 1]);
						textInConsole.innerHTML += `<div>Congratulations!</div>`;
						userAnswer.disabled = true;
						counter = 0;
					}
				} else {
					userAnswer.value = "";
					textInConsole.innerHTML += `<div>${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.</div>`;
					textInConsole.innerHTML += `<div>You gave '${counter}' correct answers. Let's try again!</div>`;
					userAnswer.disabled = true;
					counter = 0;
				}

				while (textInConsole.clientHeight > 230) {
					textInConsole.removeChild(textInConsole.childNodes[1]);
				}
			}
		}
	}
}

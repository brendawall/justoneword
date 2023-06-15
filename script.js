const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry => {
		console.log(entry)
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
			entry.target.classList.remove('hidden')
		}
	}))
})
  
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const logo = document.querySelector('.logo');
logo.playbackRate = 3;
setTimeout(() => {
	logo.classList.add('animation-end')
}, 3000);

function typeWriter(text, speed, pause, random) {
	const originalText = text.textContent;
	const modifiedText = originalText.split('');
	var randomSpeedArray = [];
	const pauseArray = ['.','!','?',',']
	let sum = 0;
	
	text.textContent = ''

	setTimeout(() => {
		for(let n = 0; n<modifiedText.length; n++) {
			if(pauseArray.includes(modifiedText[n])) {
				let randomSpeedItem = Math.floor(Math.random() * random * speed + pause);
				sum += randomSpeedItem;
				randomSpeedArray.push(sum)
			} else {
				let randomSpeedItem = Math.floor(Math.random() * random * speed);
				sum += randomSpeedItem;
				randomSpeedArray.push(sum)
			}
			
			setTimeout(() => {
				text.textContent += modifiedText[n]
			}, randomSpeedArray[n-1]);		

		}
	}, 4000);
}

  const paragraph = document.querySelector('p');
  const skipButton = document.querySelector('.skip')
  
  typeWriter(paragraph, 4, 50, 15)

const wordSection = document.querySelector('section.words');
const wordArray = [
	{word: 'Abyss', file: 'abyss'},
	{word: 'Alpha Omega', file: 'alpha-omega'},
	{word: 'Atonement', file: 'atonement'},
	{word: 'Boast', file: 'boast'},
	{word: 'Call', file: 'call'},
	{word: 'Commandment', file: 'commandment'},
	{word: 'Confess', file: 'confess'},
	{word: 'Divided', file: 'divided'},
	{word: 'Door', file: 'door'},
	{word: 'Ecstasy', file: 'ecstasy'},
	{word: 'Electricity', file: 'electricity'},
	{word: 'Eucharist', file: 'eucharist'},
	{word: 'Fullness', file: 'fullness'},
	{word: 'Gift', file: 'gift'},
	{word: 'Gobsmacked', file: 'gobsmacked'},
	{word: 'Grace', file: 'grace'},
	{word: 'Home 1', file: 'home-1'},
	{word: 'Home 2', file: 'home-2'},
	{word: 'Home 3', file: 'home-3'},
	{word: 'Listen', file: 'listen'},
	{word: 'Lo and Behold', file: 'lo-behold'},
	{word: 'Manifest', file: 'manifest'},
	{word: 'Redemption', file: 'redemption'},
	{word: 'Repent', file: 'repent'},
	{word: 'Revelation', file: 'revelation'},
	{word: 'Rule', file: 'rule'},
	{word: 'Salvation', file: 'salvation'},
	{word: 'Satan', file: 'satan'},
	{word: 'Satisfy', file: 'satisfy'},
	{word: 'Sin', file: 'sin'},
	{word: 'Star', file: 'star'},
	{word: 'Time', file: 'time'},
	{word: 'Veil', file: 'veil'}
]



const lessSpeed = document.querySelector('button.less-speed');
const moreSpeed = document.querySelector('button.more-speed');

lessSpeed.addEventListener("click", () => {
	speedOfRotation -= 0.5;
	if(speedOfRotation < 0) {
		speedOfRotation = 0;
	}
	lessSpeed.style.transform = 'scale(1.2)'
	setTimeout(() => {lessSpeed.style.transform = 'scale(1)'}, 100);
})

moreSpeed.addEventListener("click", () => {
	speedOfRotation += 0.5;
	if(speedOfRotation > 4) {
		speedOfRotation = 4;
	}
	moreSpeed.style.transform = 'scale(1.2)'
	setTimeout(() => {moreSpeed.style.transform = 'scale(1)'}, 100);
})

async function getTextContent(filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error('Failed to fetch the file.');
    }
    const textContent = await response.text();
    return textContent;
  } catch (error) {
    console.error(`Error reading file: ${error}`);
    return '';
  }
}

async function logTextContent(filePath) {
  const item = await getTextContent(filePath);
  console.log(item);
}


var speedOfRotation = 1.25;
var minFontSize = 1.25;
var maxFontSize = 1.85;

function generateDivs(numberOfDivs, circleRadius, container, rotationSpeed) {
	var angle = 360 / numberOfDivs; // Angle between each div
	var rotationAngle = 0; // Initial rotation angle

	for (var i = 0; i < numberOfDivs; i++) {
	  var div = document.createElement('div');
	  container.appendChild(div);
	}

	function animateDivs() {
	  rotationAngle += rotationSpeed * speedOfRotation; // Update the rotation angle

	  for (var i = 0; i < numberOfDivs; i++) {
		var div = container.children[i]; // Get the div element
		var divAngle = angle * i + rotationAngle; // Calculate the individual div angle

		var x = Math.cos((divAngle) * (Math.PI / 180)) * circleRadius;
		var y = Math.sin((divAngle) * (Math.PI / 180)) * circleRadius * 0.6;

		if (div) {
		  div.style.left = (container.offsetWidth / 2 + x) + 'px';
		  div.style.top = (container.offsetHeight / 2 + y) + 'px';
		  div.classList.add('word')
		}
	  }

	  requestAnimationFrame(animateDivs); // Call the function again for smooth animation
	}

	animateDivs(); // Start the animation
}

const largerSpinner = document.querySelector('section.words > .spin-container-one');
const smallerSpinner = document.querySelector('section.words > .spin-container-two');

generateDivs(Math.round(wordArray.length * 0.6), largerSpinner.clientWidth / 2.25, largerSpinner, 0.05)
generateDivs(Math.round(wordArray.length * 0.4), smallerSpinner.clientWidth / 2.25, smallerSpinner, 0.1)

function appendRandomWord() {
	const largerSpinnerItems = document.querySelectorAll('section.words > .spin-container-one > div');
	const smallerSpinnerItems = document.querySelectorAll('section.words > .spin-container-two > div');
	const jumbledWords = wordArray.sort((a, b) => 0.5 - Math.random());
	const spinnerItems = [];
	var spinnerItemsLength = largerSpinnerItems.length + smallerSpinnerItems.length;
	jumbledWords.forEach(function(word, index) {

		const newWordItem = document.createElement("span");

		if (index < largerSpinnerItems.length) {
			newWordItem.style.opacity = Math.random() / 2 + 0.6;
			newWordItem.textContent = word.word;
			newWordItem.style.fontSize = Math.random() * (maxFontSize - minFontSize) + minFontSize + 'rem';
			largerSpinnerItems[index].appendChild(newWordItem);
		}
		else {
			newWordItem.style.opacity = Math.random() / 3 + 0.6;
			newWordItem.textContent = word.word;
			newWordItem.style.fontSize =Math.random() * (maxFontSize - minFontSize) + minFontSize + 'rem';
			smallerSpinnerItems[index - largerSpinnerItems.length].appendChild(newWordItem);
		}
	});
}
appendRandomWord();

function randomFontSize(min, max, span) {
	let fontSize = (Math.random() * (max - min) + min);
	return fontSize;
}
  
  
  
  
  
  
  
  




  
  
  
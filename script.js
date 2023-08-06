// Parrelax Scrolling
window.addEventListener('scroll', function() {
	document.body.style.setProperty("background-position", `0% -${window.scrollY / 2}px`)
});

const logo = document.querySelector('.logo');
logo.playbackRate = 3;
setTimeout(() => {
	logo.classList.add('animation-end')
	document.querySelector('.div-1').classList.add('active')
}, 3000);


const wordSection = document.querySelector('section.words');
wordSection.style.animation = 'dissolve-in 1s 20s ease forwards'

function typeWriter(text, speed, pause, random) {
	const originalText = text.textContent;
	const modifiedText = originalText.split('');
	var randomSpeedArray = [];
	const pauseArray = ['.','!','?',',','(',')']
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
				if(text.textContent != originalText) {
					text.textContent += modifiedText[n]
				}
			}, randomSpeedArray[n-1]);		

		}
	}, 4000);
}

const paragraph = document.querySelector('p');
const originalText = paragraph.textContent;
const skipButton = document.querySelector('.skip-animation')
const hr = document.querySelector('.div-2')
setTimeout(() => {hr.classList.add('active')}, 20000);

window.addEventListener("DOMContentLoaded", () => {
	skipButton.addEventListener("click", () => {
		paragraph.textContent = ''
		paragraph.textContent = originalText;
		wordSection.style.opacity = 1;
		wordSection.classList.add('disable-css-animations')
		hr.classList.add('active')
		paragraph.classList.add('overlay-in')

		listWordItems.forEach(word => {word.style.animation = `blur-in forwards 1s ${Math.random() * 1}s ease`;});
	})
})

typeWriter(paragraph, 2, 100, 25)

// True = Spinning, False = List View
var viewingMode = true;

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

const randomWordSpan = document.querySelector('section.random-word-section > span')

function typeWriterDouble(word, speed) {
	const container = randomWordSpan;
	let currentIndex = 0;
	let isDeleting = false;
  
	function type() {
	  const currentText = isDeleting
		? word.substring(0, currentIndex - 1)
		: word.substring(0, currentIndex + 1);
  
	  container.textContent = currentText;
  
	  if (!isDeleting) {
		currentIndex++;
	  } else {
		currentIndex--;
	  }
  
	  if (!isDeleting && currentIndex === word.length + 1) {
		isDeleting = true;
		setTimeout(type, 5000); // Wait for 1 second after writing before starting deletion
	  } else if (isDeleting && currentIndex === 0) {
		container.textContent = ""; // Clear the container after deletion is complete
	  } else {
		setTimeout(type, speed); // Adjust speed to control typing speed
	  }
	}
  
	type();
}

function randomWordSection() {
	randomWordSpan.classList.add('word');
	const randomIndex = Math.floor((Math.random() * wordArray.length));
	const randomWord = wordArray[Math.floor(Math.random() * wordArray.length)].word;
	const randomWordArray = randomWord.split('');
	typeWriterDouble(randomWord, 50);
}

randomWordSection();

setInterval(() => {randomWordSection();}, 9000);

const lessSpeed = document.querySelector('button.less-speed');
const moreSpeed = document.querySelector('button.more-speed');

lessSpeed.addEventListener("click", () => {
	speedOfRotation -= 0.5;
	if(speedOfRotation < 0) {
		speedOfRotation = 0;
	}
	lessSpeed.style.transform = 'scale(1.2)'
	setTimeout(() => {lessSpeed.style.transform = 'scale(1)'}, 100);
});

moreSpeed.addEventListener("click", () => {
	speedOfRotation += 0.5;
	if(speedOfRotation > 4) {
		speedOfRotation = 4;
	}
	moreSpeed.style.transform = 'scale(1.2)'
	setTimeout(() => {moreSpeed.style.transform = 'scale(1)'}, 100);
});

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

var animationData = { requestId: null }; // Object to store the request ID
var viewingMode = true; // Initial viewing mode

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
        div.classList.add('word');
        div.classList.add('spin-mode');
      }
    }

    if (viewingMode) {
      animationData.requestId = requestAnimationFrame(animateDivs);
    }
  }

  animationData.requestId = requestAnimationFrame(animateDivs); // Start the animation

  return function cancelAnimation() {
    cancelAnimationFrame(animationData.requestId);
  };
}

const largerSpinner = document.querySelector('section.words > .spin-container-one');
const smallerSpinner = document.querySelector('section.words > .spin-container-two');

var cancelAnimations = [];

var cancelAnimation1 = generateDivs(Math.round(wordArray.length * 0.6), largerSpinner.clientWidth / 2.25, largerSpinner, 0.05);
cancelAnimations.push(cancelAnimation1);

var cancelAnimation2 = generateDivs(Math.round(wordArray.length * 0.4), smallerSpinner.clientWidth / 2.25, smallerSpinner, 0.1);
cancelAnimations.push(cancelAnimation2);

function appendRandomWord() {
	const largerSpinnerItems = document.querySelectorAll('section.words > .spin-container-one > div');
	const smallerSpinnerItems = document.querySelectorAll('section.words > .spin-container-two > div');
	const jumbledWords = [...wordArray].sort(() => 0.5 - Math.random());
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
			newWordItem.style.fontSize = Math.random() * (maxFontSize - minFontSize) + minFontSize + 'rem';
			smallerSpinnerItems[index - largerSpinnerItems.length].appendChild(newWordItem);
		}

		newWordItem.parentElement.ariaLabel = jumbledWords[index].file;
	});
}
appendRandomWord();

function randomFontSize(min, max, span) {
	let fontSize = (Math.random() * (max - min) + min);
	return fontSize;
}

function firstOfLetter(str) {
	const upperStr = str.toUpperCase();
	const firstChar = upperStr.charAt(0);
	const firstWordWithLetter = wordArray.find(
	  (item) => item.word.toUpperCase().charAt(0) === firstChar
	);

	return !firstWordWithLetter || firstWordWithLetter.word.toUpperCase() === upperStr;
  }

function listMode() {
	viewingMode = false;
	cancelAnimations.forEach(cancelAnimation => cancelAnimation());
  
	  const buttons = document.querySelector('.buttons')
	  buttons.remove();
	  largerSpinner.remove();
	  smallerSpinner.remove();
  
	  const wordContainer = document.createElement("div");
	  wordContainer.classList.add('container-list-mode');

	  const columnOne = document.createElement("div");
	  columnOne.classList.add('column');
	  const columnTwo = document.createElement("div");
	  columnTwo.classList.add('column');
  
	  wordSection.appendChild(wordContainer);
	  wordSection.classList.add('section-list-mode')
  
	  wordArray.forEach( function(word, index) {
		  const newWordItem = document.createElement("span");
		  newWordItem.textContent = word.word;
		  newWordItem.ariaLabel = word.file;
		  newWordItem.classList.add('word')
		  newWordItem.classList.add('word-list-mode')
		  newWordItem.style.fontSize = '1.5rem';
		  newWordItem.style.opacity = '0'
		  newWordItem.style.animation = `blur-in forwards 1s ${Math.random() * 1}s ease`;

		  if(minWidth(750)) {newWordItem.style.fontSize = '2rem'}
		  
		  if(firstOfLetter(word.word)) {
			  newWordItem.classList.add('first-of-letter')
			  newWordItem.setAttribute('data-letter', word.word.charAt(0))
			}
		  if(index < (wordArray.length / 2)) {columnOne.appendChild(newWordItem)}
		  if(index > (wordArray.length / 2)) {columnTwo.appendChild(newWordItem)}
	  })
	  wordContainer.appendChild(columnOne);
	  wordContainer.appendChild(columnTwo);
}

const listButton = document.querySelector('.words-viewing-mode');
listButton.addEventListener("click", () => {listMode();})

function maxWidth(maxClientWidth) {
	const clientWidth = innerWidth;
	if(maxClientWidth > clientWidth) {return true}
	else {return false}
}

function minWidth(minClientWidth) {
	const clientWidth = innerWidth;
	if(minClientWidth < clientWidth) {return true}
	else {return false}
}

// Media Queries

if(minWidth(2000)) {
	const alterItems = document.querySelectorAll('section.words > div > div > span')
	alterItems.forEach(item => {
		var originalFontSize = parseFloat(((item.style.fontSize).slice(0, -3)));
		item.style.fontSize = (originalFontSize + 1) + 'rem'
	});
}

if(maxWidth(1025)) {
	const alterItems = document.querySelectorAll('section.words > div > div > span')
	alterItems.forEach(item => {
		var originalFontSize = parseFloat(((item.style.fontSize).slice(0, -3)));
		item.style.fontSize = (originalFontSize - 0.3) + 'rem'
	});
}

if(maxWidth(800)) {
	listMode();
	paragraph.addEventListener("click", () => {
		paragraph.classList.toggle('expanded')
	})
}

function minmax(inputValue, sourceMin, sourceMax, targetMin, targetMax) {
    inputValue = Math.max(sourceMin, Math.min(sourceMax, inputValue));
    const normalizedValue = (inputValue - sourceMin) / (sourceMax - sourceMin);
    const mappedValue = (normalizedValue * (targetMax - targetMin)) + targetMin;
    return mappedValue;
}

// Word Container Code //

// Auto Fit // 
function autoFit() {
	const autoFitArray = document.querySelectorAll('.auto-fit');
	autoFitArray.forEach(text => {
	let maxLength = 250;
	let minFontSize = 1.125;
	let maxFontSize = 2;

	const fontSize = Math.max(
		minFontSize,
		Math.min(maxFontSize, maxFontSize - ((text.textContent.length - maxLength) / maxLength))
	);

	text.style.fontSize = fontSize + 'rem';
	});
}

autoFit();


  
  
  
  
  
  
  
  




  
  
  
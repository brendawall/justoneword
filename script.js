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


const wordSection = document.querySelector('section.words');
wordSection.style.animation = 'dissolve-in 1s 20s ease forwards'

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
const continueReading = document.querySelector('.info > .continue-reading > button');
const continueReadingContainer = document.querySelector('.info > .continue-reading');
const continueReadingOverlay = document.querySelector('.info::after');
const hr = document.querySelector('hr')
setTimeout(() => {hr.classList.add('active')}, 20000);

skipButton.addEventListener("click", () => {
	paragraph.textContent = ''
	paragraph.textContent = originalText;
	wordSection.style.animation = ''
	wordSection.style.opacity = 1;
	hr.classList.add('active')
	continueReadingContainer.style.animation = ''
	continueReadingContainer.style.opacity = '1';
	paragraph.classList.add('overlay-in')
})

typeWriter(paragraph, 4, 50, 15)

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

function listMode() {
	viewingMode = false;
	cancelAnimations.forEach(cancelAnimation => cancelAnimation());
  
	  const buttons = document.querySelector('.buttons')
	  buttons.remove();
	  largerSpinner.remove();
	  smallerSpinner.remove();
  
	  const wordContainer = document.createElement("div");
	  wordContainer.classList.add('container-list-mode');
  
	  wordSection.appendChild(wordContainer);
	  wordSection.classList.add('section-list-mode')
  
	  wordArray.forEach( function(word, index) {
		  const newWordItem = document.createElement("span");
		  newWordItem.textContent = word.word;
		  newWordItem.ariaLabel = word.file;
		  newWordItem.classList.add('word')
		  newWordItem.classList.add('word-list-mode')
  
		  wordContainer.appendChild(newWordItem)
	  })
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
  
  
  
  
  
  
  
  




  
  
  
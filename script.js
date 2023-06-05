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
logo.playbackRate = 2;
setTimeout(() => {
	logo.classList.add('animation-end')
}, 0);

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
	}, 5000);
}

  const paragraph = document.querySelector('p');
  const skipButton = document.querySelector('.skip')
  
  typeWriter(paragraph, 0, 50, 10)

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

function readTextFile(filePath) {
	fetch(filePath)
	  .then(response => response.text())
	  .then(fileContent => console.log(fileContent))
}

function generateDivs(numberOfDivs, circleRadius, container, rotationSpeed) {
	var angle = 360 / numberOfDivs; // Angle between each div
	var rotationAngle = 0; // Initial rotation angle

	for (var i = 0; i < numberOfDivs; i++) {
	  var div = document.createElement('div');
	  container.appendChild(div);
	}

	function animateDivs() {
	  rotationAngle += rotationSpeed; // Update the rotation angle

	  for (var i = 0; i < numberOfDivs; i++) {
		var div = container.children[i]; // Get the div element
		var divAngle = angle * i + rotationAngle; // Calculate the individual div angle

		var x = Math.cos((divAngle) * (Math.PI / 180)) * circleRadius;
		var y = Math.sin((divAngle) * (Math.PI / 180)) * circleRadius;

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
setTimeout(() => {
	generateDivs(Math.round(wordArray.length * 0.6), largerSpinner.clientWidth / 2.25, largerSpinner, 0.05)
	generateDivs(Math.round(wordArray.length * 0.4), smallerSpinner.clientWidth / 3.7, smallerSpinner, 0.1)
	
	function appendRandomWord() {
		const largerSpinnerItems = document.querySelectorAll('section.words > .spin-container-one > div');
		const smallerSpinnerItems = document.querySelectorAll('section.words > .spin-container-two > div');
		const jumbledWords = wordArray.sort((a, b) => 0.5 - Math.random());
		const spinnerItems = [];
		var spinnerItemsLength = largerSpinnerItems.length + smallerSpinnerItems.length;
		jumbledWords.forEach(function(word, index) {
			if (index < largerSpinnerItems.length) {
				const newWordItem = document.createElement("span");
				newWordItem.textContent = word.word;
				newWordItem.style.fontSize = Math.random() / 3 + 1.2 + 'rem'
				largerSpinnerItems[index].appendChild(newWordItem);
			}
			else {
				const newWordItem = document.createElement("span");
				newWordItem.textContent = word.word;
				newWordItem.style.fontSize = Math.random() / 3 + 1.2 + 'rem'
				smallerSpinnerItems[index - largerSpinnerItems.length].appendChild(newWordItem);
			}
		});
	}
	appendRandomWord();
}, 0);

function randomFontSize(min, max, span) {
	let fontSize = Math.random() * (max - min) + min;
	if(span.textContent.split('').length <= 4) {
		fontSize += .5;
	}
	return fontSize;
}

function fadeInStagger (speed, itemArray) {
	const array = document.querySelectorAll(itemArray);
	array.forEach( function(item, index) {
		let stagger = (index / 1000) * speed;
		item.style.setProperty('--fade-in-time', stagger);
	});
}

setInterval(() => {
	const spans = document.querySelectorAll('span');
	spans.forEach(span => {
		span.style.fontSize = randomFontSize(1, 1.5, span) + 'rem';
		span.style.opacity = randomFontSize(0.7, 1, span)
	});
}, 3000);

fadeInStagger(1, 'span');

  
  
  
  
  
  
  
  




  
  
  
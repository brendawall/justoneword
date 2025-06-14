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
	text.textContent = '';
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

		if(!viewingMode) {
			listWordItems.forEach(word => {word.style.animation = `blur-in forwards 1s ${Math.random() * 1}s ease`;});
		}
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
	{word: 'Disobedience', file: 'disobedience'},
	{word: 'Door', file: 'door'},
	{word: 'Ecstasy', file: 'ecstasy'},
	{word: 'Electricity', file: 'electricity'},
	{word: 'Eucharist', file: 'eucharist'},
	{word: 'Humiliation', file: 'humiliation'},
	{word: 'Fullness', file: 'fullness'},
	{word: 'Gift', file: 'gift'},
	{word: 'Gobsmacked', file: 'gobsmacked'},
	{word: 'Grace', file: 'grace'},
	{word: 'Home 1', file: 'home-1'},
	{word: 'Home 2', file: 'home-2'},
	{word: 'Home 3', file: 'home-3'},
	{word: 'Known', file: 'known'},
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
	{word: 'Veil', file: 'veil'},
	{word: 'When', file: 'when'},
	{word: 'Religion', file: 'religion'},
	{word: 'Temptation', file: 'temptation'},
	{word: 'Priest', file: 'priest'},
	{word: 'Author', file: 'author'},
	{word: 'Cleanse', file: 'cleanse'},
	{word: 'Abide', file: 'abide'},
	{word: 'Stigma', file: 'stigma'},
	{word: 'Holy', file: 'holy'},
	{word: 'Righteous', file: 'righteous'},
	{word: 'Sanctification', file: 'sanctification'},
	{word: 'Testimony', file: 'testimony'},
	{word: 'Mission', file: 'mission'},
	{word: 'Messiah', file: 'messiah'},
	{word: 'Gospel 1', file: 'gospel'},
	{word: 'Word 1', file: 'word-1'},
	{word: 'Gospel 2', file: 'gospel-2'},
	{word: 'Confession', file: 'confession'},
	{word: 'Up', file: 'up'},
	{word: 'Will', file: 'will'},
	{word: 'Perfect', file: 'perfect'},
	{word: 'Pinnacle', file: 'pinnacle'},
].sort((a, b) => a.word.localeCompare(b.word))

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
	const randomWord = wordArray[randomIndex].word;
	randomWordSpan.setAttribute("id", "word")
	randomWordSpan.ariaLabel = wordArray[randomIndex].file;
	typeWriterDouble(randomWord, 50);
}

randomWordSection();

setInterval(() => {randomWordSection();}, 9000);

// Buttons for controlling rotation speed
const lessSpeed = document.querySelector('button.less-speed');
const moreSpeed = document.querySelector('button.more-speed');

// Initialize rotation speed
let speedOfRotation = 1.25;
const maxSpeed = 4;
const minSpeed = 0;

// Event listeners for controlling speed
lessSpeed.addEventListener("click", () => {
    speedOfRotation = Math.max(speedOfRotation - 0.5, minSpeed);
    lessSpeed.style.transform = 'scale(1.2)';
    setTimeout(() => { lessSpeed.style.transform = 'scale(1)' }, 100);
});

moreSpeed.addEventListener("click", () => {
    speedOfRotation = Math.min(speedOfRotation + 0.5, maxSpeed);
    moreSpeed.style.transform = 'scale(1.2)';
    setTimeout(() => { moreSpeed.style.transform = 'scale(1)' }, 100);
});

// Function to divide words based on length
function divideWords(wordArray, threshold) {
    console.log("divideWords function called");
    console.log("Received wordArray:", wordArray);
    console.log("Threshold for division:", threshold);

    const shorterWords = [];
    const longerWords = [];

    wordArray.forEach((wordObj, index) => {
        console.log(`Processing word object at index ${index}:`, wordObj);

        const word = wordObj.word; // Accessing the `word` property
        console.log(`Extracted word: "${word}"`);

        if (word.length <= threshold) {
            console.log(`Word "${word}" is shorter or equal to the threshold (${threshold})`);
            shorterWords.push(wordObj);
        } else {
            console.log(`Word "${word}" is longer than the threshold (${threshold})`);
            longerWords.push(wordObj);
        }
    });

    console.log("Final shorterWords array:", shorterWords);
    console.log("Final longerWords array:", longerWords);

    return { shorterWords, longerWords };
}

// Function to generate spinning divs
function generateDivs(words, circleRadius, container, rotationSpeed, viewingMode, speedOfRotation) {
    const angleStep = 360 / words.length;
    let rotationAngle = 0;
    let intervalId;

    // Create and position divs
    words.forEach((word, i) => {
        const div = document.createElement('div');
        div.className = 'word spin-mode';
        div.setAttribute('aria-label', word);

        const span = document.createElement('span');
        span.id = 'word';
        span.style.opacity = Math.random().toFixed(2); // Example opacity logic
        span.style.fontSize = `${Math.random() * (1.45 - 1.125) + 1.125}rem`; // Randomized font size
        span.textContent = word.word; // Properly set word text

        div.appendChild(span);
        container.appendChild(div);

        const angle = angleStep * i;
        const x = Math.cos(angle * (Math.PI / 180)) * circleRadius;
        const y = Math.sin(angle * (Math.PI / 180)) * circleRadius * 0.6;

        div.style.transform = `translate(calc(${container.offsetWidth / 2 + x}px - 50%), calc(${container.offsetHeight / 2 + y}px - 50%))`;
    });

    // Animation loop
    function animateDivs() {
        rotationAngle += (rotationSpeed * speedOfRotation);
        words.forEach((_, i) => {
            const div = container.children[i];
            const angle = angleStep * i + rotationAngle;
            const x = Math.cos(angle * (Math.PI / 180)) * circleRadius;
            const y = Math.sin(angle * (Math.PI / 180)) * circleRadius * 0.6;

            div.style.transform = `translate(calc(${container.offsetWidth / 2 + x}px - 50%), calc(${container.offsetHeight / 2 + y}px - 50%))`;
        });
    }

    if (viewingMode) {
        intervalId = setInterval(animateDivs, 100);
    }

    return () => clearInterval(intervalId);
}

// DOM Elements for containers
const largerSpinner = document.querySelector('section.words > .spin-container-one');
const smallerSpinner = document.querySelector('section.words > .spin-container-two');
const threshold = 6; // Character length threshold

function clearContainer(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// Updated divideWords function remains unchanged
clearContainer(largerSpinner);
clearContainer(smallerSpinner);

const { shorterWords, longerWords } = divideWords(wordArray, threshold);

// Generate initial divs for each container
// Generate initial divs for each container
const cancelAnimations = [
    generateDivs(shorterWords, smallerSpinner.clientWidth / 2.25, smallerSpinner, 2, viewingMode, speedOfRotation), // Shorter words in smallerSpinner
    generateDivs(longerWords, largerSpinner.clientWidth / 2.25, largerSpinner, 1, viewingMode, speedOfRotation) // Longer words in largerSpinner
];

function appendWords() {
    const largerSpinnerItems = document.querySelectorAll('section.words > .spin-container-one > div');
    const smallerSpinnerItems = document.querySelectorAll('section.words > .spin-container-two > div');
    const minFontSize = 1;
    const maxFontSize = 1.45;

    // Clear previous spans
    largerSpinnerItems.forEach(div => div.innerHTML = '');
    smallerSpinnerItems.forEach(div => div.innerHTML = '');

    // Append sorted longerWords to largerSpinner
    longerWords.forEach((wordObj, index) => {
        if (index < largerSpinnerItems.length) {
            const newWordItem = document.createElement("span");
            newWordItem.setAttribute("id", "word");
            newWordItem.style.opacity = Math.random() / 2 + 0.6;
            newWordItem.textContent = wordObj.word;
            newWordItem.style.fontSize = Math.random() * (maxFontSize - minFontSize) + minFontSize + 'rem';
            largerSpinnerItems[index].appendChild(newWordItem);
            newWordItem.parentElement.ariaLabel = wordObj.file;
        }
    });

    // Append sorted shorterWords to smallerSpinner
    shorterWords.forEach((wordObj, index) => {
        if (index < smallerSpinnerItems.length) {
            const newWordItem = document.createElement("span");
            newWordItem.setAttribute("id", "word");
            newWordItem.style.opacity = Math.random() / 3 + 0.6;
            newWordItem.textContent = wordObj.word;
            newWordItem.style.fontSize = Math.random() * (maxFontSize - minFontSize) + minFontSize + 'rem';
            smallerSpinnerItems[index].appendChild(newWordItem);
            newWordItem.parentElement.ariaLabel = wordObj.file;
        }
    });
}

// Call appendWords after initial setup
appendWords();

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
		  newWordItem.setAttribute("id", "word")
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
const autoScrollCaption = document.querySelector('.caption');
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
	autoScrollCaption.src = './icons/caption-mobile.png';
	autoScrollCaption.classList.add('mobile-position')
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
	let maxLength = 1250;
	let minFontSize = 1.125;
	let maxFontSize = 1.5;

	if(text.parentElement = document.querySelector('#bible')) {
		maxLength = 500;
		minFontSize = 1.5;
		maxFontSize = 2;
	}

	if(maxWidth(1050)) {
		minFontSize = 1;
		maxFontSize = 1.5;
	}

	if(maxWidth(400)) {
		minFontSize = 0.9;
		maxFontSize = 1.125;
	}

	const fontSize = Math.max(
		minFontSize,
		Math.min(maxFontSize, maxFontSize - ((text.textContent.length - maxLength) / maxLength))
	);

	text.style.fontSize = fontSize + 'rem';
	});
}

autoFit();

function renderTextFile(fileName, destination) {
	// Construct the URL of the text file on the server
	const fileURL = `./word-text-form/${fileName}.txt`;
  
	// Fetch the text file from the server
	fetch(fileURL)
	  .then((response) => {
		if (!response.ok) {
		  throw new Error('Failed to fetch the text file.');
		}
		return response.text();
	  })
	  .then((fileContent) => {
		// Update the textContent of the destination DOM element
		destination.textContent = fileContent;
		destination.scrollTop = 0;
	  })
	  .catch((error) => {
		console.error('Error fetching the text file:', error);
	  });
}

function isNumber(string) {
	return /^[-+]?\d+(\.\d+)?$/.test(string);
}

function isLowerCase(str) {
    return str === str.toLowerCase() &&
           str !== str.toUpperCase();
}

function toStringAdvanced(array, separator = '') {
	return array
	  .filter(element => {
		return element !== null && element !== undefined;
	  })
	  .join(separator);
}

function wrapStringWithSpan(paragraphClass, searchString) {
    const paragraphs = document.querySelectorAll(paragraphClass);

    paragraphs.forEach(paragraph => {
        const regex = new RegExp(searchString, 'gi');
        const text = paragraph.textContent;
        const matches = text.match(regex);

        if (matches) {
            matches.forEach(match => {
                const span = document.createElement('span');
                span.style.fontWeight = '600';
                span.style.color = 'black';
                span.classList.add('bible-reference');
                span.textContent = match;
                span.href = '#bible';
                const halfConvertedLabel = match.split(' ');
                const convertedLabel = toStringAdvanced(halfConvertedLabel, '+');
                span.setAttribute('aria-label', convertedLabel.toLowerCase());

                // Replace the matched text with the span
                paragraph.innerHTML = paragraph.innerHTML.replace(match, span.outerHTML);
            });
        }
    });
}

const audioRange = document.querySelector(".listen > .listen-controls > input");

let scrolling = false;

function audioRangeInterval(audio) {
	setTimeout(() => {
		audio.play();
		intervalID = setInterval(() => {
			audioRange.value = Math.floor((audio.currentTime / audio.duration) * audioRange.max);
		}, 50);
	}, 200);
}

function play(audio, svg) {
	audio.play();
	svg.src = `./icons/pause.svg`
	listenCount++
}

function pause(audio, svg) {
	audio.pause();
	svg.src = `./icons/play.svg`
	listenCount++
}

function fileExists(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
	  if (xhr.readyState === 4) {
		if (xhr.status === 200) {
		  callback(true); // File exists
		} else {
		  callback(false); // File does not exist or there was an error
		}
	  }
	};
	xhr.open('HEAD', url, true);
	xhr.send();
}

function removeEventListeners(element) {
	// Clone the element to remove its listeners without affecting its other properties
	const clonedElement = element.cloneNode(true);
  
	// Replace the original element with the cloned element
	element.parentNode.replaceChild(clonedElement, element);
  
	// Return the cloned element (optional)
	return clonedElement;
}

let scrollInterval;
let captionCount = 0;

function autoScroll(scrollContainer, scrollHeight, captionCounter) {
	const autoScroll = document.querySelector('.auto-scroll');
	autoScroll.addEventListener("click", () => {
		console.log(captionCounter)
		scrolling = true;
		autoScroll.classList.toggle('active')
		if(captionCount == 1) {
			let caption = document.querySelector('.caption');
			caption.classList.remove('hidden')
			setTimeout(() => {
				caption.classList.add('hidden')
			}, 5000);
		}
		if(autoScroll.classList.contains('active') && scrolling) {
			console.log('auto scrolling')
			const audioDuration = audio.duration;
			const offsetTime = audioDuration * 0.2;
				let autoScrollTimeout = setTimeout(() => {
						scrollInterval = setInterval(() => {
							let currentTimePercent = ((audio.currentTime - offsetTime) / audioDuration) * scrollHeight;
							scrollContainer.scrollTop = currentTimePercent;
						}, 50);
				}, audioDuration * 200);
				audioRange.addEventListener("input", () => {
					clearTimeout(autoScrollTimeout);
					setInterval(() => {
						let currentTimePercent = (audio.currentTime / audioDuration) * scrollHeight;
						scrollContainer.scrollTop = currentTimePercent;
						console.log(currentTimePercent, audio.currentTime, scrollContainer.scrollTop)
					}, 50);
				})
		} else {
			scrolling = false
			console.log('clearing interval')
			clearInterval(scrollInterval)
		}
	})
	return scrollInterval;
}

let playing = false;
let listenCount = 1;
let intervalID;
const audio = document.createElement("audio");

document.body.addEventListener("click", (event) => {
	const title = document.querySelector('.title-of-word');
	const listenContainer = document.querySelector('.listen')
	const listenButtonImage = document.querySelector('.listen > .listen-controls > button > img')
	const listenControls = document.querySelector('.listen > .listen-controls')
	const paragraph = document.querySelector('.par');
	const bible = document.querySelector('.bible');
	const bibleTranslation = document.querySelector('.translation');
	const bibleVerse = document.querySelector('.verse');
	const bibleText = document.querySelector('.bible > .text');
	const readFull = document.querySelector('.read-full');
	const autoScrollContainer = document.querySelector('.auto-scroll');

    if (event.target.matches('#word')) {
		let object;
        if((event.target.classList.contains('random-word')) || !viewingMode) {
			object = event.target;
		} else {
			object = event.target.parentElement
		}
	fileExists(`./audio-exports/${object.ariaLabel}.mp3`, function(exists) {
		if(exists) {
			audio.src = `./audio-exports/${object.ariaLabel}.mp3`
			listenContainer.classList.remove('hidden')
		}
		else {
			listenContainer.classList.add('hidden')
		}
	});

	audio.src = `./audio-exports/${object.ariaLabel}.mp3`

	const wordInsightPanel = document.querySelector('.insight-panel');
	const backgroundOverlay = document.querySelector('.background-overlay');
	const returnToWords = document.querySelector('.return-to-words')
	wordInsightPanel.classList.remove('hidden');
	backgroundOverlay.classList.remove('hidden');
	returnToWords.addEventListener("click", () => {
		audio.src = ''
		wordInsightPanel.classList.add('hidden');
		bible.classList.add('hidden')
		listenButtonImage.src = './icons/play.svg'
		listenControls.classList.add('hidden')
		backgroundOverlay.classList.add('hidden');
		autoScrollContainer.classList.remove('active')
		listenCount = 0;
		audio.remove();
		if(autoScrollCaption.classList.contains('hidden') == false) {
			autoScrollCaption.classList.add('hidden')
		}
		removeEventListeners(autoScrollContainer);
	})

	let label = object.ariaLabel;
	let word = wordArray.find(({file}) => file === label)
	title.textContent = word.word;
	renderTextFile(word.file, paragraph);
	setTimeout(() => {
		const text = paragraph.textContent;
		const versePattern = /\b(?:[A-Za-z]+\s\d+:\d+(?:-\d+)?)|(?:\d+\s[A-Za-z]+\s\d+:\d+(?:-\d+)?)\b/g;
		const matches = text.match(versePattern);
		if (matches) {
			matches.forEach(match => {
				wrapStringWithSpan('.par', match);
			});
		}
		const bibleReferences = document.querySelectorAll('.bible-reference');
		bibleReferences.forEach(reference => {
			reference.addEventListener("click", () => {
				setTimeout(() => {
					wordInsightPanel.scrollTop = wordInsightPanel.scrollHeight;
				}, 500);
				bible.classList.remove('hidden')
				urlFormat = String(reference.ariaLabel).replace(/:\d+/g, '');
				readFull.href = `https://www.biblegateway.com/passage/?search=${urlFormat}&version=NRSV`;
				readFull.target = '_blank'
				readFull.rel = 'noopener noreferrer'
				url = `https://bible-api.com/${reference.ariaLabel}?translation=kjv`;

				fetchWebpageContent(url)
					.then((content) => {
					if (content) {
						var parsedData = JSON.parse(content);

						const reference = parsedData.reference;
						const translation = parsedData.translation_name;
						const shortTranslationArray = [];
						translation.split('').forEach(char => {
							if(!isLowerCase(char) && char!= ' ') {
								shortTranslationArray.push(char)
							}
						})
						const shortTranslation = toStringAdvanced(shortTranslationArray, '.')

						const text = parsedData.text;
					
						bibleVerse.textContent = reference;
						bibleTranslation.textContent = shortTranslation;
						bibleText.textContent = text;
				
					} else {
						console.log('Failed to fetch the text');
					}
					})
			})
		})

		async function fetchWebpageContent(url) {
			try {
			const response = await fetch(url);
		
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
		
			const content = await response.text();
			return content;
			} catch (error) {
			console.error('Error fetching the webpage:', error.message);
			return null;
			}
		}
	}, 500);

	autoScroll(paragraph, paragraph.scrollHeight, captionCount);

	} else if (event.target.matches('#initial-listen')) {
		captionCount++
		listenControls.classList.remove('hidden')
		audio.play();
		clearInterval(intervalID)
		audioRangeInterval(audio)
		listenButtonImage.src = './icons/pause.svg'
	} else if (event.target.matches('#listen-button')) {
		captionCount++
		listenCount++
		if(listenCount % 2 == 0) {
			clearInterval(intervalID)
			audio.play();
			audioRangeInterval(audio)
			listenButtonImage.src = './icons/pause.svg'
		}
		else {
			audio.pause();
			scrolling = false;
			clearInterval(intervalID)
			listenButtonImage.src = './icons/play.svg'
		}
	}
});

audioRange.addEventListener("input", () => {
	audio.pause();
	clearInterval(intervalID)
	audio.currentTime = (audioRange.value / audioRange.max) * audio.duration;
	audioRangeInterval(audio);
})
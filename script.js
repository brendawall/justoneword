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
}, 4000);
  
  function typeWriter(text, speed, pause, random) {
	const originalText = text.textContent;
	const modifiedText = originalText.split('');
	const randomSpeedArray = [];
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
  
  typeWriter(paragraph, 5, 50, 10)

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
  
wordArray.forEach(word => {
	let textFileFormat = `./word-text-form/${word.file}.txt`;
	let audioFileFormat = `./audio-exports/${word.file}.mp3`;
	
	let wordButton = document.createElement("button");
	let wordText = document.createElement("h2");
	wordText.textContent = word.word;
	let wordBackground = document.createElement("video")
	let randomBackground = Math.floor(Math.random() * 6) + 1;

	wordBackground.src = `./Ink-overlays/on-hover/hov${randomBackground}/on-hover_${randomBackground}.mov`
	wordBackground.preload = true;
	wordBackground.autoplay = true;
	wordBackground.muted = true;
	wordBackground.controls = false;
	wordBackground.pause();
	wordBackground.style.mixBlendMode = 'darken'

	if(randomBackground == 5) {wordBackground.style.filter = 'invert()'}

	wordButton.appendChild(wordBackground);
	wordButton.appendChild(wordText);

	wordButton.classList.add('word')
	wordSection.appendChild(wordButton);

	wordButton.addEventListener("mouseover", () => {
		wordBackground.play();
	})
});

  
  
  
  
  
  
  
  
  




  
  
  
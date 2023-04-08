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

function wait(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function typewriter(text, speed, sentencePause) {
	const textSelector = document.querySelector(text);
	const textContent = textSelector.textContent;
	const sentences = textContent.match(/[^.!?]+[.!?]+[\])'"`’”]*/g);
	const sentenceEnds = /[.!?]/;
  
	let typedText = '';
	
	for (let i = 0; i < sentences.length; i++) {
	  const sentence = sentences[i].trim();
	  const sentenceArray = sentence.split("");
	  textSelector.textContent = typedText;
  
	  for (let j = 0; j < sentenceArray.length; j++) {
		const currentCharacter = sentenceArray[j];
		const typingSpeed = (sentenceEnds.test(currentCharacter)) ? speed * 2 : speed;
		await wait(typingSpeed);
		typedText += currentCharacter;
		textSelector.textContent = typedText;
	  }
  
	  if (i < sentences.length - 1) { // add sentence-ending punctuation to typed text, unless this is the last sentence
		const sentenceEnd = textContent.charAt(typedText.length);
		typedText += sentenceEnd;
		textSelector.textContent = typedText;
	  }
  
	  await wait(sentencePause);
	}
  }
  
  typewriter(".typewriter", 30, 1000);
  
  
  
  
  
  
  
  
  
  
  




  
  
  
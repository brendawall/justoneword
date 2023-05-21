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
  
  typeWriter(paragraph, 5, 200, 10)


  
  
  
  
  
  
  
  
  




  
  
  
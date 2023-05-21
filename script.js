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

function formatNumber(number, length) {
	return number.toString().padStart(length, '0') + '.png';
  }
  
  function animateVideoSequence(containerElement, sequenceArray, frameDelay) {
	let imagesLoaded = 0;
	let totalImages = 0;
  
	sequenceArray.forEach(sequence => {
	  let delay = frameDelay; // Initial delay duration
  
	  for (let i = 1; i <= sequence.length; i++) {
		if (sequence.type === 'logo') {
		  const image = new Image();
		  image.src = `${sequence.path}/${formatNumber(i, 4)}`;
		  image.onload = () => {
			imagesLoaded++;
  
			if (imagesLoaded === totalImages) {
			  startAnimation(); // Start the animation once all images are loaded
			}
		  };
  
		  totalImages++;
		}
	  }
	});
  
	function startAnimation() {
	  let delay = frameDelay; // Initial delay duration
	  let zoomLength = 10;
  
	  sequenceArray.forEach(sequence => {
		for (let i = 1; i <= sequence.length; i++) {
			setTimeout(() => {
			  if(sequence.inverted) {containerElement.style.filter = 'invert()'}
			  containerElement.style.background = `url(${sequence.path}/${formatNumber(i, 4)}) no-repeat center`;
			  if(sequence.center) {
				if(i <= zoomLength) {
					containerElement.style.backgroundSize = `${i * (156 / zoomLength)}%`
				} else {
				containerElement.style.backgroundSize = `156%`;
				};	
			  }	  
			}, delay);
  
			delay += frameDelay; // Increment the delay for each frame
		}
	  });
	}
  }
  
  // Example usage
  const logoContainer = document.querySelector('.logo');
  const sequenceArray = [
	{ type: 'logo', path: './ink-overlays/logo/Logo1/image-sequence', length: 297, inverted: false, center: true }
  ];
  const frameDelay = 40;
  
  animateVideoSequence(logoContainer, sequenceArray, frameDelay);
  
  function typeWriter(text, speed, pause, random) {
	const originalText = text.textContent;
	const modifiedText = originalText.split('');
	const randomSpeedArray = [];
	const pauseArray = ['.','!','?',',']
	let sum = 0;
	
	text.textContent = ''

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
  }

  const paragraph = document.querySelector('p');
  const skipButton = document.querySelector('.skip')
  
  typeWriter(paragraph, 5, 200, 10)


  
  
  
  
  
  
  
  
  




  
  
  
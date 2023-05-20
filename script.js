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
  
	  sequenceArray.forEach(sequence => {
		for (let i = 1; i <= sequence.length; i++) {
			setTimeout(() => {
			  containerElement.style.background = `url(${sequence.path}/${formatNumber(i, 4)}) no-repeat center`;
			  containerElement.style.backgroundSize = `156%`;
			}, delay);
  
			delay += frameDelay; // Increment the delay for each frame
		}
	  });
	}
  }
  
  // Example usage
  const logoContainer = document.querySelector('.logo');
  const sequenceArray = [
	{ type: 'logo', path: './ink-overlays/logo/Logo1/image-sequence', length: 297 }
  ];
  const frameDelay = 50;
  
  animateVideoSequence(logoContainer, sequenceArray, frameDelay);
  
  
  
  
  
  
  
  
  
  
  




  
  
  
"use strict";

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

const allImages = document.querySelectorAll('.main-gallery .photos img');
let i = 0; //*carrent image*//

prevButton.addEventListener('click', function() {
	allImages[i].className = '';
	i--; //*carrent image*//

	if(i < 0) {
		i = allImages.length - 1; //*carrent image*//
	}

	allImages[i].className = 'shown';
});

nextButton.addEventListener('click', function() {
	allImages[i].className = '';
	i++; //*carrent image*//

	if(i >= allImages.length) {
		i = 0; //*carrent image*//
	}

	allImages[i].className = 'shown';
});


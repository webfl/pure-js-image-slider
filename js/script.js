const btnPrevVar = document.querySelector('#gallery .buttons .prev');
const btnNextVar = document.querySelector('#gallery .buttons .next');

const allImages = document.querySelectorAll('#gallery .photos img');
let currentImage = 0; //текущий объект (изображение)

btnPrevVar.onclick = function() {
	allImages[currentImage].className = '';
	currentImage--; /* currentImage = currentImage - 1 */

	if( currentImage < 0) {
		currentImage = allImages.length - 1; // 
	}

	allImages[currentImage].className = 'shown';	
};

btnNextVar.onclick = function() {
	allImages[currentImage].className = '';
	currentImage++; /* currentImage = currentImage + 1 */

	if( currentImage >= allImages.length) {
		currentImage = 0;
	}

	allImages[currentImage].className = 'shown';	
	
};


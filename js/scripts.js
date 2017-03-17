var numberOfImages = 5;
var changeInterval = 2000; //in milliseconds

var currentImageId = 1;
var el = document.getElementById('rotateImage');
var changeImage = function (id) {
	el.style.backgroundImage = 'url("images/hero-images/'+id+'.png")';
}

window.setInterval(function(){
	changeImage(currentImageId);

	if(currentImageId < numberOfImages)
		currentImageId++;
	else
		currentImageId = 1;
}, changeInterval);

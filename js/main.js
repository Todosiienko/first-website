$(document).ready(function(){
	$('.wrapper-scroll').slick({
		dots: true,
		variableWidth: true,
	});
});


// menu button
function dropMenuFunc(event){
	// event.preventDefault();
	document.querySelector('.menu__btn').classList.toggle('menu__btn_active');
	document.querySelector('.menu__nav').classList.toggle('menu__nav_active');
}

document.querySelector('.menu__btn').onmouseup = dropMenuFunc;

// servises activities
let servisesBtn = document.querySelectorAll('.button_more');
let genericItem = document.querySelectorAll('.generic-items');

for (let i = 0; i < servisesBtn.length; i++){
	servisesBtn[i].onclick = ()=>{
		genericItem[i].classList.toggle('servises__block-active');
		servisesBtn[i].classList.toggle('arrow-active');
	};
}

// teamates profile
let team = document.querySelectorAll('.photoframe');
let profile = document.querySelectorAll('.profile');
for (let i = 0; i < team.length; i++){
	team[i].onmouseenter = function(event){

		if(event.returnValue == true || event.isTrusted == true ){
			profile[i].classList.add('show_profile');
		}
	}	
	team[i].onmouseleave = function(event){

		if(event.returnValue == true || event.isTrusted == true ){
			profile[i].classList.remove('show_profile');
		}
	}
	
}

// slider for comments section
// let position = 0;
// let slideStep = 1140;
// let slide = document.querySelector('.wrapper-scroll');

// let allSlides = document.querySelectorAll('.comments-wrapper');
// const sliderWidth = allSlides.length*slideStep;
// const arrowRight = document.querySelector('.arrow_right');
// const arrowLeft = document.querySelector('.arrow_left');


// arrowLeft.onclick = function(event){
// 	event.preventDefault();
// 	position += slideStep;
	
// 	moveFunction();
// 	checkBtn();
// }
// arrowRight.onclick = function(event){
// 	event.preventDefault();
// 	position -= slideStep;
	
// 	moveFunction();
// 	checkBtn();
// }

// let moveFunction = ()=>{
// 	slide.style.transform = `translateX(${position}px)`
// }

// let checkBtn = ()=>{
// 	// arrow left
// 	if(position === 0){
// 		arrowLeft.disabled = true;
// 		arrowLeft.style.display = 'none';
// 	} else {
// 		arrowLeft.disabled = false;
// 		arrowLeft.style.display = 'block';
// 	}
// 	// arrow right
// 	if(position <= -sliderWidth+ slideStep){
// 		arrowRight.disabled = true;
// 		arrowRight.style.display = 'none';
// 		arrowLeft.style.marginRight = 83+'px';
// 	} else {
// 		arrowRight.disabled = false;
// 		arrowRight.style.display = 'block';
// 		arrowLeft.style.marginRight = 30+'px';
// 	}
// }
// checkBtn();

// scroll to top
let btnTop = document.querySelector('.scrollToTop');

window.addEventListener('scroll', function(){
	if(window.pageYOffset > 890){
		btnTop.style.opacity = '1';
	}else {
		btnTop.style.opacity = '0';
	}	
});









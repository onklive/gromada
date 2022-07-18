//Tabs Item 3
const tab = document.querySelector(".tab");
const tabButton = document.querySelectorAll(".tab__btn");
const content = document.querySelectorAll(".tab__content");

tab.addEventListener("click", e => {
	const id = e.target.dataset.id;
	if (id) {
		tabButton.forEach(tabButton => {
			tabButton.classList.remove("tab__btn--active");
		});
		e.target.classList.add("tab__btn--active");

		content.forEach(content => {
			content.classList.remove("tab__content--active");
		});
		const element = document.getElementById(id);
		element.classList.add("tab__content--active");
	}
});  

//Tabs Item 4
const tabs = document.querySelector(".tabs");
const tabsButton = document.querySelectorAll(".tabs__btn");
const contents = document.querySelectorAll(".tabs__content");

tabs.addEventListener("click", e => {
	const id = e.target.dataset.id;
	if (id) {
		tabsButton.forEach(tabsButton => {
			tabsButton.classList.remove("tabs__btn--active");
		});
		e.target.classList.add("tabs__btn--active");

		contents.forEach(content => {
			content.classList.remove("tabs__content--active");
		});
		const element = document.getElementById(id);
		element.classList.add("tabs__content--active");
	}
});

//PopUp Item 1
const popup = document.querySelector('.popup');
document.querySelector('.popup__link').addEventListener("click", e => {
	e.preventDefault;
	popup.classList.add('popup--active')
});
document.querySelector('.close').addEventListener("click", () => {
	popup.classList.remove('popup--active');
});

//Galery Item 5
const lightbox = GLightbox({});

//Copy button
tabs.addEventListener("click", e => {
	if (e.target.closest('.details__copy')) { 
		const text = e.target.dataset.account;
		let textarea = document.createElement('textarea');
		textarea.id = 'temp';
		textarea.style.height = 0;
		document.body.appendChild(textarea);
		textarea.value = text;
		let selector = document.querySelector('#temp');
		selector.select();
		document.execCommand('copy');
		document.body.removeChild(textarea);

    // navigator.clipboard.writeText(text);

		const details = e.target.closest('.details');
		const account = details.querySelector('.details__account');
		const message = details.querySelector('.details__message');

		account.classList.add('is-hidden');
		message.classList.add('details__message--active');
		setTimeout(() => {
			message.classList.remove('details__message--active');
			account.classList.remove('is-hidden');
		}, 1200);
	}
});


	

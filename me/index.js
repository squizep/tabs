const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.tab__text');
const button = document.getElementById('btn');
const changeClass = el => {
	for (let i = 0; i < tabs.children.length; i++) {
		tabs.children[i].classList.remove('active');
	}
	el.classList.add('active');
}

tabs.addEventListener('click', e => {
	const currTab = e.target.dataset.btn;
	changeClass(e.target);
	for (let i = 0; i < content.length; i++) {
		content[i].classList.remove('active');
		if (content[i].dataset.content === currTab) {
			content[i].classList.add('active')
		}
	}
});



const tabs2 = document.getElementById('tabs2');
const contentTwo = document.querySelectorAll('.tab__text2');

const changeClass2 = el => {
	for (let i = 0; i < tabs2.children.length; i++) {
		tabs2.children[i].classList.remove('active');
	}
	el.classList.add('active');
}

tabs2.addEventListener('click', e => {
	const curr = e.target.dataset.btn2;
	changeClass2(e.target);
	for (let i = 0; i < contentTwo.length; i++) {
		contentTwo[i].classList.remove('active');
		if (contentTwo[i].dataset.content2 === curr) {
			contentTwo[i].classList.add('active')
		}
	}
});

button.onclick = () => {
	alert('Вот Сбер: 417760293154547');
};

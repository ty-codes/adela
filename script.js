
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});
const products = [
	{ 
		id: 1,
		product: './img/prod1.jpg'
	},
	{ 
		id: 2,
		product: './img/prod2.jpg'
	},
	{ 
		id: 3,
		product: './img/prod3.jpg'
	},
	{
		id: 4,
		product: './img/prod4.jpg'
	}
]
const printlog = () => {
	console.log("click")
}
let num=0;

const next = (num) => {
	document.getElementById('prev_arrow').removeAttribute("disabled")
	if(num<4) {
		document.getElementById('product').src = products[num].product;
		if(num===3) {
			document.getElementById('next_arrow').setAttribute("disabled", true)
		}
	} else {
		return;
	}
}

const prev = (num) => {
	document.getElementById('next_arrow').removeAttribute("disabled")
	
	if(num<4) {
		
		document.getElementById('product').src = products[num].product;
		if(num===0) {
			document.getElementById('prev_arrow').setAttribute("disabled", true)
			document.getElementById('next_arrow').removeAttribute("disabled")
		}

	} else {
		return;
	}
}



document.getElementById("prev_arrow").addEventListener("click", ()=>{
	if(num<=3){
		num--;
			prev(num)
	
	}
})

document.getElementById("next_arrow").addEventListener("click", ()=> {
	if(num<=3){
		num++;
			next(num)
	}

}
)

document.querySelector('#contact-form').addEventListener('submit', (e) => {
	e.preventDefault();
	e.target.elements.name.value = '';
	e.target.elements.email.value = '';
	e.target.elements.message.value = '';
});



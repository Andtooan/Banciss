const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});



const url = 'http://3.128.32.140:3000/api'

fetch (url)
.then(response => response.json() )
.then (data => {
 
    let element = document.getElementById(('elem'))
    element.innerHTML = 
	'<p>${data.name}</p>'
	'<p>${data.name}</p>'


    console.log(data)
})

.catch(err=>console.log(err))

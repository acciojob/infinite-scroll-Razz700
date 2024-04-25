//your code here!
let a=document.getElementById("infi-list");
let i=1;
for ( i = 1; i <= 10; i++) {
	a.innerHTML+=`<li>Item ${i}</li>`;
}
a.addEventListener("scroll",fun);
function fun() {
	a.innerHTML+=`<li>Item ${i}</li>`;
	a.innerHTML+=`<li>Item ${i+1}</li>`;
	i=i+2;
}
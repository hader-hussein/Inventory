/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
 
  var element = document.getElementById("myDIV");
   element.classList.toggle("show");
   document.getElementById("myDropdown").classList.toggle("show");
   

}
/****/
const root = document.querySelector(":root"),
      inputs = document.querySelectorAll("input[name='theme']");

const theme = localStorage.getItem("theme-color");

const updateRoot = value => root.style.setProperty("--theme-color", `var(--${value})`);

for(const input of inputs) {
  if(theme && input.value === theme) {
   
    input.checked = true;
    
    updateRoot(theme);
  }
  
  input.onchange = e => {
    updateRoot(e.target.value);
    e.preventDefault()

    localStorage.setItem("theme-color", e.target.value);
  }
}/*** */
 ////

////

// var chartes = new ApexCharts(document.querySelector("#chartes"), options);
// chartes.render();

  
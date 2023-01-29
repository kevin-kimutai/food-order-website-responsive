const check = document.getElementById('check');
const text = document.getElementById('text');
checkbox = document.querySelectorAll('.check-box').forEach(function(checkbox){
  checkbox.addEventListener('click',
  function (){
   checkbox = document.getElementById('check');
   checkbox.style.display = 'none';
   
    document.querySelectorAll('.add').forEach(function(text){
      text.innerText = "Added to order list";
      text.style.color = 'greenyellow';

    })
  
});
    
 });


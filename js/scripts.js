window.onload = () => {
  //Slider
   const swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      }); 
      
  //Accordion
  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }

  /* Sidenav menu*/
   function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  let burger = document.querySelector('.burger');
  burger.addEventListener('click', (e) => {
      openNav();
  })
  let closeBtn = document.querySelector('.closebtn');
  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeNav();
  })

  /* Validation form*/

  let submitBtn = document.getElementById('send-from');
  let inputName = document.getElementById('name');
  let errorMsg = document.querySelector('.error');
 
   submitBtn.addEventListener('click', (e) => {
      if (inputName.value.length < 3 ) {
          errorMsg.textContent = 'Имя должно быть не менее 3 символов'
          setTimeout(()=> {
            errorMsg.textContent = '';
          },2000)
      }
   });

}
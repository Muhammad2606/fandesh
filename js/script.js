window.addEventListener('DOMContentLoaded', () =>{

  const modal = document.querySelector('.modal');
  const  modalClose = document.querySelectorAll('.modal_close');
  const  contact = document.querySelectorAll('.fa-bars');

   
  function showModal(){
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
  }

    contact.forEach((item) =>{
      item.addEventListener('click', showModal);
    });

  function hideModal(){
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
    clearTimeout(timerModal);
  }

  modalClose.forEach((item) =>{
    item.addEventListener('click', hideModal);
  });
   
  modal.addEventListener('click', (Event) =>{
    if(Event.target == modal){
      hideModal();
    }
  })


});

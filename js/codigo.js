const btn = document.getElementById('button');

 document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_xqmi43s';
   
    

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Correo';
      alert('Mensaje Enviado!');
      document.getElementById('form').reset();
      
    }, (err) => {
      btn.value = 'Enviar Correo';
      alert(JSON.stringify(err));
      document.getElementById('form').reset();
      ;
    });
    
});




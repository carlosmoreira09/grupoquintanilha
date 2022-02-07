const form = document.querySelector('#submit');


form.addEventListener('submit', function(e) { 
    e.preventDefault();
   
        const getName = form.elements.name.value.replaceAll(" ", "%20");
        const email = form.elements.email.value;
        const phone = form.elements.phone.value;
        const message = form.elements.message.value;
        const message2 = message.replaceAll(" ","%20").replaceAll("\n","%0a");

        window.open(`https://api.whatsapp.com/send?phone=+5522981480818&text=Nome:%20${getName}%0aTelefone:%20${phone}.%0aEmail:%20${email}%0aMensagem:%20${message2}`,'_blank');
    

})


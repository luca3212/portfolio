
//menu mobile
const btonMenu = document.getElementById('btonburger');
const menuMostrar = document.getElementById('menuLista');
const iconoMenu = document.getElementById('iconoMenu');

btonMenu.addEventListener('click', ()=>{
  controlMenu();
});

function controlMenu(){
  menuMostrar.classList.toggle('menuMostrar');
  iconoMenu.classList.toggle('mdi-menu');
  iconoMenu.classList.toggle('mdi-close');
}

$('ul.tabs li a').click(function(){
  var ancho =$(window).width();
  if (ancho <= 760) {
    controlMenu();
  }
});

//boton up
const btonSubir = document.getElementById("icoUp");

btonSubir.addEventListener('click', ()=>{
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

function scrollUp(){
    if(this.scrollY >= 560){
      btonSubir.classList.add('show-scroll');
    } else{
      btonSubir.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp);

//contacto- mensaje
const nombreContacto  = document.getElementById("name");
const emailContacto   = document.getElementById("mail");
const mensajeContacto = document.getElementById("mensaje");
const formContact = document.querySelector('#formId');

formContact.addEventListener('submit', (e)=>{
  e.preventDefault();
  if(validarForm()){

    fetch("https://formsubmit.co/ajax/b6f562d933e25db921a7a355af553e3f ", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then(json => {
          console.log(json);
          alert("El mensaje fue enviado con éxito!");
      })
      .catch(err => {
          console.log(err);
          alert("Hubo un error al intentar enviar el mensaje, intente nuevamente..");
      })
      .finally(() => {
        formContact.reset();
      })
  }

});

function validarForm(){
  const validador = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let controlMail = validador.test(emailContacto.value);

  if(nombreContacto.value.trim() === ''){ 
    alert("El Nombre ingresado es invalido..");
    nombreContacto.focus();
    return false;
  }else{
    if(!controlMail){
      alert("El Email ingresado es invalido..");
      emailContacto.focus();
      return false;
    }else{
      if(mensajeContacto.value.trim() === ''){
        alert("Escriba el mensaje a enviar..");
        mensajeContacto.focus();
        return false;
      }else{
        return true;
      }
    }
  }
}




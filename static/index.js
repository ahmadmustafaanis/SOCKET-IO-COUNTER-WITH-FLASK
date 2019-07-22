document.addEventListner('DOMCONTENTLOADED', ()=>{

var socket=io.connect(location.protocol + '//' + document.domain + ':' + location.port);

socket.on('connect', ()=>{
  document.querySelectorAll('button').forEach(button =>(){
    button.onClick =() =>{
      const selection = button.dataset.vote;
      socket.emit('submit vote', {'selection':selection});
    };
  });
});
socket.emit('announce vote' , data=>{
  const li=document.createElement('li')
  li.innerHTML=`Vote Recorded ${data.selection}`
  document.querySelector('#votes').append(li)
});

});

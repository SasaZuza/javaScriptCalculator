var box = document.getElementById('display');

/////////////////////////////////////////////////////////////

function toDisplay(x){
  box.value += x;
  if(x === 'c'){    
    box.value = '';
  }
}

/////////////////////////////////////////////////////////////

function answer(){
  x = box.value;
  x = eval(x);
  box.value = x;
}

/////////////////////////////////////////////////////////////

  function percent(){
    x = box.value;
    x = eval( x * 0.01);
    box.value = x;
  }

/////////////////////////////////////////////////////////////
  
  function backspace(){
    var screenValue = box.value;
    var len = screenValue.length - 1;
    var CE = screenValue.substring(0, len);
    box.value = CE;
  }

var result = '';

window.onload = function(){
  var divResult = document.getElementById('divResult');
  document.getElementById('bnt1').addEventListener('click', function(){
      var result = document.getElementById('txtVeld1').value;
      divResult.innerHTML = "Het resultaat is " + result;
  }, false)
}
alert("Fijne Dag");


function changeColor(event){
    let parentName = "";
    let parentNode = event.parentNode;
    while(parentName != "TR"){
      parentNode = parentNode.parentNode;
      parentName = parentNode.nodeName;
    }
    data.datasets[parentNode.id-1].backgroundColor = event.value;
    myChart.update();
  }
 
  var generateError = function (text) {
    var error = document.createElement('div')
    error.className = 'invalid-feedback'
    error.innerHTML = text
    return error
  }
  
  function validatinForm(event) {
    let password = document.getElementById('exampleInputPassword');
    let confirmPassword = document.getElementById('exampleInputConfirmPassword');
    if (password.value !== confirmPassword.value) {
      var errorPassword = generateError('Пароли не совпадают');
      var errorConfirmPassword = generateError('Пароли не совпадают');
      password.parentElement.insertBefore(errorPassword, password.nextSibling);
      password.classList.add('is-invalid');
      confirmPassword.parentElement.insertBefore(errorConfirmPassword, confirmPassword.nextSibling);
      confirmPassword.classList.add('is-invalid');
      return false;
    }
    return true;
    
  }
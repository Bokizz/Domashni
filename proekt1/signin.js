function signIn(){
    var user= document.getElementById('user').value;
    var pass= document.getElementById('pass').value;
    
    if ((user == '')||(pass == '')) {
        alert("Please enter username and password.");
        return;
    }
    
    var form = document.getElementById('signInForm');
    form.classList.add('hidden')
    alert("Welcome "+ user); 

    listContainer.style.display = 'flex';
    }
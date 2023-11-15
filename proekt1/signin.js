function signIn(){
    var username= document.getElementById('user').value;
    var pass= document.getElementById('pass').value;
    
    localStorage.setItem("savedusername",username);

    if ((user == '')||(pass == '')) {
        alert("Please enter username and password.");
        return;
    }
    
    var form = document.getElementById('signInForm');
    form.classList.add('hidden')
    alert("Welcome "+ username); 
    
    listContainer.style.display = 'flex';
    }
//recenzii
localStorage.clear();
function getSavedRatings() {
    const ratings = JSON.parse(localStorage.getItem('ratings')) || [];
    return ratings;
}

function saveRating(rating) {
  const ratings = getSavedRatings(); //zachuvaj recenzija
  ratings.push(parseInt(rating));
  localStorage.setItem('ratings', JSON.stringify(ratings));
}

function calculateAverage() {
  const ratings = getSavedRatings(); 
  const totalratings = ratings.length;
    if (totalratings > 0) {
    const sum = ratings.reduce((acc, val) => acc + val); // recenzii
    const average = sum / totalratings; //recenzii / br recenzii za sredna vrednost

    document.getElementById('average').innerText = average.toFixed(2); //sredna vrednost
    document.getElementById('total').innerText = totalratings; //br recenzii
  }
}

const ratinginputs = document.querySelectorAll('.rating input');
ratinginputs.forEach(input => {
  input.addEventListener('change', () => {
    saveRating(input.value);
    calculateAverage();
  });
});
calculateAverage();


 //komentari
function getSavedComments() {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    return comments;
  }
  
  function saveComment() { // zachuvaj komentari
    const commentText = document.getElementById('userComment').value;
    if (commentText.trim() !== '') {  // trgni prazno mesto od pred ili na kraj od komentarot
      const comments = getSavedComments();
      comments.push(commentText);
      localStorage.setItem('comments', JSON.stringify(comments));
      displayComments();
      document.getElementById('userComment').value = ''; // ischisti input delot da mozhe da se vnese drug komentar
    }else{
      alert('Sometimes a comment is worse than no comment i guess.');
    }
  }
  
  function displayComments() { //prikazhi gi vnesenite komentari
    const commentSection = document.getElementById('commentSection');
    const comments = getSavedComments();
  
    commentSection.innerHTML = ''; //izbrishi go prvobitniot commentsection
    if (comments.length === 0) { // ako nema nitu eden komentar default 
      commentSection.innerHTML = '<p>Damn...no comments.</p>';
    }else{
      const ul = document.createElement('ul'); // vo sprotivno za sekoj komentar vnesen posebno vnesi go vo commentsection
      comments.forEach(comment => {
        const li = document.createElement('li');
        li.textContent = comment;
        const hr = document.createElement('hr'); // horizontalna linija za da se odvojat komentarite
        ul.appendChild(li);
        ul.appendChild(hr);      });
      commentSection.appendChild(ul);
    }
  }
  displayComments();


  let photoCounter = localStorage.getItem('photoCounter') || 1;
  window.onload = function() {
    loadSavedPhotos(); // fetch the photos brev
  };

  function addPhoto() { // dodavanje slika
    const fileInput = document.getElementById('fileInput');
    const gallery = document.getElementById('gallery'); 

    const file = fileInput.files[0];
    if (file) { // ako e file toa shto sakame da go vneseme
      const reader = new FileReader();

        reader.onload = function (e) {
        const photoDiv = document.createElement('div'); // sekcija kade se pravi delot za dodavanje slika
        photoDiv.classList.add('photo');

        const image = document.createElement('img');
        image.src = e.target.result;
        image.setAttribute('alt', `Photo ${photoCounter}`);
        photoDiv.appendChild(image); //slika dodadena
        photoCounter++;

        const likeButton = document.createElement('button'); // LIKE :))
        let likes = parseInt(localStorage.getItem(`photo_${photoCounter}_likes`)) || 0; // kolku likes ima
        likeButton.innerText = `Like (${likes})`;
        likeButton.onclick = function () {
          if (likeButton.disabled !== true) {
            likes++;
            likeButton.innerText = `Like (${likes})`;
            likeButton.disabled = true; // deaktiviraj
            saveLikes(`photo_${photoCounter}_likes`, likes);
          }
        };
        photoDiv.appendChild(likeButton);

        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-btn');
        removeButton.innerText = 'X';
        removeButton.onclick = function () {
          photoDiv.remove();
          removePhoto(`photo_${photoCounter}`);
          removePhoto(`photo_${photoCounter}_likes`);
        };
        photoDiv.appendChild(removeButton);

        gallery.appendChild(photoDiv);

        savePhoto(`photo_${photoCounter}`, e.target.result);
        photoCounter++;
        localStorage.setItem('photoCounter', photoCounter);
      };

      reader.readAsDataURL(file);
    }
  }

  function savePhoto(key, value) {
    localStorage.setItem(key, value);
  }

  function removePhoto(key) {
    localStorage.removeItem(key);
  }

  function saveLikes(key, value) {
    localStorage.setItem(key, value);
  }

  function loadSavedPhotos() { //loadni slike
    const gallery = document.getElementById('gallery'); 
    for (let i = 1; i < photoCounter; i++) {
      const photoKey = `photo_${i}`;
      const photoData = localStorage.getItem(photoKey);
      if (photoData) {
        const likes = parseInt(localStorage.getItem(`${photoKey}_likes`)) || 0; 

        const photoDiv = document.createElement('div');
        photoDiv.classList.add('photo');

        const image = document.createElement('img');
        image.src = photoData;
        image.setAttribute('alt', `Photo ${i}`);
        photoDiv.appendChild(image);

        const likeButton = document.createElement('button');
        likeButton.innerText = `Like (${likes})`;
        if (likes > 0) {
          likeButton.disabled = true; // deaktiviraj
        }
        likeButton.onclick = function () {
          if (likeButton.disabled !== true) {
            likes++;
            likeButton.innerText = `Like (${likes})`;
            likeButton.disabled = true; // deaktiviraj
            saveLikes(`${photoKey}_likes`, likes);
          }
        };
        photoDiv.appendChild(likeButton);

        const removeButton = document.createElement('button'); //kopche za brishenje slika
        removeButton.classList.add('remove-btn');
        removeButton.innerText = 'X';
        removeButton.onclick = function () {
          photoDiv.remove();
          removePhoto(photoKey);
          removePhoto(`${photoKey}_likes`);
        };
        photoDiv.appendChild(removeButton);  

        gallery.appendChild(photoDiv);
      }
    }
  }

  function ordersaveToLocalStorage() {
    var headertext = document.getElementById('headertext').innerText;
    headertext.trim();
    localStorage.setItem('savedHeadertext', headertext);
  }
  document.getElementById('headerText').addEventListener('input', function() { // za da se zachuva imeto na proizvodot
    ordersaveToLocalStorage();
});
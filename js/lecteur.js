//MES VARIABLES
var video = document.querySelector('.lecteur');
var play = document.querySelector('.play_pause');
var classe = document.querySelector('.movies');
var fullScreen = document.querySelector('.fullScreen');
var btnGenre = document.querySelectorAll('.btnGenre');
var btnYear = document.querySelectorAll('.btnYear');
var all = document.querySelector('.all');
var info = document.querySelector('.info')
var descTitle = document.querySelector('.descTitle');
var descDur = document.querySelector('.descDur');
var descAuth = document.querySelector('.descAuth');
var descRate = document.querySelector('.descRate');
var descCat = document.querySelector('.descCat');
var descDesc = document.querySelector('.descDesc');
var input = document.querySelector('.input');

//GENERER LES TITRES A PARTIR DU DATA.JS
for (let i = 0; i < data.films.length; i++) {
  //var movies = data.films[i].title;
  var img = data.films[i].img;
  var element = document.createElement("img");
  var titre = classe.appendChild(element);
  element.setAttribute('src', img);
}

//LIER LES SRC DU DATA.JS AUX TITRES
var lis = document.querySelectorAll('img');
for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener('click', function() {
    video.setAttribute("src", data.films[i].src)
    //video.play();
  });
}


//METTRE EN PLEINE ECRAN
fullScreen.addEventListener('click', putInFullScreen, false);

function putInFullScreen() {
  if (video.requestFullScreen) {
    video.requestFullScreen();
  } else if (video.webkitRequestFullScreen) {
    video.webkitRequestFullScreen();
  } else if (video.mozResquestFullScreen) {
    video.mozResquestFullScreen();
  }
};


//FILTRER
for (var i = 0; i < btnGenre.length; i++) {
  btnGenre[i].addEventListener('click', function() {
    for (var i = 0; i < data.films.length; i++) {
      if (data.films[i].category !== this.dataset.genre) {
        lis[i].style.display = 'none';
      } else {
        lis[i].style.display = '';
      }
    }
  })
}

all.addEventListener('click', function() {
  for (var i = 0; i < data.films.length; i++) {
    if (data.films.category === this.dataset.gentre) {
      lis[i].style.display = 'block';
    }
  }
})


//FILTRER ANNEE
for (var i = 0; i < btnYear.length; i++) {
  btnYear[i].addEventListener('click', function() {
    console.log('hi');
    for (var i = 0; i < data.films.length; i++) {
      if (data.films[i].year != this.dataset.year) {
        lis[i].style.display = 'none';
      } else {
        lis[i].style.display = '';
      }
    }
  })
}


function getFilmsByPartialTitle(input) {
  var returnArray = [];

  data.films.forEach(function(film) {
    if (film.title.includes(input.toLowerCase()) || film.title.includes(input.toUpperCase())) {
      returnArray.push(film);
    }
  });

  return returnArray;
}

//FILTRER AVEC UN INPUT
input.addEventListener('keypress', function() {
  console.log(getFilmsByPartialTitle(input.value));
  //return getFilmsByPartialTitle(input.value);
  //if (data.films[i].category !== input.value) {
  //lis[i].style.display = 'none';
  //}
})



//FONCTION BOUTON PLAY/PAUSE
play.addEventListener('click', playPause, false);

function playPause() {
  if (video.paused) {
    video.play();
    play.innerHTML = 'Pause';
  } else {
    video.pause();
    console.log('pause');
    play.innerHTML = 'Play';
  }
};


//GENERER LES INFOS DU VIDEO
for (let i = 0; i < data.films.length; i++) {
  lis[i].addEventListener('click', function() {

    var tit = data.films[i].title;
    var dur = data.films[i].duration;
    var auth = data.films[i].author;
    var authLink = data.films[i].author_url;
    var desc = data.films[i].description;
    var rate = data.films[i].rating;
    var cat = data.films[i].category;


    let notes = document.querySelectorAll('.note');
    for (let b = 0; b < notes.length; b++) {
      notes[b].classList.remove('fill');
      for (let a = 0; a < rate; a++) {

        notes[a].classList.add('fill');
      }

    }
    descTitle.innerHTML = data.films[i].title;
    descDur.innerHTML = 'Duration' + dur;
    descAuth.innerHTML = 'Created by' + auth;
    descDesc.innerHTML = desc;
    //descRate.innerHTML = 'Rating' + rate + '/5';

    descCat.innerHTML = 'Genre' + cat;

    descAuth.setAttribute('href', authLink);
    descAuth.setAttribute('target', '_blank');
  });
}
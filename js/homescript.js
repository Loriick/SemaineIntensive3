var filmPic = document.querySelectorAll('.filmPic');
var filmItemContainer = document.querySelector('.filmItemContainer');
var image = "";
var player = document.querySelector('.playerBox');
var filterItems = document.querySelectorAll('.filterItems');
var btnAll = document.querySelector('.all');
var btnYear = document.querySelectorAll('.years');
var descTitle = document.querySelector('.descTitle');
var descDur = document.querySelector('.descDur');
var descAuth = document.querySelector('.descAuth');
var descRate = document.querySelector('.descRate');
var descCat = document.querySelector('.descCat');
var descDesc = document.querySelector('.descDesc');
var descYear = document.querySelector('.descYear');
var movieAll = document.querySelector('.movieAll');
var searchbar = document.querySelector('.searchbar');
var notes = document.querySelectorAll('.ratingInfo');
var tempsTotal = document.querySelector('#tempsTotal');
var source = data.films.src;
var play = document.querySelector('.play_pause');
var stop = document.getElementById("stop");
var fullscreenbtn = document.getElementById("fullscreenbtn");
var volumeslider = document.getElementById("volumeslider");
var mutebtn = document.getElementById("mutebtn");
var curtimetext = document.getElementById("curtimetext");
var tempsTotal = document.getElementById("tempsTotal");
var timeline = document.getElementById('progressBar');
var btnContainer = document.querySelector('.btnContainer');
var megaContainer = document.querySelector('.megaContainer');
var playerContainer = document.querySelector('.playerContainer');
var searchbar = document.querySelector('.searchbar');
var playContainLa = document.querySelector('.playContainLa');
var yaw = document.querySelector('.yaw');

//GENERER DIV ET IMAGE
for (let j = 0; j < data.films.length; j++) {
  image += '<div class="filmItem">';
  image += '<img class="filmPic" src="' + data.films[j].img + '" alt="">';
  image += '<h4 class="filmTitle">' + data.films[j].title + '</h4>';
  image += '</div>';
}
filmItemContainer.innerHTML = image;

//LIER LES SRC AUX IMAGES
/*filmItemContainer.addEventListener('click', function(event){
  //console.log(event.target.parentElement.className);
})*/

var filmItem = document.querySelectorAll('.filmItem');
for (let i = 0; i < filmItem.length; i++) {
  filmItem[i].addEventListener('click', function() {
    player.setAttribute('src', data.films[i].src);
    player.play();
    play.style.backgroundImage = "url('img/pause_button.svg')";
    yaw.style.display = "block";
    descTitle.classList.remove("hia");
  })
}

//hover
var filmTitle = document.querySelectorAll('.filmTitle');
var filmPic = document.querySelectorAll('.filmPic');
for (let i = 0; i < filmPic.length; i++) {
  filmPic[i].addEventListener('mouseover', function() {
    for (let w = 0; w < filmPic.length; w++) {
      if (i === w) {
        filmPic[i].classList.add('over');
        for (var j = 0; j < data.films.length; j++) {
          filmPic.innerHTML = '<p>' + data.films[j].title + '</p>';
        }
      }
    }
  });
  filmPic[i].addEventListener('mouseout', function() {
    for (var i = 0; i < filmPic.length; i++) {
      filmPic[i].classList.remove('over');
    }
  })

}
for (let i = 0; i < filmPic.length; i++) {
  filmTitle[i].addEventListener('mouseover', function() {
    for (let w = 0; w < filmPic.length; w++) {
      if (i === w) {
        filmPic[i].classList.add('over');
        for (var j = 0; j < data.films.length; j++) {
          filmPic.innerHTML = '<p>' + data.films[j].title + '</p>';
        }
      }
    }
  });
  filmTitle[i].addEventListener('mouseout', function() {
    for (var i = 0; i < filmPic.length; i++) {
      filmPic[i].classList.remove('over');
    }
  })

}


//FILTER
for (var i = 0; i < filterItems.length; i++) {
  filterItems[i].addEventListener('click', function() {
    for (var i = 0; i < data.films.length; i++) {
      if (data.films[i].category !== this.dataset.genre) {
        filmItem[i].style.display = 'none';
      } else {
        filmItem[i].style.display = '';
      }
    }
  })
}

btnAll.addEventListener('click', function() {
  for (var a = 0; a < data.films.length; a++) {
    //bullshit
    if (data.films.category === this.dataset.gentre) {
      filmItem[a].style.display = 'block';
    }
  }
})

//FILTER PAR ANNEE
for (var b = 0; b < btnYear.length; b++) {
  btnYear[b].addEventListener('click', function() {
    console.log('hi');
    for (var i = 0; i < data.films.length; i++) {
      if (data.films[i].year != this.dataset.year) {
        filmItem[i].style.display = 'none';
      } else {
        filmItem[i].style.display = '';
      }
    }
  })
}


//FILTRER AVEC LE INPUT
// searchbar.addEventListener('input', function() {
//   if (searchbar.value !== '') {
//     filmItemContainer.innerHTML = '';
//
//     data.films.forEach(function(els) {
//       if (els.category.toUpperCase().indexOf(searchbar.value.toUpperCase()) > -1) {
//         if (els.category == 'categories') {
//           console.log(searchbar.value);
//           filmItemContainer.innerHTML += '<div class="filmItem"><img class="filmPic" src="' + els.img + '" alt=""></div>';
//         } else if (els.category == category) {
//           filmItemContainer.innerHTML += '<div class="filmItem"><img class="filmPic" src="' + els.img + '" alt=""></div>';
//         }
//       }
//     });
//
//     if (filmItemContainer.innerHTML == '') {
//       filmItemContainer.innerHTML = '<p>aucun film trouvé';
//     }
//   } else {
//     filmItemContainer.innerHTML = '';
//
//     data.films.forEach(function(els) {
//       filmItemContainer.innerHTML += '<div class="filmItem"><img class="filmPic" src="' + els.img + '" alt=""></div>';
//     });
//   }
// });


//CHANGER LE ALL MOVIE
for (var i = 0; i < filterItems.length; i++) {
  filterItems[i].addEventListener('click', function() {
    for (var a = 0; a < data.films.length; a++) {
      if (data.films[a].category === this.dataset.genre) {
        //filmItem[i].style.display = 'none';
        movieAll.innerHTML = data.films[a].category;
      }
    }
  })
}

btnAll.addEventListener('click', function() {
  for (var a = 0; a < data.films.length; a++) {
    //bullshit
    if (data.films.category == this.dataset.gentre) {
      movieAll.innerHTML = "All movies";
    }
  }
})

for (var b = 0; b < btnYear.length; b++) {
  btnYear[b].addEventListener('click', function() {
    for (var i = 0; i < data.films.length; i++) {
      if (data.films[i].year == this.dataset.year) {
        movieAll.innerHTML = data.films[i].year;
      }
    }
  })
}

//GENERER LES INFOS
//GENERER LES INFOS DES VIDEOS
for (let i = 0; i < data.films.length; i++) {
  filmItem[i].addEventListener('click', function() {

    var tit = data.films[i].title;
    var dur = data.films[i].duration;
    var auth = data.films[i].author;
    var authLink = data.films[i].author_url;
    var desc = data.films[i].description;
    var rate = data.films[i].rating;
    var cat = data.films[i].category;
    var annee = data.films[i].year;

    //GENERER LES NOTES

    for (var j = 0; j < 5; j++) {
      notes[j].classList.remove("noted");
    }
    for (var j = 0; j < rate; j++) {
      notes[j].classList.add("noted");
    }

    descTitle.innerHTML = data.films[i].title;
    descDur.innerHTML = dur;
    descAuth.innerHTML = auth;
    descDesc.innerHTML = desc;
    descCat.innerHTML = cat;
    descYear.innerHTML = annee;

    descAuth.setAttribute('href', authLink);
    descAuth.setAttribute('target', '_blank');

    tempsTotal.innerHTML = dur;
  });
}

//CLASS SELECTED

for (let i = 0; i < filterItems.length; i++) {
  filterItems[i].addEventListener('click', function() {
    for (var a = 0; a < filterItems.length; a++) {
      filterItems[a].classList.remove('selected');
    }
    filterItems[i].classList.add('selected');
  });
};


//******************************
//Pour le Play/Pause de la vidéo
//******************************

//player.setAttribute("src", source);
// play.addEventListener('click', playPause, false);
//
// function playPause() {
//   if (player.paused) {
//     player.play();
//     play.style.backgroundImage = "url('img/pause_button.svg')";
//   } else {
//     player.pause();
//     play.style.backgroundImage = "url('img/play_button.svg')";
//   }
// };









//******************************
//Pour le Play/Pause de la vidéo
//******************************

play.addEventListener('click', playPause, false);

function playPause() {
  if (player.paused) {
    player.play();
    play.style.backgroundImage = "url('img/pause_button.svg')";
  } else {
    player.pause();
    play.style.backgroundImage = "url('img/play_button.svg')";
  }
};

//**************************************************
//Pour stopper la vidéo et la faire revenir au début
//**************************************************
stop.addEventListener('click', stopVideo, true);

function stopVideo() {
  if (player.currentTime >= 1) {
    player.currentTime = player.currentTime - player.currentTime;
    player.pause();
    play.style.backgroundImage = "url('img/play_button.svg')";
  }
}


//****************************
//Pour l'affichage plein écran
//****************************

fullscreenbtn.addEventListener("click", monFullScreen, false);


function monFullScreen() {
  if (btnContainer.requestFullScreen) {
    btnContainer.requestFullScreen();
    player.style.width = "100%";
    player.style.height = "100%";
    megaContainer.style.zIndex = "0";

  } else if (btnContainer.webkitRequestFullScreen) {
    btnContainer.webkitRequestFullScreen();
    player.style.width = "100%";
    player.style.height = "100%";
    megaContainer.style.bottom = "0";
  } else if (btnContainer.mozRequestFullScreen) {
    btnContainer.mozRequestFullScreen();
    player.style.width = "100%";
    player.style.height = "100%";
    megaContainer.style.bottom = "0";
  }
}


player.addEventListener('dblclick', function() {
  megaContainer.style.zIndex = '-1';
});
player.addEventListener('click', function() {
  megaContainer.style.zIndex = '0';
});

// window.addEventListener('keyup', function(event) {
//   if (event.which == 91+70) {
//     monFullScreen();
//     player.play();
//     play.style.backgroundImage = "url('img/pause_button.svg')";
//   }
// });

//**************************************
//Pour l'affichage du menu enplein écran
//**************************************



//******************************
//Pour la gestion du mute volume
//******************************

mutebtn.addEventListener("click", vidmute, false);

function vidmute() {
  if (player.muted) {
    player.muted = false;
    mutebtn.style.backgroundImage = "url('img/volume_icon.svg')";

    //mutebtn.innerHTML = "Mute";
    volumeslider.value = 100;
  } else {
    player.muted = true;
    mutebtn.style.backgroundImage = "url('img/volume_iconmute.svg')";
    //mutebtn.innerHTML = "unMute";
    volumeslider.value = 0;
  }
}

//*************************
//Pour la gestion du volume
//*************************

volumeslider.addEventListener("change", setvolume, false);

function setvolume() {
  player.volume = volumeslider.value / 100;
}

//*****************************************
//Pour la gestion de la bare de progression
//*****************************************


//timeline.style.backgroundColor = "#FEDE10";



//***************************
//Pour la bare de progression
//***************************

timeline.addEventListener("input", myProgressBar, false);

player.addEventListener('timeupdate', function() {
  if (!player.currentTime) {
    timeline.value = 0;
  }

  timeline.value = player.currentTime / player.duration * 100;

  var minutes = Math.floor(player.currentTime / 60);
  var secondes = Math.floor(player.currentTime - 60 * minutes);

  if (secondes < 10) {
    tempsEnCours.textContent = minutes + ':' + '0' + secondes;
  } else {
    tempsEnCours.textContent = minutes + ':' + secondes;
  }
});

function myProgressBar() {
  var aller_a = player.duration * (timeline.value / 100);
  player.currentTime = aller_a;
}
/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*===================== remove message =========================*/
const close = document.getElementById('message-close')
const box = document.getElementById('message-box')

close.addEventListener('click',()=>{
  box.classList.add('close__message')
})


/*================================================= */
  const data = [{
    imgurl : "../assets/img/about1.jpg",
    href : "view.html?name=about1.jpg&2020"
  },
  {
    imgurl : "../assets/img/about2.jpg",
    href : "view.html?name=about2.jpg&2019"
  },
  {
    imgurl : "../assets/img/choose1.jpg",
    href : "view.html?name=choose1.jpg&2021"
  },
  {
    imgurl : "../assets/img/choose2.jpg",
    href : "view.html?name=choose2.jpg&2017"
  },
  {
    imgurl : "../assets/img/choose3.jpg",
    href : "view.html?name=choose3.jpg&2018"
  },
  {
    imgurl : "../assets/img/choose5.jpg",
    href : "view.html?name=choose5.jpg&2019"
  },
  {
    imgurl : "../assets/img/discover1.jpg",
    href : "view.html?name=discover1.jpg&2020"
  },
  {
    imgurl : "../assets/img/discover3.jpg",
    href : "view.html?name=discover3.jpg&2020"
  },
  {
    imgurl : "../assets/img/discover4.jpg",
    href : "view.html?name=discover4.jpg&2015"
  },
  {
    imgurl : "../assets/img/experience2.jpg",
    href : "view.html?name=experience2.jpg&2017"
  },
  {
    imgurl : "../assets/img/home1.jpg",
    href : "view.html?name=home1.jpg&2019"
  },
  {
    imgurl : "../assets/img/discover2.jpg",
    href : "view.html?name=discover2.jpg&2020"
  },
  {
    imgurl : "../assets/img/home2.jpg",
    href : "view.html?name=home2.jpg&2020"
  },
  {
    imgurl : "../assets/img/choose4.jpg",
    href : "view.html?name=choose4.jpg&2019"
  },
  {
    imgurl : "../assets/img/about1.jpg",
    href : "view.html?name=about1.jpg&2020"
  },
  {
    imgurl : "../assets/img/about2.jpg",
    href : "view.html?name=about2.jpg&2019"
  },
  {
    imgurl : "../assets/img/choose1.jpg",
    href : "view.html?name=choose1.jpg&2021"
  },
  {
    imgurl : "../assets/img/choose2.jpg",
    href : "view.html?name=choose2.jpg&2017"
  },
  {
    imgurl : "../assets/img/choose3.jpg",
    href : "view.html?name=choose3.jpg&2018"
  },
  {
    imgurl : "../assets/img/choose5.jpg",
    href : "view.html?name=choose5.jpg&2019"
  },
  {
    imgurl : "../assets/img/discover1.jpg",
    href : "view.html?name=discover1.jpg&2020"
  },
  {
    imgurl : "../assets/img/discover3.jpg",
    href : "view.html?name=discover3.jpg&2020"
  },
  {
    imgurl : "../assets/img/discover4.jpg",
    href : "view.html?name=discover4.jpg&2015"
  },
  {
    imgurl : "../assets/img/experience2.jpg",
    href : "view.html?name=experience2.jpg&2017"
  },
  {
    imgurl : "../assets/img/home1.jpg",
    href : "view.html?name=home1.jpg&2019"
  },
  {
    imgurl : "../assets/img/discover2.jpg",
    href : "view.html?name=discover2.jpg&2020"
  },
  {
    imgurl : "../assets/img/home2.jpg",
    href : "view.html?name=home2.jpg&2020"
  },
  {
    imgurl : "../assets/img/choose4.jpg",
    href : "view.html?name=choose4.jpg&2019"
  },
  {
    imgurl : "../assets/img/about1.jpg",
    href : "view.html?name=about1.jpg&2020"
  },
  {
    imgurl : "../assets/img/about2.jpg",
    href : "view.html?name=about2.jpg&2019"
  },
  {
    imgurl : "../assets/img/choose1.jpg",
    href : "view.html?name=choose1.jpg&2021"
  },
  {
    imgurl : "../assets/img/choose2.jpg",
    href : "view.html?name=choose2.jpg&2017"
  },
  {
    imgurl : "../assets/img/choose3.jpg",
    href : "view.html?name=choose3.jpg&2018"
  },
  {
    imgurl : "../assets/img/choose5.jpg",
    href : "view.html?name=choose5.jpg&2019"
  },
  {
    imgurl : "../assets/img/discover1.jpg",
    href : "view.html?name=discover1.jpg&2020"
  },
  {
    imgurl : "../assets/img/discover3.jpg",
    href : "view.html?name=discover3.jpg&2020"
  },
  {
    imgurl : "../assets/img/discover4.jpg",
    href : "view.html?name=discover4.jpg&2015"
  },
  {
    imgurl : "../assets/img/experience2.jpg",
    href : "view.html?name=experience2.jpg&2017"
  },
  {
    imgurl : "../assets/img/home1.jpg",
    href : "view.html?name=home1.jpg&2019"
  },
  {
    imgurl : "../assets/img/discover2.jpg",
    href : "view.html?name=discover2.jpg&2020"
  },
  {
    imgurl : "../assets/img/home2.jpg",
    href : "view.html?name=home2.jpg&2020"
  },
  {
    imgurl : "../assets/img/choose4.jpg",
    href : "view.html?name=choose4.jpg&2019"
  },
  {
    imgurl : "../assets/img/about1.jpg",
    href : "view.html?name=about1.jpg&2020"
  },
  {
    imgurl : "../assets/img/about2.jpg",
    href : "view.html?name=about2.jpg&2019"
  },
  {
    imgurl : "../assets/img/choose1.jpg",
    href : "view.html?name=choose1.jpg&2021"
  },
  {
    imgurl : "../assets/img/choose2.jpg",
    href : "view.html?name=choose2.jpg&2017"
  },
  {
    imgurl : "../assets/img/choose3.jpg",
    href : "view.html?name=choose3.jpg&2018"
  },
  {
    imgurl : "../assets/img/choose5.jpg",
    href : "view.html?name=choose5.jpg&2019"
  },
  {
    imgurl : "../assets/img/discover1.jpg",
    href : "view.html?name=discover1.jpg&2020"
  },
  {
    imgurl : "../assets/img/discover3.jpg",
    href : "view.html?name=discover3.jpg&2020"
  },
  {
    imgurl : "../assets/img/discover4.jpg",
    href : "view.html?name=discover4.jpg&2015"
  },
  {
    imgurl : "../assets/img/experience2.jpg",
    href : "view.html?name=experience2.jpg&2017"
  },
  {
    imgurl : "../assets/img/home1.jpg",
    href : "view.html?name=home1.jpg&2019"
  },
  {
    imgurl : "../assets/img/discover2.jpg",
    href : "view.html?name=discover2.jpg&2020"
  },
  {
    imgurl : "../assets/img/home2.jpg",
    href : "view.html?name=home2.jpg&2020"
  },
  {
    imgurl : "../assets/img/choose4.jpg",
    href : "view.html?name=choose4.jpg&2019"
  }
]

  for(let i =0; i < data.length ; i++){
    let newDiv = '<div class="gallery__block" id="'+i+'">';
    newDiv += '<div class="gallery__box">';
    newDiv += '<div class="new">NEW</div>';
    newDiv += '<a href="'+data[i].href+'" class="img_link">';
    newDiv += '<img src="'+data[i].imgurl+'" alt="" class="gallery__img">';
    newDiv += '</a>';
    newDiv += '<div class="like"><i class="ri-heart-2-fill like_icon"></i>+<span class="clickcount"></span>';
    newDiv += '</div>';
    newDiv += '</div>';
    newDiv += '</div>';

    $(".gallery__container").append(newDiv);
  }
   
  /*====================== like image =======================*/

let likecount = [];

if(localStorage.getItem('count')==null){
  for(let j = 0;j < data.length; j++){
    likecount.push(0)
    $("#"+j).find(".clickcount").html(0);
  }
  localStorage.setItem('count',JSON.stringify(likecount))
}
else{
  likecount = JSON.parse(localStorage.getItem('count'))
  for(let x = 0; x < likecount.length; x++){
    $("#"+x).find(".clickcount").html(likecount[x]);
  }
}


$(".gallery__block").dblclick(function() {
  let i = $(this).attr("id")
  likecount[i] = likecount[i] + 1;
  localStorage.setItem('count',JSON.stringify(likecount));
  $(this).find(".clickcount").html(likecount[i]);
  
  const showHeart = () => {
    const heart = document.createElement('i');
    heart.classList.add('ri-heart-2-fill');
    heart.classList.add('fade_like');
    $(this).append(heart);
  
    setTimeout(()=>{
      heart.remove();
    },800);
  }
  showHeart();
});



/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'


// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')

const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'

const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'moon' : 'sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


// scroll menu header
(function(){
    const nav = document.querySelector('.header__nav');
    window.addEventListener('scroll', function(){
        if(document.documentElement.scrollTop > 30){
            nav.classList.add('active');
            document.querySelector('.header__nav-logo').src = '../../../assets/img/logo-dark.png';
        }else{
            nav.classList.remove('active');
            document.querySelector('.header__nav-logo').src = '../../../assets/img/logo (1).png';
        }
    })
})();

// responsive menu header
(function(){
  const headerItem = document.querySelector('.header__nav-items');
  const headerBtn = document.querySelector('.header__nav-btn');
  window.addEventListener('resize', function(){
    if(document.documentElement.scrollWidth > 1023){
      headerItem.style.display = 'flex';
    }else if(document.documentElement.scrollWidth <= 1023){
      headerItem.style.display = 'none';
    }
  })
})();

// click mở thanh menu mobile tablet
(function(){
    const headerItem = document.querySelector('.header__nav-items');
    const headerBtn = document.querySelector('.header__nav-btn');
    if(window.innerWidth < 1024){
        headerItem.style.display = 'none';
    }else{
        headerItem.style.display = 'flex';
    }
    headerBtn.addEventListener('click', function(){
        if(headerItem.style.display == 'none'){
            headerItem.style.display = 'block';
        }else{
            headerItem.style.display = 'none';
        }
    })
})();

// banner header
(function(){
  const header = document.querySelector('.header');
  const sliderIcon = document.querySelectorAll('.header__nav-btn-slider-icon');
  const myImgHeader = [
    {
      id: 0,
      path: "../../../assets/img/1\ \(6\).jpg",
    },
    {
      id: 1,
      path: "../../../assets/img/2\ \(6\).jpg",
    },
    {
      id: 2,
      path: "../../../assets/img/3\ \(6\).jpg",
    },
  ]
  var count = 0;
  for(var i=0; i<sliderIcon.length; i++){
    sliderIcon[i].addEventListener('click', function(){
      count++;
      document.querySelector('.header__nav-btn-slider-icon.active').classList.remove('active');
      this.classList.add('active');
      for(var i=0; i<sliderIcon.length; i++){
        if(this === sliderIcon[i] && i === myImgHeader[i].id){
          header.style.backgroundImage = `url("${myImgHeader[i].path}")`;
        }
      }
    })
  }
  function autoNextImg(){
    setTimeout(function(){
      count++;
      if(count >= myImgHeader.length){
        count = 0;
      }
      header.style.backgroundImage = `url("${myImgHeader[count].path}")`;
      document.querySelector('.header__nav-btn-slider-icon.active').classList.remove('active');
      sliderIcon[count].classList.add('active');
      autoNextImg()
    },5000)
  }
  autoNextImg();
})();

// next item Restaurant Menu
(function(){
  const menuItemWrap = document.querySelector('.container__restaurant-menu-items');
  const menuItem = document.querySelectorAll('.container__restaurant-menu-item');
  const prevBtn = document.querySelector('.container__restaurant-menu-btn-prev');
  const nextBtn = document.querySelector('.container__restaurant-menu-btn-next');
  var count = 0;
  function NextBtn(){
    count = count - menuItem[0].offsetWidth;
    if(document.documentElement.clientWidth >=1024){
      if(count < (menuItemWrap.offsetWidth - menuItemWrap.scrollWidth)){
        count = 0;
      }
    }
    for(var i=0; i<menuItem.length; i++){
      menuItem[i].style.transform = `translate3d(${count}px, 0, 0)`;
    }
  }
  nextBtn.addEventListener('click', NextBtn)
  prevBtn.addEventListener('click', function(){
    count = menuItem[0].offsetWidth + count;
    if(count > 0){
      count = 0;
    }
    for(var i=0; i<menuItem.length; i++){
      menuItem[i].style.transform = `translate3d(${count}px, 0, 0)`;
    }
  })
  for(var i=0; i<menuItem.length; i++){
    menuItem[i].addEventListener('click', function(){
      document.querySelector('.container__restaurant-menu-item.active').classList.remove('active');
      this.classList.add('active');
    })
  }
})();

// slide comment
$('.comment-items').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});

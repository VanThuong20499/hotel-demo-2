// scroll menu header
(function(){
    const nav = document.querySelector('.header__nav');
    window.addEventListener('scroll', function(){
        if(document.documentElement.scrollTop > 30){
            nav.classList.add('active');
            document.querySelector('.header__nav-logo').src = '../../../../assets/img/logo-dark.png';
        }else{
            nav.classList.remove('active');
            document.querySelector('.header__nav-logo').src = '../../../../assets/img/logo (1).png';
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
      path: "../../../../assets/img/header2.jpg",
    },
    {
      id: 1,
      path: "../../../../assets/img/header1.jpg",
    },
    {
      id: 2,
      path: "../../../../assets/img/rooms.jpg",
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

// slide rooms-suites
$('.js-rooms-suites').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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


// slide Extra Services
$('.services-items').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
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

// slide clients
(function(){
    const myImgs = [
        {
            path: '../../../../assets/img/1.png'
        },
        {
            path: '../../../../assets/img/2.png'
        },
        {
            path: '../../../../assets/img/3.png'
        },
        {
            path: '../../../../assets/img/4.png'
        },
        {
            path: '../../../../assets/img/5.png'
        },
        {
            path: '../../../../assets/img/6.png'
        }
    ]
    var client = document.querySelector('.container__clients-item');
    var widthClient = 2664;
    var count = 0;
    var width = 0;
    function nextClients(){
        setTimeout(function(){
            var imgNew = document.createElement("img");
            width = width + 222;
            client.style.width = `${widthClient + width}px`;
            imgNew.src = `${myImgs[count].path}`;
            client.appendChild(imgNew, client);
            count++;
            if(count >= myImgs.length){
                count = 0;
            }
            client.style.transform = `translate3d( -${width}px, 0, 0)`;
            nextClients();
        },1000)
    }
    nextClients()
})();
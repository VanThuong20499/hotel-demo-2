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
        path: "../../../assets/img/3\ \(3\).jpg",
      },
      {
        id: 1,
        path: "../../../assets/img/1\ \(4\).jpg",
      },
      {
        id: 2,
        path: "../../../assets/img/2\ \(4\).jpg",
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

// view

(function(){
    const viewItems = document.querySelectorAll('.container__view-item');
    const viewImgs = document.querySelectorAll('.container__view-img');
    for(var i=0; i<viewImgs.length; i++){
        viewImgs[i].style.opacity = 0;
        viewItems[i].style.opacity = 0;
    }
    var count = 0;
    function scrollView(){
        if(document.documentElement.scrollTop >= viewImgs[count].offsetTop - 500){
            if(count % 2 == 0){
                viewImgs[count].animate([
                    {
                        transform: 'translateX(-50px)',
                        opacity: 0
                    },
                    {
                        transform: 'translateX(0px)',
                        opacity: 1
                    },
                ],{
                    duration: 1000,
                })
    
                viewItems[count].animate([
                    {
                        transform: 'translateX(50px)',
                        opacity: 0
                    },
                    {
                        transform: 'translateX(0px)',
                        opacity: 1
                    },
                ],{
                    duration: 1000,
                })
            }else{
                viewImgs[count].animate([
                    {
                        transform: 'translateX(50px)',
                        opacity: 0
                    },
                    {
                        transform: 'translateX(0px)',
                        opacity: 1
                    },
                ],{
                    duration: 1000,
                })
    
                viewItems[count].animate([
                    {
                        transform: 'translateX(-50px)',
                        opacity: 0
                    },
                    {
                        transform: 'translateX(0px)',
                        opacity: 1
                    },
                ],{
                    duration: 1000,
                })
            }
            viewImgs[count].style.opacity = 1;
            viewItems[count].style.opacity = 1;
            count++;
            if(count >= viewImgs.length){
                window.removeEventListener('scroll', scrollView)
            }
        }
    }
    window.addEventListener('scroll', scrollView)
})();

// click item Spa Etiquette

(function(){
    const spaBtnsOpen = document.querySelectorAll('.container__spa-etiquette-btn.open');
    const spaBtnsClose = document.querySelectorAll('.container__spa-etiquette-btn.close');
    const spaTitles = document.querySelectorAll('.container__spa-etiquette-item-title');
    const spaText = document.querySelectorAll('.container__spa-etiquette-items p');
    const spaWraps = document.querySelectorAll('.container__spa-etiquette-items');
    for(var i=0; i<spaWraps.length; i++){
        spaWraps[i].setAttribute('style', `height: ${spaTitles[0].clientHeight}px`);
    }
    for(var i=0; i<spaBtnsOpen.length; i++){
        let _thisSpaTitles = spaTitles[i];
        let _thisSpaText = spaText[i];
        let _thisSpaWraps = spaWraps[i];
        spaBtnsOpen[i].addEventListener('click', function(){
            if(document.querySelector('.container__spa-etiquette-item-title.active')){
                document.querySelector('.container__spa-etiquette-item-title.active').classList.remove('active');
                document.querySelector('.container__spa-etiquette-items .open-text').classList.remove('open-text');
                for(var i=0; i<spaWraps.length; i++){
                    spaWraps[i].setAttribute('style', `height: ${spaTitles[0].clientHeight}px`);
                }
            }
            _thisSpaTitles.classList.add('active');
            _thisSpaText.classList.add('open-text');
            _thisSpaWraps.setAttribute('style', `height: ${_thisSpaTitles.clientHeight + _thisSpaText.clientHeight}px`);
        })
    }
    for(var i=0; i<spaBtnsClose.length; i++){
        let _thisSpaTitles = spaTitles[i];
        let _thisSpaText = spaText[i];
        let _thisSpaWraps = spaWraps[i];
        spaBtnsClose[i].addEventListener('click', function(){
            _thisSpaTitles.classList.remove('active');
            _thisSpaText.classList.remove('open-text');
            _thisSpaWraps.setAttribute('style', `height: ${_thisSpaTitles.clientHeight}px`);
        })
    }
})();

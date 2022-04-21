// scroll menu header
(function(){
    const nav = document.querySelector('.header__nav');
    window.addEventListener('scroll', function(){
        if(document.documentElement.scrollTop > 30){
            nav.classList.add('active');
            document.querySelector('.header__nav-logo').src = './assets/img/logo-dark.png';
        }else{
            nav.classList.remove('active');
            document.querySelector('.header__nav-logo').src = './assets/img/logo (1).png';
        }
    })
})();

// Chuyển banner header

(function(){
    const myArrayImg = [
        {
            id: 0,
            title: 'Enjoy a Luxury Experience',
            text: 'Luxury Hotel & Best Resort',
            path: './assets/img/header1.jpg'
        },
        {
            id: 1,
            title: 'The Perfect Base For You',
            text: 'Unique Place to Relax & Enjoy',
            path: './assets/img/header2.jpg'
        },
        {
            id: 2,
            title: 'Enjoy The Best Moments of Life',
            text: 'The Ultimate Luxury Experience',
            path: './assets/img/header3.jpg'
        },
    ];
    const headerBtn = document.querySelectorAll('.header__container-title-btn i');
    const headerImg = document.querySelector('.header');
    const headerText = document.querySelector('.header__container-title h5');
    const headerTitle = document.querySelector('.header__container-title h1');
    const headerStar = document.querySelector('.header__container-title .header__container-star');
    const headerLink = document.querySelector('.header__container-title .header__container-title-link');
    var count = 0;
    function transfer(){
        count++;
        document.querySelector('.header__container-title-btn .active').classList.remove('active');
        this.classList.add('active');
        for(var i=0; i<myArrayImg.length; i++){
            if(this === headerBtn[myArrayImg[i].id]){
                headerImg.style.backgroundImage = `url('${myArrayImg[i].path}')`;
                headerText.textContent = myArrayImg[i].text;
                headerTitle.textContent = myArrayImg[i].title;
                headerText.style.opacity = 0;
                headerTitle.style.opacity = 0;
                headerLink.style.opacity = 0;
                // animation
                headerImg.animate([
                    {
                        opacity: 0.7
                    },
                    {
                        opacity: 1
                    }
                ],{
                    duration: 1000
                })

                function sleep(ms){
                    return new Promise((resolve) => {
                        setTimeout(resolve, ms)
                    })
                }

                sleep(0)
                    .then(() =>{
                        headerStar.animate([
                            {
                                transform: 'translateY(50px)',
                                opacity: 0
                            },
                            {
                                transform: 'translateY(0px)',
                                opacity: 1
                            },
                        ],{
                            duration: 1000,
                        })
                        return sleep(500)
                    })
                    .then(() =>{
                        headerText.animate([
                            {
                                transform: 'translateY(50px)',
                                opacity: 0
                            },
                            {
                                transform: 'translateY(0px)',
                                opacity: 1
                            },
                        ],{
                            duration: 800,
                        })
                        headerText.style.opacity = 1;
                        return sleep(500)
                    })
                    .then(() =>{
                        headerTitle.animate([
                            {
                                transform: 'translateY(40px)',
                                opacity: 0
                            },
                            {
                                transform: 'translateY(0px)',
                                opacity: 1
                            },
                        ],{
                            duration: 700,
                        })
                        headerTitle.style.opacity = 1;
                        return sleep(500)
                    })
                    .then(() =>{
                        headerLink.animate([
                            {
                                transform: 'translateY(30px)',
                                opacity: 0
                            },
                            {
                                transform: 'translateY(0px)',
                                opacity: 1
                            },
                        ],{
                            duration: 600,
                        })
                        headerLink.style.opacity = 1;
                    })
            }
        }
    }
    for(var i=0; i<headerBtn.length; i++){
        headerBtn[i].addEventListener('click', transfer)
    }

    function autoNext(){
        setTimeout(function(){
            count++;
            if(count >= myArrayImg.length){
                count = 0;
            }
            headerImg.style.backgroundImage = `url('${myArrayImg[count].path}')`;
            document.querySelector('.header__container-title-btn .active').classList.remove('active');
            headerBtn[count].classList.add('active');
            headerText.textContent = myArrayImg[count].text;
            headerTitle.textContent = myArrayImg[count].title;
            headerText.style.opacity = 0;
            headerTitle.style.opacity = 0;
            headerLink.style.opacity = 0;
            // animation
            headerImg.animate([
                {
                    opacity: 0.7
                },
                {
                    opacity: 1
                }
            ],{
                duration: 1000
            })

            function sleep(ms){
                return new Promise((resolve) => {
                    setTimeout(resolve, ms)
                })
            }

            sleep(0)
                .then(() =>{
                    headerStar.animate([
                        {
                            transform: 'translateY(50px)',
                            opacity: 0
                        },
                        {
                            transform: 'translateY(0px)',
                            opacity: 1
                        },
                    ],{
                        duration: 1000,
                    })
                    return sleep(500)
                })
                .then(() =>{
                    headerText.animate([
                        {
                            transform: 'translateY(50px)',
                            opacity: 0
                        },
                        {
                            transform: 'translateY(0px)',
                            opacity: 1
                        },
                    ],{
                        duration: 800,
                    })
                    headerText.style.opacity = 1;
                    return sleep(500)
                })
                .then(() =>{
                    headerTitle.animate([
                        {
                            transform: 'translateY(40px)',
                            opacity: 0
                        },
                        {
                            transform: 'translateY(0px)',
                            opacity: 1
                        },
                    ],{
                        duration: 700,
                    })
                    headerTitle.style.opacity = 1;
                    return sleep(500)
                })
                .then(() =>{
                    headerLink.animate([
                        {
                            transform: 'translateY(30px)',
                            opacity: 0
                        },
                        {
                            transform: 'translateY(0px)',
                            opacity: 1
                        },
                    ],{
                        duration: 600,
                    })
                    headerLink.style.opacity = 1;
                })
            autoNext();
        }, 10000);
    }
    autoNext();
})();

// scroll container__experience-warp
function scrollExper(){
    const experience = document.querySelector('.container__experience .grid.wide');
    experience.style.opacity = 0;
    function scrollTrans(){
        if(document.documentElement.scrollTop >= experience.offsetTop - 600){
            experience.animate([
                {
                    transform: 'translateY(100px)',
                    opacity: 0
                },
                {
                    transform: 'translateY(0px)',
                    opacity: 1
                },
            ],{
                duration: 1000,
            })
            experience.style.opacity = 1;
            window.removeEventListener('scroll', scrollTrans)
        }
    }
    window.addEventListener('scroll', scrollTrans)
}
scrollExper();

// hien thi video

(function(){
    const playVideo = document.querySelector('.container__video-play');
    const video = document.querySelector('.video__home');
    playVideo.addEventListener('click', function(){
        video.style.display = 'flex';
    })
    video.addEventListener('click', function(event){
        if(event.target === video){
            video.style.display = 'none';
        }
    })
})();

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

// slide Extra Services

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

// slide clients
(function(){
    const myImgs = [
        {
            path: './assets/img/1.png'
        },
        {
            path: './assets/img/2.png'
        },
        {
            path: './assets/img/3.png'
        },
        {
            path: './assets/img/4.png'
        },
        {
            path: './assets/img/5.png'
        },
        {
            path: './assets/img/6.png'
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
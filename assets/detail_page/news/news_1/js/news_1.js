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

// reposive tablet vs mobile rooms-suites

(function(){
    const roomItems = document.querySelectorAll('.container__rooms-suites .row.p-relative');
    if(this.innerWidth < 1024){
        for(var i=0; i<roomItems.length; i++){
            roomItems[i].classList.remove('p-relative');
        }
    }else if(this.innerWidth >= 1024){
        for(var i=0; i<roomItems.length; i++){
            roomItems[i].classList.add('p-relative');
        }
    }
    window.addEventListener('resize', function(){
        if(this.innerWidth < 1024){
            for(var i=0; i<roomItems.length; i++){
                roomItems[i].classList.remove('p-relative');
            }
        }else if(this.innerWidth >= 1024){
            for(var i=0; i<roomItems.length; i++){
                roomItems[i].classList.add('p-relative');
            }
        }
    })
})();

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
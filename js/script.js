(() => {
    window.onload = () => {
      const header__burger = document.querySelector('.header-menu');
      const header__menu = document.querySelector('.nav-list');
      const btn = document.querySelector('.btn')
      const shop = document.querySelector('.shopping-num')
      const body = document.querySelector('body');
      header__burger.addEventListener('click', (e)=> {
        header__burger.classList.toggle('active');
        header__menu.classList.toggle('active');
        body.classList.toggle('lock');
      })
      btn.addEventListener ('click', (e)=> {
        shop.classList.add('active');
        
    })
    }
  })();
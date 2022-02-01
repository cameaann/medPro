<template>
  <div class = "header">
        <div class="logo__container">
            <img class="logo" alt="MedPro logo" src="../assets/img/logo.png">
            <span class="logoName">MedPro</span>
        </div>
        <ul v-show="!mobile" class="nav">
            <li class="nav__item active"><a class="link" href="#">Главная</a></li>
            <li class="nav__item"><a class="link" href="#find">Найти врача</a></li>
            <li class="nav__item"><a class="link" href="#services">Услуги</a></li>
            <li class="nav__item"><a class="link" href="#testimonials">Отзывы</a></li>
            <li class="nav__item"><a class="link" href="#about">О нас</a></li>
        </ul>
        <div class="icon" v-show="mobile">
          <i @click="toggleMobileNav" class="far fa-bars" :class="{'icon-active': mobileNav}"></i>
        </div>
        <transition name="mobile-nav">
            <ul v-show="mobileNav" class="nav dropdown-nav">
                <li class="nav__item active" @click="toggleMobileNav"><a class="link" href="#">Главная</a></li>
                <li class="nav__item" @click="toggleMobileNav"><a class="link" href="#find">Найти врача</a></li>
                <li class="nav__item" @click="toggleMobileNav"><a class="link" href="#services">Услуги</a></li>
                <li class="nav__item" @click="toggleMobileNav"><a class="link" href="#testimonials">Отзывы</a></li>
                <li class="nav__item" @click="toggleMobileNav"><a class="link" href="#about">О нас</a></li>
            </ul>
        </transition>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return {
      scrollPosition: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null
    }
  },
  created(){
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
    window.addEventListener('click', this.close);
  },
   methods:{
     toggleMobileNav(){
       this.mobileNav = !this.mobileNav;
     },

     checkScreen(){
       this.windowWidth = window.innerWidth;
       if(this.windowWidth <= 750){
         this.mobile = true;
         return;
       }
       this.mobile = false;
       this.mobileNav = false;
       return;
     },
      close(e) {
      if (!(this.$el == e.target || this.$el.contains(e.target))){
        this.mobileNav = false;
      }
    }


  }

}
</script>

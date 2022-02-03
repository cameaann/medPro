<template>
  <div class="about">
    <div class="about__text">{{ this.defineLanguage() }}</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      userLanguage: null,
      brString: null
    }
  },
  methods:{
    defineLanguage(){
      this.userLanguage = window.navigator.language;
   
    if(this.userLanguage == "ru"){
      return this.brString = "Это демо-проект для портфолио Шестаковой Анны. Мой email: cameaann@gmail.com";
    }
    else{
      return this.brString = "This demo-project is made for Anna Shestakova's portfolio. My email: cameaann@gmail.com";
        }
    }

  }
}

</script>
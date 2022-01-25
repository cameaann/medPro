<template>
<div>
  <div class="wrap-container">
    <Header />
    <section class="section" id="find">
      <div class="text-box">
        <div class="main-title">Виртуальная забота о вашем здоровье</div>
        <div class="description">
          MedPro оказывает прогрессивную и доступную медицинскую помощь на
          мобильном телефоне и онлайн
        </div>
        <div class="btn btn__blue">Консультируйтесь сегодня</div>
      </div>
      <img class="section__img" src="../assets/img/main-img.svg" alt="" />
    </section>
    <section class="section" id="services">
      <div class="section-container">
        <div class="text-container">
          <div class="secondary-heading secondary-heading_center">
            Наши услуги
          </div>
          <p class="text text-center">Мы предлагаем вам самый лучший выбор. Настройте приложение под свои медицинские нужды и будете уверены в том, что
            проходите лечение под присмотром наших высококвалифицированных врачей. Вы можете проконсультироваться с нами, какой тип услуг
            подходит вам.
          </p>
        </div>

        <div class="cards-container">
          <ServiceCard
            v-for="service in services"
            :key="service.id"
            :service="service"
          />
        </div>
        <div class="btn btn__white">Узнать больше</div>
      </div>
    </section>
    <section class="section" id="about">
      <img class="section__img" src="../assets/img/img2.svg" alt="" />
      <div class="text-box">
        <div class="secondary-heading secondary-heading_right">
          Ведущие поставщики медицинских услуг
        </div>
        <div class="description">
          MedPro оказывает прогрессивную и доступную медицинскую помощь на
          мобильном телефоне и онлайн. Для нас это не просто работаю Мы гордимся
          теми решениями, которые мы предлагаем.
        </div>
        <div class="btn btn__white">Узнать больше</div>
      </div>
    </section>
    <section class="section" id="apps">
      <div class="text-box">
        <div class="secondary-heading secondary-heading_right">
          Скачивайте наши мобильные приложения
        </div>
        <div class="description">
          Наше приложение и веб портал, ориентированные на пациентов, позволят
          вам получить информацию моментально (нет утомительных форм, долгих
          звонков или административной суеты) и безопасно.
        </div>
        <div class="btn btn__white">
          Скачать
          <img class="icon-arrow" src="../assets/img/icons/arrow.svg" alt="" />
        </div>
      </div>
      <img class="section__img" src="../assets/img/img3.svg" alt="" />
    </section>
    <section class="section blue" id="testimonials">
      <div class="section-container">
        <div class="secondary-heading secondary-heading_white">
          Что говорят наши клиенты
        </div>
      </div>
      <Carousel class="carousel" v-slot="{ currentSlide }">
          <Slide v-for="(client, index) in carouselSlides" :key="index">
             <div v-show="currentSlide === index + 1" class="card-review">
                <div class="person">
                    <img class="person_img" v-bind:src="getUrl(client.photo)" alt="person.name">
                    <div class="person-details">
                          <div class="name">{{client.name}}</div>
                          <div class="prof">{{client.profession}}</div>
                    </div>
                </div>
                <div class="review">{{client.review}}</div>
             </div>
          </Slide>
      </Carousel>
    </section>
    <section class="section one-column">
      <div class="section-container">
        <div class="secondary-heading secondary-heading_center">
          Ознакомьтесь с нашими последними статьями
        </div>

        <div class="cards-container">
          <ArticleCard
            v-for="story in stories"
            :key="story.id"
            :story="story"
          />
        </div>
        <div class="btn btn__white">Посмотреть все</div>
      </div>
    </section>
  </div>
    <Footer />
</div>

</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import ServiceCard from "@/components/Service-card.vue";
import servicesDb from "@/services_db.json";
import articlesDb from "@/articles_db.json";
import clientsDb from "@/clients_db.json";
import Footer from "@/components/Footer.vue";
import ArticleCard from "@/components/Article-card.vue";
import Carousel from "@/components/Carousel.vue";
import Slide from "@/components/Slide.vue";

export default {
  name: "Home",
  components: {
    Header,
    ServiceCard,
    ArticleCard,
    Footer,
    Carousel,
    Slide
  },
  data() {
    return {
      services: servicesDb,
      stories: articlesDb,
      carouselSlides: clientsDb
    };
  },
  methods:{
    getUrl(val){
           return require('../assets/'+ val)
    }
  }

};
</script>

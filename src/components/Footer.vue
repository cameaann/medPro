<template>
  <div class="footer">
    <div class="footer__container">
      <div class="brand-block">
        <div class="logo__container">
          <img class="logo" alt="MedPro logo" src="../assets/img/logo.png" />
          <span class="logoName">MedPro</span>
        </div>
        <div class="brand-text">
          <p>
            MedPro оказывает прогрессивную и доступную медицинскую помощь на
            мобильном телефоне и онлайн
          </p>
          <p>Copyright © ООО "MedPro" 2022. Все права защищены</p>
        </div>
      </div>

      <ul class="grid__links">
        <li class="grid__links-item head">Компания</li>
        <li class="grid__links-item"><a href="#find">Найти врача</a></li>
        <li class="grid__links-item"><a href="#services">Услуги</a></li>
        <li class="grid__links-item"><a href="#testimonials">Отзывы</a></li>
        <li class="grid__links-item"><a href="#about">О нас</a></li>
      </ul>
      <ul class="grid__links">
        <li class="grid__links-item head">Регион</li>
        <li class="grid__links-item"><a href="#">Москва</a></li>
        <li class="grid__links-item"><a href="#">Санкт-Петербург</a></li>
        <li class="grid__links-item"><a href="#">Екатеринбург</a></li>
        <li class="grid__links-item"><a href="#">Архангельск</a></li>
      </ul>
      <ul class="grid__links">
        <li class="grid__links-item head">Помощь</li>
        <li class="grid__links-item"><a href="#">Центр помощи</a></li>
        <li class="grid__links-item"><a href="#">Поддержка</a></li>
        <li class="grid__links-item"><a href="#">Инструкции</a></li>
        <li class="grid__links-item"><a href="#">Как это работает</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

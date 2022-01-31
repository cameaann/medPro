<template>
    <div>
        <slot :currentSlide = "currentSlide" />

        <!-- Navigation -->
        <div v-if="navEnabled" class="navigation">
            <div @click="prevSlide" class="toggle page-left">
                <i class="fas fa-arrow-left"></i>
            </div>
            <div @click="nextSlide" class="toggle page-right">
                <i class="fas fa-arrow-right"></i>
            </div>
        </div>

        <!-- Pagination -->
        <div v-if="paginationEnabled" class="pagination">
            <span @click="goToSlide(index)" v-for="(slide, index) in getSlideCount"
            :key="index"
            :class="{ active: index + 1 === currentSlide }"
            ></span>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  name: 'Carousel',
  props:['startAutoPlay', 'timeout', 'navigation', 'pagination'],
  setup(props){
      const currentSlide = ref(1);
      const getSlideCount = ref(null);
      const autoPlayEnabled =  ref(props.startAutoPlay === undefined ? false : props.startAutoPlay);
      const timeoutDuration = ref(props.timeout === undefined ? 5000 : props.timeout);
      const paginationEnabled = ref(props.pagination === undefined ? true : props.pagination);
      const navEnabled = ref(props.navigation === undefined ? true : props.navigation);


      //Next Slide
      const nextSlide = () =>{
          if(currentSlide.value === getSlideCount.value){
              currentSlide.value = 1;
              return;
          }
          currentSlide.value += 1;
      }

      //Prev Slide
      const prevSlide = () =>{
          if(currentSlide.value === 1){
              currentSlide.value = 1;
              return;
          }
          currentSlide.value -= 1;
      }

      const goToSlide=(index) =>{
          currentSlide.value = index + 1;
      }

      // autoplay

      const autoPlay = () => {
          setInterval(() => {
              nextSlide();
          }, timeoutDuration.value)
      }

      if(autoPlayEnabled.value){
          autoPlay();
      }

      onMounted(() => {
          getSlideCount.value = document.querySelectorAll('.slide').length;
          console.log(getSlideCount.value);
      })

      return { currentSlide, nextSlide, prevSlide, getSlideCount, goToSlide, paginationEnabled, navEnabled };
  }
}
</script>
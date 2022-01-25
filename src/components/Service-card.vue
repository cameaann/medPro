<template>
    <div class="card">
        <div class="card__header">
            <img class="card__header-img" v-bind:src="getUrl(service.url)" alt="service.title">
        </div>
        <div class="card__content">
            <div class="card__title">{{ service.title }}</div>
            <div class="card__description">{{ service.description }}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: ['service'],
  methods:{
    getUrl(val){
           return require('../assets/'+ val)
    }
}

}
</script>
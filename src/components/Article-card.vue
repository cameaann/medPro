<template>
    <div class="card-article">
        <div class="card-article__header" v-bind:style="{ backgroundImage: 'url('+ getUrl(story.url) +')'}"></div>
        <div class="card-article__content">
            <div class="card-article__title">{{story.title}}</div>
            <div class="card-article__description">{{story.description}}</div>
            <div class="btn btn-text card-article__footer">Прочитать еще
                <img class="icon-arrow" src="../assets/img/icons/arrow-right.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: ['story'],
  methods:{
    getUrl(val){
           return require('../assets/'+ val)
        }
    }

}
</script>
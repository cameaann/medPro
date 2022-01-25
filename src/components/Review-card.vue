<template>
    <div class="card-review">
        <div class="person">
            <img src="" alt="">
             <!-- <img class="person_img" v-bind:src="getUrl(person.photo)" alt="person.name"> -->
             <div class="person-details">
                 <div class="name">{{client.name}}</div>
                 <div class="prof">{{client.profession}}</div>
             </div>

        </div>
            <div class="review">{{client.review}}</div>
    </div>
</template>

<script>
export default {
  name: 'ReviewCard',
//   props: ['service'],
//   methods:{
//     getUrl(val){
//            return require('../assets/'+ val)
//     }


}
</script>
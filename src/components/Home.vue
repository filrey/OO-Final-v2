<template>
<v-container>
    <v-layout row wrap>
        <v-flex xs12 sm6 class="text-sm-right">
            <v-btn router to="/Posts" class="info">Explore Posts</v-btn>
        </v-flex>
        <v-flex xs12 sm6 class="text-sm-left">
            <v-btn router to="/CreatePost" class="info">Create Post</v-btn>
        </v-flex>
    </v-layout>
    <v-layout row wrap>
        <v-flex xs12>
            <v-carousel>
                <v-carousel-item
                v-for="(item,i) in Posts"
                :key="i"
                :src="item.src">
                <v-card>
                    <v-toolbar-title>{{item.title}}</v-toolbar-title>
                </v-card>
                </v-carousel-item>
            </v-carousel>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
  export default {
    data () {
      return {
        Posts: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            id: '1',
            title: 'placeholder title'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            id: '2',
            title: 'placeholder title'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            id: '3',
            title: 'placeholder title'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            id: '4',
            title: 'placeholder title'
          }
        ]
      }
    }
  }
</script>


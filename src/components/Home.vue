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
    <v-layout>
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
          indeterminate
          class="primary--text"
          :width="7"
          :size="70"
          v-if="loading"></v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2" v-if="!loading">
        <v-flex xs12>
            <v-carousel>
                <v-carousel-item
                v-for="(item,i) in Posts"
                :key="i"
                @click="onLoadPost(item.id)"
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
    computed: {
      Posts () {
        return this.$store.getters.featuredPosts
    },
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      onLoadPost(id) {
        this.$router.push('/posts/' + id)
      }
    }
  }
</script>


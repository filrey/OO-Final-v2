<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-card-title>
                        <h2 class="primary--text">{{ post.title }}</h2>
                    </v-card-title>
                    <v-img
                        :src="post.src"
                        aspect-ratio="2.75"
                        ></v-img>
                    <v-card-text>
                        <div class="info--text">{{post.date}}</div>
                        <div>{{post.description}}</div>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    export default {
        props: ['id'],
        computed: {
            post () {
                return this.$store.getters.loadedPost(this.id)
            }
        }
    }
</script>
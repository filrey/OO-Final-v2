<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-card-title>
                        <h6 class="primary--text">{{ post.title }}</h6>
                    </v-card-title>
                    <v-img
                        :src="post.src"
                        aspect-ratio="2.75"
                        ></v-img>
                    <v-card-text>
                        <div class="info--text">{{post.date}} - Where it takes place</div>
                        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque quos consequatur repellat illo eveniet, fugit harum ullam ipsam iusto sapiente omnis aperiam maxime expedita quae consequuntur totam perspiciatis. Nesciunt, quia.</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="primary">Comment</v-btn>
                    </v-card-actions>
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
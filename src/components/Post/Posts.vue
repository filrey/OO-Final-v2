<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
                <v-card class="info">
                    <v-container>
                        <v-layout row>
                            <v-flex xs5 sm4 md3>
                                <v-img
                                src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                                aspect-ratio="2.75"
                                ></v-img>
                            </v-flex>
                            <v-flex xs7 sm8 md9>
                                <v-card-title>
                                    <div>
                                        <h3 class="white--text mb-0">My Post</h3>
                                        <div>Posted on 12/11/2018</div>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn flat to="/Posts/1">
                                        <v-icon left light>arrow_forward</v-icon>
                                        View Post</v-btn>
                                </v-card-actions>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

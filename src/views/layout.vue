<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6 v-for="i in 9" :key="i">
        <v-card>
          <v-card-title primary-title>
            card
          </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam dolores ab voluptatum. Optio assumenda et asperiores, possimus, pariatur eligendi deleniti, aperiam repudiandae facilis at voluptate excepturi exercitationem doloribus ipsa eum?
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

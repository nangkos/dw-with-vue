<template>
  <v-layout row wrap>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title primary-title>
          title
        </v-card-title>
        <v-card-text>
          {{ card_text }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat>click</v-btn>
          <v-btn color="primary" flat>click</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

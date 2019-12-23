<template>
  <v-container fluid grid-list-md>
    <v-layout>
      <v-flex xs5>
        <v-text-field
          v-model="title"
          label="title"
        ></v-text-field>
      </v-flex>
      <v-flex xs5>
        <v-text-field
          v-model="content"
          label="content"
        ></v-text-field>
      </v-flex>
      <v-flex xs2>
        <v-btn flat color="success" @click="post">post</v-btn>
      </v-flex>
    </v-layout>
    <v-data-iterator
      :items="items"
      :rows-per-page-items="rowsPerPageItems"
      :pagination.sync="pagination"
      content-tag="v-layout"
      row
      wrap
    >
      <template v-slot:item="props">
        <v-flex
          xs12
          sm6
          md4
          lg3
        >
          <v-card>
            <v-card-title><h4>{{ props.item.title }}</h4></v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              {{ props.item.content }}
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="put(props.item.id)">수정</v-btn>
              <v-btn @click="del(props.item.id)">삭제</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    rowsPerPageItems: [4, 8, 12],
    pagination: {
      rowsPerPage: 4
    },
    items: [
    ],
    title: '',
    content: ''
  }),
  mounted () {
    this.get()
  },
  methods: {
    post () {
      // this.items.push({
      //   title: this.title,
      //   content: this.content
      // })
      this.$firebaseRefs.firestore().collection('notes')
        .add({
          title: this.title,
          content: this.content
        })
        .then(data => {
          this.get()
          this.reset()
        })
    },
    get () {
      this.$firebaseRefs.firestore().collection('notes')
        .get()
        .then(snapshot => {
          this.items = []
          snapshot.forEach(doc => {
            const { title, content } = doc.data()
            this.items.push({
              id: doc.id,
              title,
              content
            })
          })
        })
    },
    put (id) {
      this.$firebaseRefs.firestore().collection('notes').doc(id)
        .set({
          title: this.title,
          content: this.content
        })
        .then(data => {
          this.get()
          this.reset()
        })
    },
    del (id) {
      this.$firebaseRefs.firestore().collection('notes')
        .doc(id)
        .delete()
        .then(data => {
          this.get()
        })
    },
    reset () {
      this.title = ''
      this.content = ''
    }
  }
}
</script>

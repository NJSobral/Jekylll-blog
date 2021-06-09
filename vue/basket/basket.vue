<template>
  <v-sheet height="400" class="overflow-hidden" style="position: relative">
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-btn color="pink" dark @click.stop="drawer = !drawer"> Toggle </v-btn>
      </v-row>
    </v-container>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "About", icon: "mdi-forum" },
      ],
    };
  },
  computed: {
    ...mapGetters(["getInc"]),
  },
};
</script>

<style scoped>
*.icon-blue {
  color: #0088cc;
}

*.icon-grey {
  color: grey;
}

i {
  width: 100px;
  text-align: center;
  vertical-align: middle;
  position: relative;
}

.badge:after {
  content: attr(data-count);
  position: absolute;
  background: #ff6600;
  height: 2rem;
  top: 1rem;
  right: 1.5rem;
  width: 2rem;
  text-align: center;
  line-height: 2rem;
  font-size: 1rem;
  border-radius: 50%;
  color: white;
  border: 1px solid #ff6600;
  font-family: sans-serif;
  font-weight: bold;
}
</style>
<template>
  <v-app>
    <v-main class="bg-grey-darken-4">
<!--   App header   -->
      <v-app-bar color="green">
        <v-app-bar-nav-icon @click="drawer = !drawer"/>
        <v-app-bar-title>Design Patterns for AI-Based Systems</v-app-bar-title>
        <v-text-field
            density="compact"
            label="Search"
            hide-details
            append-inner-icon="mdi-magnify"
            single-line
            @change="search()"
            v-model="searchInput"
            class="bg-green-lighten-1 rounded"
        ></v-text-field>
        <v-btn icon="mdi-help" @click="showAbout = !showAbout" />
        <v-btn icon="mdi-github" @click="openGithub()"/>
      </v-app-bar>
<!--   End of App header   -->
<!--   Sidenav   -->
      <v-navigation-drawer
          v-model="drawer"
          absolute
          class="pa-2 bg-green-darken-1"
      >
        <h2 class="mb-3"><v-icon>mdi-filter</v-icon> Filter</h2>
        <v-checkbox class="filter-checkbox mr-0 mt-0" v-for="category of categories" :label="category.name" @change="filter()" v-model="category.selected"></v-checkbox>
        <v-divider/>
        <h2 class="mt-3"><v-icon>mdi-sort-alphabetical-variant</v-icon> Sort</h2><br>
        <select v-model="selectedSortOption" @change="sort()" class="v-select bg-grey-darken-3 pa-2 rounded" >
          <option value="" disabled selected hidden>Sort by...</option>
          <option v-for="option in sortOptions" v-bind:value="option">{{ option }}</option>
        </select>
      </v-navigation-drawer>
<!--   End of Sidenav   -->
      <v-container>
        <v-row>
          <v-col>
            <PatternGrid ref="patternGrid"/>
          </v-col>
        </v-row>
      </v-container>
      <v-dialog class="about" v-model="showAbout">
        <v-card class="bg-grey-darken-3">
          <v-card-title class="bg-green border-b-lg">About <v-icon class="close" @click="showAbout = false;">mdi-close</v-icon></v-card-title>
          <v-card-text>This Multivocal Literature Review identified 84 patterns for
            AI-based systems in 67 resources from which 49 are white and 18
            are gray literature. Among these are 26 traditional patterns that
            have been adapted to AI-based systems and design patterns which
            were mainly developed for the application for AI-based systems.</v-card-text>
          <v-card-text>This repository was created as part of a research project at the University of Stuttgart's Institute for Software Engineering.</v-card-text>
          <v-card-subtitle>Authors: Marius Hauser, Lukas Heiland</v-card-subtitle>
        </v-card>
      </v-dialog>
    </v-main>
  </v-app>
</template>

<script>

import PatternGrid from "./components/PatternGrid.vue";

export default {
  name: "App",
  components: {PatternGrid},
  data: () => ({
    searchInput: '',
    sortOptions: [
      'Alphabetical (A-Z)',
      'Alphabetical (Z-A)',
      'Number of References'
    ],
    selectedSortOption: '',
    categories: [
      {name: 'Traditional', selected: false},
      {name: 'Safety', selected: false},
      {name: 'QoS', selected: false},
      {name: 'Architecture', selected: false},
      {name: 'Deployment', selected: false},
      {name: 'Implementation', selected: false},
      {name: 'Process', selected: false},
      {name: 'Testing', selected: false},
      {name: 'Resilient Serving', selected: false},
      {name: 'Topology', selected: false},
      {name: 'Security', selected: false},
    ],
    drawer: true,
    group: null,
    showAbout: false,
    githubUrl: "https://github.tik.uni-stuttgart.de/st151210/forschungsprojekt-patterns-ai-based-systems",
  }),
  methods: {
    filter() {
      this.$refs.patternGrid.filter(this.categories);
    },
    search() {
      this.$refs.patternGrid.search(this.searchInput.toLowerCase());
    },
    sort() {
      this.$refs.patternGrid.sortPatterns(this.selectedSortOption);
    },
    openGithub() {
      window.open(this.githubUrl);
    }
  },
};
</script>

<style>
.filter-checkbox{
  margin-bottom: -1.5em;
}

.about{
  width: 66%;
}

.close {
  position: absolute;
  right: 0.5em;
}
</style>

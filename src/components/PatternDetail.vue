<template>
  <v-alert v-model="alert" type="success" transition="scale-transition" dark dense>Copied to clipboard!</v-alert>
  <v-row class="pa-2">
    <v-col cols="2"><b>Motivation:</b></v-col>
    <v-col>
      {{ motivation }}
    </v-col>
  </v-row>
  <v-row class="pa-2">
    <v-col cols="2"><b>Solution:</b></v-col>
    <v-col>
      {{ solution }}
    </v-col>
  </v-row>
  <v-row class="pa-2">
    <v-col cols="2"><b>Consequences:</b></v-col>
    <v-col>
      {{ consequences }}
    </v-col>
  </v-row>
  <v-row class="pa-2">
    <v-col cols="2"><b>Examples:</b></v-col>
    <v-col>{{ examples }}
    </v-col>
  </v-row>
  <v-row class="pa-2">
    <v-col cols="2"><b>Resources:</b></v-col>
    <v-col>
      <div v-for="resource of resources" class="mb-3">
        <p>{{ getResource(resource) }}</p>
        <p><v-btn color="green" @click="copyToClipboard(getResource(resource))">Copy Citation</v-btn></p>
      </div>
    </v-col>
  </v-row>
  <v-row class="pa-2">
    <v-col cols="2"><b>Categories:</b></v-col>
    <v-col>
      <p v-for="category of categories">{{ category }}</p>
    </v-col>
  </v-row>
</template>

<script>
import json from '../assets/resources/resources.json';

export default {
  name: "PatternDetail",
  props: [
    'name',
    'aka',
    'motivation',
    'solution',
    'consequences',
    'examples',
    'resources',
    'categories'
  ],
  data() {
    return {
      resourcePapers: [],
      alert: false,
    }
  }, methods: {
    getResources() {
      let needed = json.filter((item) => {
        return this.resources.includes(item.ID);
      });
      this.resourcePapers = needed;
    },
    getResource(id) {
      console.log(this.resourcePapers);
      let resource = this.resourcePapers.filter((item) => {
        return item.ID === id;
      })[0];
      let resourceText = resource ? resource.authors + " - " + resource.name + " (" + resource.year.toString() + ")" : "none";
      if (resource && resource.doi) {
        resourceText += "; DOI: " + resource.doi;
      }
      return resourceText;
    },
    copyToClipboard(stringToCopy){
      navigator.clipboard.writeText(stringToCopy);
      this.alert = true;
      setTimeout(() => {
        this.alert = false
      }, 3000);
    }
  },
  mounted() {
    this.getResources();
  }
}
</script>

<style scoped>

</style>

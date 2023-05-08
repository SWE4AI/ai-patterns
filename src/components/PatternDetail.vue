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
        <p>{{ getResource(resource, resourcePapers) }}</p>
        <p><v-btn color="green" @click="copyToClipboard(getResource(resource, resourcePapers))">Copy Citation</v-btn></p>
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
    'categories',
    'resourcePapers'
  ],
  data() {
    return {
      alert: false,
    }
  }, methods: {
    getResource(idS,resourcePapers) {
      let resource = resourcePapers.filter((item) => {
        return item.ID.toString() === idS.toString();
      })[0];
      let resourceText = resource ? resource.authors + " - " + resource.name + " (" + resource.year.toString() + ")" : "";
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
    // this.getResources();
  }
}
</script>

<style scoped>

</style>

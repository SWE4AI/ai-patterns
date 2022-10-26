<template>
     <v-row class="pa-2">
      <v-col cols="2"><b>Aliases:</b></v-col>
       <v-col>
        <v-card-text> {{ aka }}</v-card-text>
      </v-col>
    </v-row>
     <v-row class="pa-2">
      <v-col cols="2"><b>Motivation:</b></v-col>
       <v-col>
        <v-card-text>{{ motivation }}</v-card-text>
      </v-col>
    </v-row>
     <v-row class="pa-2">
      <v-col cols="2"><b>Solution:</b></v-col>
       <v-col>
        <v-card-text>{{ solution }}</v-card-text>
      </v-col>
    </v-row>
     <v-row class="pa-2">
      <v-col cols="2"><b>Consequences:</b></v-col>
       <v-col>
        <v-card-text>{{ consequences }}</v-card-text>
      </v-col>
    </v-row>
     <v-row class="pa-2">
      <v-col cols="2"><b>Examples:</b></v-col>
       <v-col>
        <v-card-text>{{ examples }}</v-card-text>
      </v-col>
    </v-row>
     <v-row class="pa-2">
      <v-col cols="2"><b>Resources:</b></v-col>
       <v-col>
        <v-card-text>
          <ul>
            <li v-for="resource of resources">{{ getResource(resource) }} </li>
          </ul>
        </v-card-text>
      </v-col>
    </v-row>
    <v-row class="pa-2">
      <v-col cols="2"><b>Categories:</b></v-col>
       <v-col>
        <v-card-text><span v-for="category of categories">{{ category }}, </span></v-card-text>
      </v-col>
    </v-row>
    <v-card-actions >
      <v-btn icon="mdi-help"/>
      <v-btn icon="mdi-format-quote-close"/>
    </v-card-actions>
</template>

<script>
import json from "./../assets/resources/resources.json";

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
      resourcePapers: json,
    }
  }, methods: {
    getResource(id){
      let resource = this.resourcePapers.filter((item) => {
        return item.id === id;
      })[0];
      return resource.authors + "; " + resource.name + "; doi: " + resource.doi;
    }
  }
}
</script>

<style scoped>

</style>

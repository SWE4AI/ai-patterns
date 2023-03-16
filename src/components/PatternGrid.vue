<template>
  <v-container>
    <v-row>
      <v-col v-for="pattern in filteredPatterns" cols="3" :key="pattern.ID">
        <v-card elevation="7" tile class="pattern-card bg-grey-darken-3 d-flex flex-column">
          <v-list-item two-line class="bg-blue-accent-1 border-b-lg">
            <v-list-item-title class="text-h6 mb-1">{{ pattern.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ pattern.aka }}&nbsp;</v-list-item-subtitle>
          </v-list-item>
          <v-card-text class="bg-grey-darken-3">
            {{ pattern.motivation }}
          </v-card-text>

          <v-spacer></v-spacer>

          <v-card-actions class="bg-grey-darken-3 ">
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon="mdi-open-in-new" @click="goToDetailView(pattern.id)"></v-btn>
              </template>
              <span>View in detail</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon="mdi-content-copy" @click="copyToClipboard(pattern.id)"></v-btn>
              </template>
              <span>Copy pattern as JSON to clipboard</span>
            </v-tooltip>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <p v-if="filteredPatterns.length === 0">No patterns here...</p>
  <v-dialog v-model="dialog" class="pattern-detail">
    <v-card class="bg-grey-darken-3">
      <v-list-item two-line class="bg-blue-accent-1 border-b-lg">
        <v-list-item-title class="text-h6 mb-1">{{ selectedPattern.name }}</v-list-item-title>
        <v-list-item-subtitle>{{ selectedPattern.aka }}&nbsp;</v-list-item-subtitle>
        <v-icon class="close-detailview" @click="dialog = false;">mdi-close</v-icon>
      </v-list-item>

      <PatternDetail
          :name="this.selectedPattern.name"
          :aka="this.selectedPattern.aka"
          :motivation="this.selectedPattern.motivation"
          :solution="this.selectedPattern.solution"
          :consequences="this.selectedPattern.consequences"
          :examples="this.selectedPattern.examples"
          :resources="this.selectedPattern.resources"
          :categories="this.selectedPattern.categories"></PatternDetail>
    </v-card>
  </v-dialog>
</template>

<script>
import PatternDetail from "./PatternDetail.vue";

export default {

  name: "PatternGrid",
  components: {PatternDetail},
  data() {
    return {
      filterCriteria: {
        categories: [''],
        onlyGeneric: false,
      },
      patterns: [],
      filteredPatterns: [],
      selectedPattern: {},
      dialog: false
    };
  },
  methods: {
    getPatternData() {
      // Import all file paths from the patterns directory
      let fileList = import.meta.glob("@/assets/**/P*.json");
      // Then import all files and push the patterns from them into the base array
      for (const file in fileList) {
        console.log(file)
        // const res = fetch(file).then(
        //   this.patterns[this.patterns.length] = res.json()
        // )
        // console.log(res)
        var json;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              json =  JSON.parse(this.responseText)
            }
        };
        xhttp.open("GET", file, false);
        xhttp.send();
        this.patterns[this.patterns.length] = json
        // this.patterns[this.patterns.length] = await res.json()
        // const content = 
        // import(
        //   file /* @vite-ignore */
        //   ).then((content) => {
        //     this.patterns[this.patterns.length] = content;
        // })
      }
      this.filteredPatterns = Object.assign({}, this.patterns);
      this.resetFilters();
    },
    goToDetailView(id) {
      this.selectedPattern = this.filteredPatterns.filter((item) => {
        return item.id === id;
      })[0];
      this.dialog = true;
    },
    filter(categories) {
      let shouldReset = true;
      let intermediate = [...this.patterns];
      for (let category of categories) {
        if (category.selected) {
          shouldReset = false;
          let categorySpecificPatterns = this.patterns.filter((pattern) => {
            return pattern.categories.includes(category.name);
          });
          intermediate = intermediate.filter((pattern) => {
            for (let element of categorySpecificPatterns) {
              if (element.id === pattern.id) {
                return true;
              }
            }
            return false;
          })
        }
      }
      if (shouldReset) {
        this.resetFilters();
      } else {
        this.filteredPatterns = intermediate;
      }
    },
    resetFilters() {
      this.filteredPatterns = this.patterns;
    },
    sortPatterns(sortingCrit) {
      if (sortingCrit === 'Alphabetical (A-Z)') {
        this.filteredPatterns = this.filteredPatterns.sort((first, second) => {
          let firstName = first.name.toLowerCase(), secondName = second.name.toLowerCase();
          if (firstName < secondName) {
            return -1;
          }
          if (firstName > secondName) {
            return 1;
          }
          return 0;
        });
      } else if (sortingCrit === 'Alphabetical (Z-A)') {
        this.filteredPatterns.sort((first, second) => {
          let firstName = first.name.toLowerCase(), secondName = second.name.toLowerCase();
          if (firstName < secondName) {
            return -1;
          }
          if (firstName > secondName) {
            return 1;
          }
          return 0;
        }).reverse();
      } else if (sortingCrit === 'Number of References') {
        this.filteredPatterns.sort((first, second) => {
          if (first.resources.length < second.resources.length) return -1;
          if (first.resources.length < second.resources.length) return 1;
          return 0;
        }).reverse();
      }
    },
    search(inputString) {
      this.filteredPatterns = this.patterns.filter((pattern) => {
        return (pattern.name.toLowerCase().includes(inputString))
            || (pattern.motivation.toLowerCase().includes(inputString))
            || (pattern.solution.toLowerCase().includes(inputString))
            || (pattern.consequences.toLowerCase().includes(inputString))
      });
    },
    copyToClipboard(id) {
      let pattern = JSON.stringify(this.patterns.filter((item) => {
        return item.id === id;
      })[0].default);
      navigator.clipboard.writeText(pattern);
    }
  },
  mounted() {
    this.getPatternData();
  },
};
</script>

<style scoped>
.pattern-card {
  min-height: 333px;
}

.pattern-detail {
  width: 50%;
}

.close-detailview {
  position: absolute;
  right: 0.5em;
  top: 0.5em;
}
</style>

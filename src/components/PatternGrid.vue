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

          <v-card-actions class="bg-grey-darken-3">
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
        <v-icon class="close-detailview" @click="dialog = false">mdi-close</v-icon>
      </v-list-item>

      <PatternDetail
        :name="this.selectedPattern.name"
        :aka="this.selectedPattern.aka"
        :motivation="this.selectedPattern.motivation"
        :solution="this.selectedPattern.solution"
        :consequences="this.selectedPattern.consequences"
        :examples="this.selectedPattern.examples"
        :resources="this.selectedPattern.resources"
        :categories="this.selectedPattern.categories"
        :resourcePapers="this.resourcePapers"
      ></PatternDetail>
    </v-card>
  </v-dialog>
</template>

<script>
import PatternDetail from "./PatternDetail.vue";

export default {
  name: "PatternGrid",
  components: { PatternDetail },
  data() {
    return {
      filterCriteria: {
        categories: [""],
        onlyGeneric: false
      },
      resourcePapers: [],
      patterns: [],
      filteredPatterns: [],
      selectedPattern: {},
      dialog: false
    };
  },
  methods: {
    getResources() {
      fetch("https://raw.githubusercontent.com/SWE4AI/ai-patterns/main/ai-patterns/resources/resources.json")
        .then((res) => res.json())
        .then((json) => {
          this.resourcePapers = json;
        });
    },
    getPatternData() {
      fetch("https://api.github.com/repos/swe4ai/ai-patterns/contents/ai-patterns/patterns/")
        .then((list) => list.json())
        .then((fileList) => {
          fileList.forEach((file) => {
            fetch("https://raw.githubusercontent.com/SWE4AI/ai-patterns/main/ai-patterns/patterns/" + file.name)
              .then((res) => res.json())
              .then((json) => {
                this.patterns.push(json);
              });
          });
          this.filteredPatterns = Object.assign({}, this.patterns);
          this.resetFilters();
        });
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
          });
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
      if (sortingCrit === "Alphabetical (A-Z)") {
        this.filteredPatterns = this.filteredPatterns.sort((first, second) => {
          let firstName = first.name.toLowerCase(),
            secondName = second.name.toLowerCase();
          if (firstName < secondName) {
            return -1;
          }
          if (firstName > secondName) {
            return 1;
          }
          return 0;
        });
      } else if (sortingCrit === "Alphabetical (Z-A)") {
        this.filteredPatterns
          .sort((first, second) => {
            let firstName = first.name.toLowerCase(),
              secondName = second.name.toLowerCase();
            if (firstName < secondName) {
              return -1;
            }
            if (firstName > secondName) {
              return 1;
            }
            return 0;
          })
          .reverse();
      } else if (sortingCrit === "Number of References") {
        this.filteredPatterns
          .sort((first, second) => {
            if (first.resources.length < second.resources.length) return -1;
            if (first.resources.length < second.resources.length) return 1;
            return 0;
          })
          .reverse();
      }
    },
    search(inputString) {
      this.filteredPatterns = this.patterns.filter((pattern) => {
        return (
          pattern.name.toLowerCase().includes(inputString) ||
          pattern.motivation.toLowerCase().includes(inputString) ||
          pattern.solution.toLowerCase().includes(inputString) ||
          pattern.consequences.toLowerCase().includes(inputString)
        );
      });
    },
    copyToClipboard(id) {
      let pattern = JSON.stringify(
        this.patterns.filter((item) => {
          return item.id === id;
        })[0].default
      );
      navigator.clipboard.writeText(pattern);
    }
  },
  mounted() {
    this.getResources();
    this.getPatternData();
  }
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

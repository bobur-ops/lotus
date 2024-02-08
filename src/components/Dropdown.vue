<template>
  <div id="v-model-select">
    <select v-if="langArray.length === 0">
      <option value="">Выбор языка</option>
    </select>
    <select
      class="form-select custom-dropdown"
      aria-label="Default select example"
      v-model="selectedLang"
      @change="getLanguage()"
      v-else
    >
      <option
        name="language"
        v-for="(lang, index) in langArray"
        v-bind="index"
        :key="lang.id"
        :value="lang.code"
        :selected="index === 0"
      >
        {{ lang.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      langArray: [],
      selectedLang: "",
    };
  },

  mounted() {
    fetch("http://170.205.36.233:8000/languages/?format=json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        this.langArray = data;
        this.selectedLang = this.langArray[0].code;
        this.getLanguage();
      })
      .catch((error) => {
        console.error("Ошибка при получении списка языков:", error);
      });
  },
  methods: {
    getLanguage: function () {
      fetch(
        `http://170.205.36.233:8000/texts/${this.selectedLang}/?format=json`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          this.$emit("languageChanged", {
            selectedLang: this.selectedLang,
            translations: data,
          });
        })
        .catch((error) => {
          console.error("Ошибка при получении списка языков:", error);
        });
    },
  },
  watch: {
    selectedLang(newValue, oldValue) {
      console.log("Выбран язык:", newValue);
    },
  },
};
</script>

<style scoped>
.dropdown-item {
  padding: 10px;
}

.dropdown-menu {
  z-index: 99999;
}
</style>

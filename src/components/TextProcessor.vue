<template>
  <div>
    <form @submit.prevent="processText">
      <div class="form-group">
        <label for="inputText">Ingrese el texto:</label>
        <input 
          type="text" 
          id="inputText" 
          v-model="inputText" 
          class="form-control" 
          @input="updateText"
        />
      </div>
    </form>
    <p>Caracteres ingresados: {{ charCount }}</p>
    <p>Codificado: {{ encodedText }}</p>
    <p>Todo en mayúscula: {{ upperCaseText }}</p>
    <p>Todo en minúscula: {{ lowerCaseText }}</p>
    <p>Intercalado (Mayúscula): {{ alternatingCaseText }}</p>
    <p>Intercalado (Minúscula): {{ alternatingCaseTextLower }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: ''
    };
  },
  computed: {
    charCount() {
      return this.inputText.length;
    },
    encodedText() {
      return this.inputText.toLowerCase().replace(/[aeiou]/g, (vowel) => {
        const map = { a: 'u', e: 'o', i: 'i', o: 'e', u: 'a' };
        return map[vowel];
      });
    },
    upperCaseText() {
      return this.inputText.toUpperCase();
    },
    lowerCaseText() {
      return this.inputText.toLowerCase();
    },
    alternatingCaseText() {
      return this.alternateCase(this.inputText, true);
    },
    alternatingCaseTextLower() {
      return this.alternateCase(this.inputText, false);
    }
  },
  methods: {
    updateText() {
      this.$forceUpdate();
    },
    alternateCase(text, startWithUpperCase) {
      return text.split('').map((char, index) => {
        return index % 2 === (startWithUpperCase ? 0 : 1)
          ? char.toUpperCase()
          : char.toLowerCase();
      }).join('');
    }
  }
};
</script>


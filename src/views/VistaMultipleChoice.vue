<template>
  <div class="multiple-choice-container">
    <h1 class="title">Preguntas de Opción Múltiple</h1>
    <div class="question">
      <p class="question-number">Pregunta 1/3</p>
      <p class="question-text">¿Cómo es la forma reducida de v-on:click?</p>
      <table class="options">
        <tr>
          <td>a)</td>
          <td>v-on@click</td>
        </tr>
        <tr>
          <td>b)</td>
          <td>#click</td>
        </tr>
        <tr>
          <td>c)</td>
          <td>@click</td>
        </tr>
        <tr>
          <td>d)</td>
          <td>:click</td>
        </tr>
        <tr>
          <td>e)</td>
          <td>v-bind#click <span class="correct-answer">(Respuesta Correcta)</span></td>
        </tr>
      </table>
    </div>

    <div class="question">
      <p class="question-number">Pregunta 2/3</p>
      <p class="question-text">El modificador trim recorta...</p>
      <table class="options">
        <tr>
          <td>a)</td>
          <td>Los espacios puestos adelante en una entrada de texto</td>
        </tr>
        <tr>
          <td>b)</td>
          <td>Los espacios puestos atrás en una entrada de texto</td>
        </tr>
        <tr>
          <td>c)</td>
          <td>Los espacios adelante y atrás en una entrada de texto <span class="correct-answer">(Respuesta Correcta)</span></td>
        </tr>
        <tr>
          <td>d)</td>
          <td>Saca los espacios intermedios puestos en una entrada de texto</td>
        </tr>
      </table>
    </div>

    <div class="question">
      <p class="question-number">Pregunta 3/3</p>
      <p class="question-text">La propiedad routes en la definición del router de Vue.js tiene como función:</p>
      <table class="options">
        <tr>
          <td>a)</td>
          <td>Definir el path y el componente activo para esa ruta <span class="correct-answer">(Respuesta Correcta)</span></td>
        </tr>
        <tr>
          <td>b)</td>
          <td>Define la barra de navegación a utilizar</td>
        </tr>
        <tr>
          <td>c)</td>
          <td>Define sólo todos los componentes activos en el router</td>
        </tr>
        <tr>
          <td>d)</td>
          <td>Definir el modo de trabajo de las rutas</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VistaMultipleChoice'
};
</script>

<style scoped>
  .multiple-choice-container {
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .title {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .question {
    margin-bottom: 30px;
  }
  
  .question-number {
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .question-text {
    margin-bottom: 10px;
  }
  
  .options {
    border-collapse: collapse;
    width: 100%;
  }
  
  .options td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  
  .correct-answer {
    color: green;
    font-weight: bold;
  }
</style>
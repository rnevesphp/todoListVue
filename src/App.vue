<template>
  <div id="app">
    <h2>Lista de Tareas</h2>
    <TodoList />
  </div>
</template>

<script>
// import ==> importa el componente utilizando su ruta
import TodoList from "../src/components/TodoList.vue";

// export ==> exporta todos los componentes utilizados por la app
export default {
  name: "App",
  components: {
    TodoList,
  },
};
</script>

<style>
/*estiliza cualquier elemento que contenga el ID #app del html*/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #2c3e50;
  color: #fff;
}
</style>
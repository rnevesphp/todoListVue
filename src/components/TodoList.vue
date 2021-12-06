// html
<template>
  <div class="container">
    <input
      placeholder="Introducir Tarea"
      class="inputToDo"
      type="text"
      v-model="newTodoText"
    />
    <button v-on:click="addTarea">Añadir Tarea</button>
    <hr />
    <ul>
      <div class="ToDo" v-for="ToDo in ToDos" :key="ToDo">
        <li>{{ ToDo.text }}</li>
        <button v-on:click="deleteTodo(ToDo.id)">Eliminar tarea</button>
      </div>
    </ul>
  </div>
</template> 

// JS ==> VUE
<script>
let nextTodoId = 1;

// funcion export exporat toda la informacion del componente
// el componente ==> template
export default {
  name: "TodoList",
  components: {},
  //la funcion data almacena todos los datos que va utilizar el componente
  data() {
    return {
      // array con los valores de cada ToDo
      ToDos: [],
    };
  },
  methods: {
    addTarea: function () {
      if (this.newTodoText) {
        const trimmedText = this.newTodoText.trim();
        if (trimmedText) {
          this.ToDos.push({
            id: nextTodoId++,
            text: trimmedText,
          });
          this.newTodoText = "";
        }
      }
    },
    deleteTodo(idToRemove) {
      this.ToDos = this.ToDos.filter((ToDo) => {
        return ToDo.id !== idToRemove;
      });
    },
  },
};
</script>

// CSS 
<style scoped>
.container {
  background-color: #2c3e50;
}
.ToDo {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  font-size: 18px;
  background-color: #2c3e50;
  color: #fff;
}
.inputToDo {
  font-size: 18px;
  width: 30%;
}

button {
  margin-left: 1.1rem;
}
</style>
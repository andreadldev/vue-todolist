const { createApp } = Vue;

createApp({
    data() {
        return {
            newTodo: '',
            todoList: [
                'Fare i compiti',
                'Fare la spesa',
                'Andare dalla nonna'
            ]
        }
    },
    methods: {
        addTask() {
            this.todoList.push(this.newTodo);
            this.newTodo = '';
        },
        removeTask(index) {
            this.todoList.splice(index, 1);
        }
    }
}).mount('#app');
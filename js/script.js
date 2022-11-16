const { createApp } = Vue;

createApp({
    data() {
        return {
            taskField: '',
            taskList: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Andare dalla nonna',
                    done: false
                }
            ]
        }
    },
    methods: {
        addTask(text) {
            let newTask = {
                text: `${text}`,
                done: false
            }
            this.taskList.push(newTask);
            this.taskField = '';
            console.log(this.taskList)
        },

        removeTask(index) {
            this.taskList.splice(index, 1);
        }
    }
}).mount('#app');
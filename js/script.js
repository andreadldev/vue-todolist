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
                    done: false
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
        },

        checkTask(index) {
            let selectedTask = document.getElementsByClassName("text")[index];
            selectedTask.classList.toggle('checked');
            this.stopPropagation;
            if (selectedTask.classList.contains('checked')) {
                this.taskList[index].done = true
            } else {
                this.taskList[index].done = false
            };
        }
    }
}).mount('#app');
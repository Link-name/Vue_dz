const count222 = {
    data() {
        return {
            count: 0,
        }
    },
        methods: {
            increment() {
                this.count++

            },
            decrement() {
                this.count--
            }
        },

    
    template: `    
    <div>
    <p>{{ count }}</p>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    </div>`,
}


const list = {
    data() {
      return {
        listsArr: [],
        task: ''
      };
    },
    methods: {
      addTask() {
        this.listsArr.push({ id: this.listsArr.length + 1, task: this.task });
        this.task = '';
      },
      delTask(id) {
        this.listsArr = this.listsArr.filter(el => el.id !== id);
      }
    },
    template: `
      <div>
        <input type="text" v-model="task" />
        <button @click="addTask">Добавить</button>
        <ul>
          <li v-for="item in listsArr" :key="item.id">{{ item.task }} - <button @click="delTask(item.id)">Удалить</button></li>
        </ul>
      </div>
    `
  };
  
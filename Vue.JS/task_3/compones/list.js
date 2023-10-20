const list = {
    data() {
        return {
            listsArr:[],
            task:'',
            
        }
    },
    methods: {
        addTask(){
            this.listsArr.push({id:this.listsArr.length+1,nameTask:this.task})
            this.task=''
        },
        delTask(id){
            this.listsArr = this.listsArr.filter(el => el.id !==id)
        }
        
    },
    template:`
    <div>
    <input type="task"  v-model="data"/>
    <button @click="addTask">Добавить</button>
    <ul>
        <li v-for="item in listsArr" :key="item.id">{{item.nameTask}} - <button @click="delTask(item.id)">Удалить</button></li>
    </ul>
   </div>`

    
}
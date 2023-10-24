<template>
    <div class="calc" >
        <input v-model="result" class="input" type="text">
        <button @click="addButton(num)" v-for="num in nums" :key="num.id">
            {{ num }}
        </button>
        <button @click="addButton(tab)" v-for="tab in tabs" :key="tab.id">
            {{ tab }}
        </button>
        <button @click="caclResalt">=</button>
        
    </div>
  </template>
  
  <script>
  export default {
    name: 'CalcComponent',
   
    data() {
      return {
        result:0,
        nums:[1,2,3,4,5,6,7,8,9,0],
        tabs:['-','+','/','*']
      }
    },
    methods: {
        addButton(har){
            this.result = this.result.toString()
            this.result+=har
        },
        caclResalt(){
            this.result = eval(this.result)
        }


    },
  }
  </script>
  
 
  <style lang="css" scoped>
    .calc {
        display: grid;
        grid-template-columns: repeat(3,150px);
        justify-content: center;
        padding-top: 40px;
    }
    .input{
        text-align: right;
        height: 20px;
        margin-bottom: 10px;
        grid-column: 1/-1;
    }
  </style>
  
// var app = new Vue({
//     el:'#app',
//     data:{
//         message: 'hellow world',
//         score:'',
//         checkarray:[],
//         TW:'',
//     }
// });

// var bank = new Vue({
//     el:'.bank',
//     data:{
//         TW:'',
//     }
// })

// var app = new Vue({
//     el:'.app',
//     data:{
//         message:'安安',
//         colors:[],
//         home:[{father:'joseph'},{father:'alern'}],
//     },
//     methods:{
//         fvCol:function(color){
//             alert('最喜歡的顏色是：'+color)
//         }
//     }
// })

// var color = ['blue','purple','black']

// console.log(color)

// console.log(color.indexOf('blue'))

// color.splice(color.indexOf('purple'),1)

// console.log(color)


// var app = new Vue({
//     el: '.app',
//     data: {
//         todo: '',
//         list: [],
//         visibility:'all',
//     },
//     methods: {
//         add: function (todo) {
//             var value = this.todo
//             var timestamp = Math.floor(Date.now());
//             this.list.push({ id: timestamp, title: value, completed: false })
//         },
//         remove: function (todo) {
//             this.list.splice(this.list.indexOf(todo), 1)
//         }
//     }
// })

var vm = new Vue({
    el: '#app',
    data: {
      one: '',
      two: '',
    },
    methods:{
        fir:function(){
            this.one = 'true'
        }
    }
  })
  



var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!'
    }
})


var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'رقم زوجي',
        seconds: 0
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true,
        message: 'رقم زوجي',
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
})


var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
})

function incrementSeconds() {
    app2.seconds += 1;
    if(app2.seconds % 2 == 0)
        app3.message = app2.seconds+'  هو رقم زوجي'
    else 
        app3.message = app2.seconds + '  هو رقم فردى'
}
setInterval(incrementSeconds, 1000);


Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
})
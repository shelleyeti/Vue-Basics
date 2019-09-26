const helloVue = new Vue({
    el: '#helloVue',
    data: {
        title: 'Hello Vue',
        img: {
            src: 'https://placeimg.com/200/200/animals',
            alt: 'animal'
        }
    }
});

const book = new Vue({
    el: '#book',
    data: {
        title: 'The Sirens of Titan',
        author: 'Kurt Vonnegut',
        summary: 'This is a summary of the Sirens of Titan.',
    },
    methods: {
        sayHello: function () {
            alert(this.title);
        }
    }
});
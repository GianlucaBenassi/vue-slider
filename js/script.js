const app = new Vue({
    el: '#root',

    data: {

        images: [
            {
            'title': 'Svezia',
            'desc':  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            'img': 'img/01.jpg'
            },
            {
            'title': 'Svizzera',
            'desc':  'Lorem ipsum',
            'img': 'img/02.jpg'
            },
            {
            'title': 'Gran Bretagnia',
            'desc':  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            'img': 'img/03.jpg'
            },
            {
            'title': 'Germania',
            'desc':  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            'img': 'img/04.jpg'
            },
            {
            'title': 'Paradise',
            'desc':  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            'img': 'img/05.jpg'
            }
        ],
        activeImg: 0

    },

    methods: {

        nextImg: function() {
            if (this.activeImg == this.images.length - 1) {
                this.activeImg = 0;
            } else {
                this.activeImg++;
            }
        },

        prevImg: function() {
            if (this.activeImg == 0) {
                this.activeImg = this.images.length - 1;
            } else {
                this.activeImg--;
            }
        }

    }

});
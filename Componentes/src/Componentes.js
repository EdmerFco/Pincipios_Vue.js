Vue.component('movie-card', {
    props: ['img', 'title'],
    template: `
    <div>
    <img width="100" v-bind:src="img" v-bind:alt="title"/>
    <h2>{{title}}</h2>
    </div>`

})

new Vue({
    el: '#app',
    data: {
        movies: [
           { title:'Regreso al Futuro', img:'https://occ-0-1001-2164.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABdH4-a6F9_32nXjXs38duHcmRq2uthFnhI7psfIAeDSNUog_uynM2h5xfVFGthYZctjzCFXr3UcKmXvlqbMTpG9WN506cgTWVJRxhyUqPrdP.png?r=3c6'},
           { title:'breaking bad', img:'https://imagenes.20minutos.es/files/image_990_v3/uploads/imagenes/2013/11/28/136770.jpg'},
           { title:'game of thrones', img:'https://m.media-amazon.com/images/I/91tOuGBOm+L._SY445_.jpg'}
        ]
    },
    template:`
    <div>
            <movie-card v-for="(movie, index) in movies"
            :key="index"
            :title="movie.title"
            :img="movie.img"
            >
        </movie-card>
        </div>
        `
})
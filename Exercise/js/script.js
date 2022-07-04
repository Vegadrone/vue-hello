const app = new Vue(
    {
        el: '#root',

        data: {
            message: 'Ciao Luigi/Stefano/Riccardo, so che mi stai guardando.',
            textInput: "",
            colorClasses: 'txt-lime',
            img: "https://assets.reedpopcdn.com/news-videogiochi-shovel-knight-king-of-cards-shovel-knight-showdown-data-di-uscita-1573653129232.jpg/BROK/thumbnail/1200x1200/quality/100/news-videogiochi-shovel-knight-king-of-cards-shovel-knight-showdown-data-di-uscita-1573653129232.jpg"
        },

        methods: {
            changeColorOnClick: function () {
                if (this.colorClasses == 'txt-lime') {
                    this.colorClasses = 'txt-salmon';
                } else {
                    this.colorClasses = 'txt-lime';
                }
            }
        }
    }
)
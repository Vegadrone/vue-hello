const app = new Vue (
    {
        el: '#root',

        data: {
            message:'Ciao Luigi/Stefano/Riccardo, so che mi stai guardando.',
            textInput:"",
            colorClasses: 'txt-lime'
        },

        methods:{
            changeColorOnClick: function(){
                if(this.colorClasses == 'txt-lime'){
                    this.colorClasses = 'txt-salmon';
                } else {
                    this.colorClasses = 'txt-lime';
                }
            }
        }
    }
)
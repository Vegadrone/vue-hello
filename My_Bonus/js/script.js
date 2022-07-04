const app = new Vue (
    {
        el: '#root',

        data:{
            imgSrc:"",
            title:"",
            imgSrcUpdate:"",
            description:""

        },

        methods:{
            generateCard: function(){
                const wrapper = document.getElementById('wrapper');
                wrapper.innerHTML += `<div class="row mt-5">
                <div class="col-4">
                    <div class="card" style="width: 18rem;">
                        <img :src="imgSrc" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">${{title}}</h5>
                            <p class="card-text">${{description}}</p>
                        </div>
                    </div>
                </div>
              </div>`
            this.imgSrc = this.imgSrcUpdate;
            }

        },
    }
)
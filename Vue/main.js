const{createApp}=Vue
/* console.log(createApp) */
createApp({

    data(){
        return {
            titulo:'En cinco segundos aparezco',
            eventos:[],
            condicion:true
        }
    },
    created(){
        /* let eventos; */
// let favoritos =  []
fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then(res => res.json())
  .then(data =>    this.eventos = data
   /*  eventos = data.events;
    console.log(eventos) */
    /* crearCheckbox(eventos, $categorys)
    imprimirCards(eventos, $cards)
    $search.addEventListener('keyup', filtrar)
    $categorys.addEventListener('change', filtrar) */
    
  )
  .catch(error => console.log(error));
  setTimeout(()=>{
    this.titulo='¡¡¡Bienvenido a Vue!!!'
    console.log(data)
  },5000)
  
    },
}).mount('#app')

/*registra el componente para poderlo utilizar, 
El primer parametro es el nombre del componente
El segundo parametro define las variables que quiero utilizar como propiedades
El tercer parametro son los eventos del CICLO
  init: cuando inicia el objeto
  update: se modifica el objeto
  remove: Hacer algo, el componente o su entidad está separada.
*/
AFRAME.registerComponent('mi_componente', {  
  schema: {
    interval: { type: 'number', default: 5000 },
    defaultColor: { type: 'color', default: '#fff' }
  },
  
  init: function() {
    var el = this.el //toma el elemento del tag
    var interval = this.data.interval //variable de intervalo, toma lo que venga de la propiedad
    
    var colors = ["yellow", "blue", "red", "green", "#ff8000"] //paleta de colores en rgb, hex, obj
    
    var i = 0
     
    el.setAttribute('color', colors[0]) //asignación del color
    
    this.colorInterval = setInterval(function(){ //cada vez que ocurra un intervalo ejecuta la funcion
      i = (i + 1) % colors.length //ciclo para recorrer el array de colores y volver al inicio
      el.setAttribute('color', colors[i])
    }, interval) 
  },
  
  update: function() {},
  //cuando se borra o se deja de utilizar
  remove: function() {
    var el = this.el
    var defaultColor = this.data.defaultColor
    
    clearInterval(this.colorInterval)
    el.setAttribute('color', defaultColor)
  }
})
   
// document.querySelector('a-torus').setAttribute('camaleon', 'defaultColor: skyblue; interval: 1000;')


// setTimeout(function(){ 
//   document.querySelector('a-torus').removeAttribute('mi_componente')
// }, 1000)

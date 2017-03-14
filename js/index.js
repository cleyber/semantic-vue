

new Vue({
    el: 'main', 
    
    data: {
        mensaje: '',
        nuevaTarea: '',
        tareas: [{nombre: 'Unir Semantic con Vue', completado: false },{nombre: 'Realizar todo lo visto con Vue', completado: false}, {nombre: 'Hacer todoList', completado: false}]
    },
    methods:{
        agregarTarea(){
            if(this.nuevaTarea.trim()){
                this.tareas.push({nombre: this.nuevaTarea, completado: false});
                this.nuevaTarea = '';
            }else{
                Messenger.options = {
                    extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-right',
                    theme: 'air'
                }
                Messenger().post({
                  message: 'Debe ingresar una tarea',
                  type: 'error',
                  showCloseButton: true
                });

                this.mensaje = 'Debe ingresar una nueva tarea';
            }
        },
        completarTarea(tarea){
            tarea.completado = !tarea.completado;
        },
        eliminarTarea(tarea){
            var titulo = tarea.nombre;
            console.log(titulo);
        }
    }
});

$(document).ready(function(){
    $('#form-1')
        .form({
        fields: {
            nuevaTarea: {
                identifier: 'nuevaTarea',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Debes aagregar una nueva tarea'
                    }
                ]
            }
        }
    });
});

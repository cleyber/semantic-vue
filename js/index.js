Messenger.options = {
    theme: 'air'
};

new Vue({
    el: 'main',
    data: {
        mensaje: '',
        nuevaTarea: '',
        id: 1,
        tareas: []
    },
   created() {
      this.tareas.push({id: this.id++, nombre: 'Realizar todo lo visto con Vue', completado: false});
      this.tareas.push({id: this.id++, nombre: 'Hacer todoList', completado: false});
      this.tareas.push({id: this.id++, nombre: 'Mejorar la app', completado: false});
   },
    methods:{
        agregarTarea(){
            if(this.nuevaTarea){
                this.tareas.push({id: this.id++, nombre: this.nuevaTarea, completado: false});
                this.nuevaTarea = '';
            }else{
                Messenger().error({
                  message: 'Debe ingresar una tarea',
                  showCloseButton: true
                });
            }
        },
        completarTarea(tarea){
            tarea.completado = !tarea.completado;
        },
        eliminarTarea(tarea){
           this.tareas = this.tareas.filter(function(t){
             return tarea.id !== t.id;
          });
        }
    }
});

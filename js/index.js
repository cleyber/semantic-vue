Messenger.options = {
    theme: 'air'
};

new Vue({
   el: 'main',
   data: {
      formEditar: false,
      mensaje: '',
      nuevaTarea: '',
      id: 1,
      tareaEditada: '',
      idTarea: 0,
      tareas: []
   },
   created() {
      this.tareas.push({id: this.id++, nombre: 'Realizar todo lo visto con Vue', completado: false});
      this.tareas.push({id: this.id++, nombre: 'Hacer todoList', completado: false});
      this.tareas.push({id: this.id++, nombre: 'Mejorar la app', completado: false});
   },
    methods:{
      mostrarForm(){
         this.formEditar = true;
      },
      ocultarForm(){
         this.formEditar = false;
      },
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
      },
      encontrarTarea(tarea){
            this.tareaEditada = tarea.nombre;
            this.idTarea = tarea.id;
            this.mostrarForm();
      },
      editarTarea(){
         for(var i = 0; i < this.tareas.length; i++){
            if(this.tareas[i].id === this.idTarea){
               if(this.tareas[i].nombre = this.tareaEditada){
                  Messenger().post({
                     message: 'Se ha modificado la tarea',
                     type: 'success',
                     showCloseButton: true
                  });
               }
            }
         }
      },
      removerform(){
         this.ocultarForm();
      }
   }
});

export class Todo{

    static fromJson(id, completado, creado, tarea){
        const todoTemp = new Todo(tarea);
        todoTemp.id = id;
        todoTemp.completado = completado;
        todoTemp.creado = creado;
        return todoTemp;
    }


    constructor(tarea){
        this.tarea = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }

}
import { modeloHabitacion } from "../models/modeloHabitacion.js";
export class ServiciosHabitaciones{
    constructor(){}

    
    async registrarHabitacion(datosHabitacion){
        let habitacionNueva=new modeloHabitacion(datosHabitacion)
        return await habitacionNueva.save();
    }
    async buscarTodasHabitaciones(){
        let habitacionesConsultadas = await modeloHabitacion.find()
        return habitacionesConsultadas
    }

    async buscarHabitacion(idHabitaciones){
        let habitacionConsultada=await modeloHabitacion.findById(idHabitaciones);
        return habitacionConsultada
    }
    async editarHabitacion (idHabitaciones, datosHabitacion){
        return await modeloHabitacion.findByIdAndUpdate(idHabitaciones,datosHabitacion);
    }
}
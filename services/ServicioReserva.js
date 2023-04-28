import { modeloreserva } from "../models/modeloReserva.js";
export class ServicioReserva{
    constructor(){}

    
    async registrandoreserva(datosReserva){
        let reservaNueva=new modeloreserva(datosReserva)
        return await reservaNueva.save()
    }
    async buscandoreserva(){
        let reservaConsultadas = await modeloreserva.find()
        return habitacionesConsultadas
    }

    async buscandoreservas(idReservas){
        let reservaConsultada=await modeloreserva.findById(idReservas)
        return habitacionConsultada
    }
    async actualizandoreserva (idReservas, datosReserva){
        return await modeloreserva.findByIdAndUpdate(idReservas,datosReserva)
    }
}
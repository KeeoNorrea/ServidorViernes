import {ServiciosHabitaciones } from "../services/ServiciosHabitaciones.js"

export class ControladorHabitaciones{

    constructor(){}

    async registrandoHabitacion(peticion,respuesta){

        let datosHabitacion=peticion.body
        let serviciosHabitaciones=new ServiciosHabitaciones()
        try{
            if(datosHabitacion.precioNoche<100 && datosHabitacion.cantidadmaxima<2){
                respuesta.status(400).json({
                    "mensaje":"Revisa el precio por noche y la cantidad maxima de persona ingresada"
                })
            }else if(datosHabitacion.precioNoche<100){
                respuesta.status(400).json({
                "mensaje":"Revisa el precio por noche"
                })
            }else if(datosHabitacion.cantidadmaxima<2){
                respuesta.status(400).json({
                    "mensaje":"Muy poca gente en esta habitación"
            })}
        else{
            await serviciosHabitaciones.registrarHabitacion(datosHabitacion)
            respuesta.status(200).json({
                "mensaje": "Exito agregando los datos"
            })
        }
    }

        catch(errorPeticion){
            respuesta.status(400).json({
                "mensaje":"Fallamos "+errorPeticion
            })
        }
    }
    async buscandoUnaHabitacion(peticion,respuesta){
        let idHabitacion=peticion.params.idhabitacion
        let serviciosHabitaciones=new ServiciosHabitaciones()
        try{
            respuesta.status(200).json({
                "mensaje": "Exito buscando los datos "+idHabitacion,
                "habitacion":await serviciosHabitaciones.buscarHabitacion(idHabitacion)
            })
        }catch(errorPeticion){
            respuesta.status(400).json({
                "mensaje":"Fallamos "+errorPeticion
            })
        }
    }
    async buscandoTodasHabitaciones(peticion,respuesta){
        let serviciosHabitaciones=new ServiciosHabitaciones()
        try{
            respuesta.status(200).json({
                "mensaje": "Exito buscando las habitaciones",
                "habitaciones":await serviciosHabitaciones.buscarTodasHabitaciones()
            })
        }catch(errorPeticion){
            respuesta.status(400).json({
                "mensaje":"Fallamos "+errorPeticion
            })
        }
    }
    async editandoHabitacion(peticion,respuesta){
        let idHabitacion=peticion.params.idHabitacion
        let datosHabitacion=peticion.body
        let serviciosHabitaciones=new ServiciosHabitaciones()
        try{
            await serviciosHabitaciones.editarHabitacion(idHabitacion,datosHabitacion)
            respuesta.status(200).json({
                "mensaje": "Exito editando la habitacion"
            })
        }catch(errorPeticion){
            respuesta.status(400).json({
                "mensaje":"Fallamos "+errorPeticion
            })
        }
    }
}
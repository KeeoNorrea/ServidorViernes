export class ControladorReservas{

    constructor(){}

    registrandoreserva(peticion,respuesta){
        try{
            respuesta.status(200).json({
                "mensaje": "Exito registrando los datos"
            })
        }catch(errorPeticion){
            respuesta.status(400).json({
                "mensaje":"Fallamos "+errorPeticion
            })
        }
    }
    buscandoreservas(peticion,respuesta){
        try{
            respuesta.status(200).json({
                "mensaje": "Exito buscando todas las reservas"
            })
        }catch(errorPeticion){
            respuesta.status(400).json({
                "mensaje":"Fallamos "+errorPeticion
            })
        }
    }
    buscandoreserva(peticion,respuesta){
        try{
            respuesta.status(200).json({
                "mensaje": "Exito buscando la reserva"
            })
        }catch(errorPeticion){
            respuesta.status(400).json({
                "mensaje":"Fallamos "+errorPeticion
            })
        }
    }
    actualizandoreserva(peticion,respuesta){
        try{
            respuesta.status(200).json({
                "mensaje": "Exito actualizando la reserva"
            })
        }catch(errorPeticion){
            respuesta.status(400).json({
                "mensaje":"Fallamos "+errorPeticion
            })
        }
    }
    eliminandoreserva(peticion,respuesta){
        try{
            respuesta.status(200).json({
                "mensaje": "Exito eliminando la reserva"
            })
        }catch(errorPeticion){
            respuesta.status(400).json({
                "mensaje":"Fallamos "+errorPeticion
            })
        }
    }
}
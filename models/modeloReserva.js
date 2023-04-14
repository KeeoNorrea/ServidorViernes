import mongoose from "mongoose"


const Reserva = new Schema({
    nombreCliente:{
        type:String,
        required:true
    },
    apellidoCliente:{
        type:[String],
        required:true
    },
    telefonoCliente:{
        type:String,
        required:true
    },
    fechInicio:{
        type:Number,
        required:true
    },
    fechaFinal:{
        type:Number,
        required:true
    },
    numeroPersonas:{
        type:Number,
        required:true
    }
})

export const modeloReserva=mongoose.modelo('reserva',Reserva)
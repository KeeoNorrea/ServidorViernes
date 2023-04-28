import mongoose from "mongoose"

const Schema = mongoose.Schema;

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
    fechaInicio:{
        type:Date,
        required:true
    },
    fechaFinal:{
        type:Date,
        required:true
    },
    numeroPersonas:{
        type:Number,
        required:true
    },
    costoReserva:{
        type:Number,
        default:0
    }
})

export const modeloreserva=mongoose.model('reserva',Reserva)
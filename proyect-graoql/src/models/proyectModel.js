const mongosose = require('mongoose');

const proyectSchema = new mongosose.Schema({
    title:{type:String, required:true},
    completed:{type:Boolean, default:false}
    });

    const Proyects = mongosose.model('Task', proyectSchema);

    module.exports = Proyects;
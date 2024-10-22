const { get } = require('mongoose');
const Proyect = require('../models/proyectModel');

module.exports = {

    getAllProyect: async () => {
        return await Proyect.find();
    },
    createProyect: async (title) => {
        const proyect = new Proyect({title});
        return await proyect.save();
    },

    updateProyect: async (_id, completed) => {
    
        return await Proyect.findByIdAndUpdate(_id , { completed });
    
    },
    
    deleteProyect: async (_id) => {

        return await Proyect.findByIdAndDelete(_id);   

    }


}
import mongoose from 'mongoose';

const dataSchema = mongoose.Schema({
    Id: {
        type: Number,
    },

    Year: {
        type: Number,
    },

    Medals: {
        type: Number,
    },

});

export default mongoose.model("DataSchema", dataSchema)
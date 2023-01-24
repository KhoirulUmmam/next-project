const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    nama:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    telepon:{
        type: Number,
        required: true
    },
    kelahiran:{
        type: Date,
        required: true
    },
    kelurahan:{
        type: String,
        required: true
    },
    kecamatan:{
        type: String,
        required: true
    },
    kota:{
        type: String,
        required: true
    },
})

export default mongoose.models.User || mongoose.model("User", userSchema);
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20,
    },
    LastName: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20,
    },
    UserName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
    },
    Email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    Password: {
        type: String,
        required: true,
    },
    Phone: {
        type: String,
        required: true,
    },
})

const User = mongoose.model('User', UserSchema);

export default User
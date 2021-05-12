import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
   name: { type: String, required: true},
   email: { type: String, required: true, unique: true},
   password: {type: String, required: true},
   phoneNumber: {type: Number},
})

export default mongoose.model("User", userSchema);
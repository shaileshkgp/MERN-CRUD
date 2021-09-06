import { Schema, model } from "mongoose";

const profileSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  gender: { type: String, required: true },
  dateOfBirth: { type: Date },
  batchYear: { type: Number, required: true },
  profession: { type: String, required: true },
  stream: { type: String, required: true },
  school: { type: String, required: true },
  address: { type: String, required: true },
  collageName: { type: String, required: true },
});

const Profile = model("Profile", profileSchema);
export default Profile;

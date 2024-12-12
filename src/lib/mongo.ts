import mongoose from "mongoose";

export async function dbConnect() {
    try {
        const connection = await mongoose.connect(String(process.env.MONGO_DB_CONNECTION_STRING));
        console.log("Connceted to mongodb");
        return connection;
    } catch (e) {
        console.log(e)
    }
}
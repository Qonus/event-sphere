import mongoose from "mongoose";

export async function dbConnect() {
    try {
        if (mongoose.connection.readyState >= 1) return;
        const connection = await mongoose.connect(String(process.env.MONGO_DB_CONNECTION_STRING));
        console.log("Connceted to mongodb");
        return connection;
    } catch (e) {
        console.log(e)
    }
}
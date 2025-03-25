// connect to mongo db using mongoose
import mongoose from 'mongoose';
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.LOCAL_MONGODB);
        console.log(`MongoDB Connected At: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
} 

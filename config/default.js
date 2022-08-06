require ('dotenv').config()
const mongoUser = process.env.MONGO_USER
const mongoPass = process.env.MONGO_PASS


module.exports = {
    dataBase: {
        host: `mongodb+srv://${mongoUser}:${mongoPass}@cluster0.z91m4sv.mongodb.net/?retryWrites=true&w=majority`
    }
} 
const config = require('config')
const Field = require('../models/cancha.model')


async function getAllField(req, res){
    const field = await Field.find({})
    .then(data => {
        res.json(data);
    }).catch((err)=>{
        res.status(400)
        console.erro(err);
        res.json({
            message: 'failed operation'
        })
    })
}

async function addField(req, res){
    const data = req.body
    const field = new Field(data);
    await field.save().then((data) => {
        res.json({
            operation: "add record to database",
            message: "successful operation",
            data});
    }).catch((err)=>{
        res.status(400)
        console.erro(err);
        res.json({
            operation: "add record to database",
            message: 'Could not add a new field, check the information entered'
        })
    })
}

//body de ejemplo 
/* {
    "name": "Cancha 123",
    "adress": "Calle Falsa 123, X5111 Springfield, EEUU",
    "location": [
      {
        "lat": "-31.156637766927503",
        "lng": "-64.31544549775249"
      }
    ],  
    "img": "https://www.google.com/search?q=linus+torvalds&tbm=isch&ved=2ahUKEwj89ob_9LD5AhU_lJUCHeziCakQ2-cCegQIABAA&oq=linus+to&gs_lcp=CgNpbWcQARgAMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoECCMQJzoECAAQQzoHCCMQ6gIQJ1DjDVioMmC9PGgBcAB4AIABjgSIAc4PkgELMS42LjEuMS4wLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ7ABCsABAQ&sclient=img&ei=z6_tYrzTBb-o1sQP7MWnyAo&bih=664&biw=1280#imgrc=xwyBZ8_X7btlBM",
    "phone": "03543 58-3467",
    "webSite": "https://www.instagram.com/peter.jrhm/"
} */


async function getfieldById(req, res){
    const { id } = req.params
    const field = await Field.findById(id)
    .then(data => {
        res.json({
            operation: "Search by id",
            message: "successful operation",
            data});
    }).catch((err)=>{
        res.status(400)
        console.error(err);
        res.json({
            operation: "Search by id",
            message: 'We could not find by id, check the information entered'
        })
    })
}

async function updatefieldById(req, res){
    const { id } = req.params
    const data = req.body
    await Field.findById(id)
    .then((field) => {
        field.name = data.name;
        field.adress = data.adress;
        field.location = data.location;
        field.img = data.img;
        field.phone = data.phone;
        field.webSite = data.webSite
        field.save();
        res.json({
            operation: 'Edit record',
            message: "successful operation",
            field});
    }).catch((err)=>{
        res.status(400)
        console.error(err);
        res.json({
            operation: 'Edit record',
            message: "failed operation"
        })
    })
}

async function deletefieldById(req, res){
   const { id } = req.params
    await Field.findById(id)
   .then((field) => {
    field.deleteOne()
    res.json({
        operation: 'Delete record',
        message: "successful operation"
        })
    })
    .catch((err)=>{
        res.status(400)
        console.error(err);
        res.json({
        operation: 'Delete record',
        message: "failed operation"
    })    
})
}

module.exports = { getAllField, addField , getfieldById , updatefieldById, deletefieldById }
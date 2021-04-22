const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const User = require('./models/user')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('Server underr maintenance')
//     } else {
//         next()
//     }
// })

// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.endsWith('.pdf')) {
//             return cb(new Error('Please upload a pdf file'))
//         }

//         cb(undefined, true)
//     }
// })

// app.post('/upload', upload.single('upload'), upload.single('upload'), (req, res) => {
//     res.send()
// }, (error, req, res, next) =>{
//     res.status(400).send({ error: error.message})
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up on port' + port)
})

// const main = async () => {

//     const user = await User.findById('6071da817088b31d8984dc3a')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)

// }

// main()
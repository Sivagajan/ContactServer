import './config.js'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { addContact } from './services/contactService.js'
import { changeContact, deleteContact, getAllContacts } from './controller/contactController.js'


// Falls ihr multer oder den express validator nutzt, importiert diese einfach auch
const PORT = process.env.PORT
const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

// hier ist genung Platz für alle eure Routen
app.get('/', (req,res) => {
    res.status(200).send('Alles OKAY')
})

app.get('/contact',getAllContacts)

app.post('/contact',addContact)

app.put('/contact',changeContact)

app.delete('/contact',deleteContact)


// dann werfen wir den Server mal an
app.listen(PORT, () => console.log('Server runs on Port:', PORT))
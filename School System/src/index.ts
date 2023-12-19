import express, { Request, Response } from 'express'
import { connectDB, prisma } from "./config/db";
import { ClassRoom,Student,Teacher } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

const app = express()
app.use(express.json())

const port = 7999

// Teacher requests

app.post('/AddTeacher',async (req, res) => {
    const Newuser = req.body as Teacher;
    await prisma.teacher.create({
        data: Newuser
    })
    res.json('user added')
})

app.get('/GetAllTeacher',async (req, res) =>{
    const users = await prisma.teacher.findMany()
    return res.json(users)
})


// Student requests

app.post('/AddStudent', async (req, res) => {
    const Newuser = req.body as Student;
    await prisma.student.create({
        data: Newuser
    })
    res.json('user added')
})

app.get('/GetAllStudent', async (req, res) => {
    const users = await prisma.student.findMany()
    return res.json(users)
})

// ClsssRoom requests


app.post('/AddClassRoom',async (req, res) => {
    const newClassRoom = req.body as ClassRoom;
    await prisma.classRoom.create({
        data: newClassRoom
    })
    res.json('ClassRoom added')
})

app.get('/GetClassRoom', async (req, res) => {
    const ClassRooms = await prisma.classRoom.findMany()
    return res.json(ClassRooms)
})

app.get('/GetClassRoom/:id', async (req, res) => {
    const {id} = req.params
    const ClassRoom = await prisma.classRoom.findUnique({
        where: { id: id }
    })
    return res.json(ClassRoom)
})

// Connect

connectDB()
app.listen(port , () => {
    console.log(`Server running on port ${port}`)
})
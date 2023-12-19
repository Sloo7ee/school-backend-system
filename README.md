### Project Overview

This project is a simple Express.js application with a MySQL database using Prisma .

### Endpoints:

#### Teacher Endpoints:
1. **Add Teacher:**
   - Route: `POST /AddTeacher`
   - Adds a new teacher to the database.

2. **Get All Teachers:**
   - Route: `GET /GetAllTeacher`
   - Retrieves a list of all teachers from the database.

#### Student Endpoints:
1. **Add Student:**
   - Route: `POST /AddStudent`
   - Adds a new student to the database.

2. **Get All Students:**
   - Route: `GET /GetAllStudent`
   - Retrieves a list of all students from the database.

#### ClassRoom Endpoints:
1. **Add ClassRoom:**
   - Route: `POST /AddClassRoom`
   - Adds a new classroom to the database.

2. **Get All ClassRooms:**
   - Route: `GET /GetClassRoom`
   - Retrieves a list of all classrooms with limited details (ID, Name, Teachers, Students).

3. **Get ClassRoom by ID:**
   - Route: `GET /GetClassRoom/:id`
   - Retrieves detailed information about a specific classroom based on the provided ID.

### Database Models:

- **Teacher:**
  - Fields: ID, Username, Phone, Specialization, ClassRoom ID.

- **Student:**
  - Fields: ID, Username, Ring, ClassRoom ID.

- **ClassRoom:**
  - Fields: ID, Name, Students, Teachers.

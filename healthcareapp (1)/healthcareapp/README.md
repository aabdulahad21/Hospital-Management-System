
# Hospital Management System

A hospital management application developed using Java and Spring Boot for managing patients, doctors, appointments, medicines, and user-related information. The project demonstrates backend development using REST APIs, database integration, and a layered application architecture.

## Features

### Patient Management
- Add and manage patient records
- View patient information
- Update patient details
- Delete patient records

### Doctor Management
- Add and manage doctor records
- View doctor information
- Update doctor details
- Delete doctor records

### Appointment Management
- Create and manage appointments
- Associate patients with doctors
- View and update appointment information

### Medicine Management
- Manage medicine-related information
- Add, view, update, and delete medicine records

### User Management
- Manage user information
- User-related operations through REST APIs

### Web Interface
- Separate web pages for different hospital management functions
- Page controllers for serving application views
- Interactive forms for managing hospital data

## Technologies Used

- Java
- Spring Boot
- Spring Data JPA
- Hibernate
- MySQL
- Maven
- HTML
- CSS
- JavaScript

## Architecture

The application follows a layered architecture:

- **Controller Layer** – Handles HTTP requests and exposes REST APIs
- **Service Layer** – Contains application and business logic
- **Repository Layer** – Handles database operations using Spring Data JPA
- **Entity Layer** – Represents database entities
- **DTO Layer** – Used for transferring data between application layers
- **Page Controller Layer** – Handles requests for web application pages

## Project Structure

src/
└── main/
    ├── java/
    │   └── com/
    │       └── healthcareapp/
    │           ├── controller/
    │           ├── dto/
    │           ├── entity/
    │           ├── repository/
    │           ├── service/
    │           └── ...
    │
    └── resources/
        ├── static/
        ├── templates/
        └── application.properties

## Main Modules

| Module | Description |
|--------|-------------|
| Patients | Manage patient records |
| Doctors | Manage doctor records |
| Appointments | Manage patient-doctor appointments |
| Medicines | Manage medicine information |
| Users | Manage user-related information |

## Database

The application uses MySQL as the relational database and Spring Data JPA with Hibernate for database persistence and object-relational mapping.

Database configuration can be provided in:

`src/main/resources/application.properties`

Update the database URL, username, and password according to your local MySQL configuration.

## API Endpoints

The application exposes REST APIs for managing patients, doctors, appointments, and medicines.

### Patients

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/patients` | Retrieve all patients |
| POST | `/patients` | Add a new patient |
| PUT | `/patients/{id}` | Update patient information |
| DELETE | `/patients/{id}` | Delete a patient |

### Doctors

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/doctors` | Retrieve all doctors |
| POST | `/doctors` | Add a new doctor |
| PUT | `/doctors/{id}` | Update doctor information |
| DELETE | `/doctors/{id}` | Delete a doctor |

### Appointments

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/appointments` | Retrieve all appointments |
| POST | `/appointments` | Create an appointment |
| PUT | `/appointments/{id}` | Update appointment information |
| DELETE | `/appointments/{id}` | Delete an appointment |

### Medicines

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/medicines` | Retrieve all medicines |
| POST | `/medicines` | Add a new medicine |
| PUT | `/medicines/{id}` | Update medicine information |
| DELETE | `/medicines/{id}` | Delete a medicine |

> Note: Endpoint paths may vary depending on the mappings implemented in the controllers.

## Getting Started

### Prerequisites

- Java JDK
- MySQL
- Maven
- IntelliJ IDEA, Eclipse, or another Java IDE

### Setup

1. Clone the repository.

2. Open the project in your preferred Java IDE.

3. Create a MySQL database for the application.

4. Configure the database connection in:

`src/main/resources/application.properties`

5. Update the MySQL username and password.

6. Build and run the Spring Boot application.

7. Access the application through the configured localhost port.

## Learning Outcomes

- Developed a backend application using Java and Spring Boot
- Implemented RESTful APIs
- Worked with Spring Data JPA and Hibernate
- Integrated a MySQL relational database
- Applied Controller-Service-Repository architecture
- Worked with entity relationships and DTOs
- Developed web pages integrated with a Spring Boot backend
- Gained experience with CRUD operations and database-driven applications

## Future Improvements

- Implement secure user authentication and authorization
- Add appointment availability and scheduling features
- Improve input validation and error handling
- Add centralized exception handling
- Add API documentation using OpenAPI/Swagger
- Improve the user interface and responsiveness

## Author

A Abdul Ahad

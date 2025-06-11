
# Court Reservation API

A simple RESTful API built with **Node.js**, **Express**, and **Sequelize** to manage reservations for sports courts. It allows player registration, court availability management, and scheduling matches involving multiple players.

## 📚 Technologies
- Node.js (v18+ recommended)
- Express
- Sequelize (with SQLite for development)
- PostgreSQL (optional, for production)
- dotenv
- nodemon (for development)

## 🛠️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/your-username/court-reservation-api.git
cd court-reservation-api
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment
Create a `.env` file. For development with SQLite:
```env
PORT=3000
DB_DIALECT=sqlite
NODE_ENV=development
JWT_SECRET_KEY=secret
```

To use PostgreSQL instead:
```env
DB_DIALECT=postgres
DB_HOST=localhost
DB_PORT=5432
DB_NAME=court_reservation
DB_USER=youruser
DB_PASS=yourpassword
```

### 4. Run migrations & seed data (optional)
```bash
npm run migrations:run
```

### 5. Start the server
```bash
npm run dev
```

---

## 🧱 API Structure

### Entities & Relationships
- **User**: Represents a person who participates in matches.
- **Court**: Represents a sports court that can host matches.
- **Reservation**: Represents a match scheduled for a specific date and time.

---

## 📌 License
MIT

---

## 🧪 Notes
This project is ideal for practicing:
- Sequelize model creation and associations
- Many-to-many relationship handling
- Validations and constraints
- RESTful API design
- Environment configuration
- Testing with Postman or Insomnia

---

Happy coding! 🚀
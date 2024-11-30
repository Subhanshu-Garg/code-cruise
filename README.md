# Express TypeScript Clean Architecture Boilerplate

A robust and scalable Express.js boilerplate with TypeScript, following clean architecture principles and best practices for building production-ready REST APIs.

## Features

- 🏗️ **Clean Architecture** - Organized in layers (Controllers, Services, Routes) for better separation of concerns
- 📝 **TypeScript** - Full TypeScript support with strict type checking
- 🔒 **Security** - Helmet middleware for enhanced security headers
- 🌐 **CORS** - Configurable CORS support
- 📝 **Request Validation** - Input validation using express-validator
- 🚦 **Error Handling** - Centralized error handling with custom AppError class
- 📊 **Logging** - Winston logger for better debugging and monitoring
- 🔄 **Async Handler** - Wrapper for handling async operations cleanly
- 🧪 **Testing Ready** - Jest setup for unit testing
- 🔍 **Code Quality** - ESLint configuration for consistent code style
- 🔄 **Hot Reload** - Development server with ts-node-dev for quick iterations

## Project Structure

```
src/
├── common/                 # Shared code, utilities, and middleware
│   ├── errors/            # Custom error classes
│   ├── middleware/        # Express middleware
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Utility functions
├── config/                # Application configuration
├── resources/             # API resources (routes, controllers, services)
│   ├── health/           # Health check endpoint
│   └── user/             # User resource (example)
└── routes/               # API route definitions
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/express-typescript-clean-architecture.git
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Create a .env file:
\`\`\`env
PORT=3000
NODE_ENV=development
LOG_LEVEL=info
CORS_ORIGIN=*
CORS_CREDENTIALS=false
\`\`\`

### Available Scripts

- \`npm run dev\`: Start development server with hot reload
- \`npm run build\`: Build the project for production
- \`npm start\`: Run the production server
- \`npm run lint\`: Run ESLint
- \`npm test\`: Run tests

## API Endpoints

### Health Check
- GET `/api/health` - Check API health status

### Users
- GET `/api/users` - Get all users
- GET `/api/users/:id` - Get user by ID
- POST `/api/users` - Create new user
- PUT `/api/users/:id` - Update user
- DELETE `/api/users/:id` - Delete user

## Error Handling

The application includes a centralized error handling system with:
- Custom AppError class for operational errors
- Global error handling middleware
- Structured error responses

## Validation

Request validation is implemented using express-validator with:
- Input sanitization
- Custom validation rules
- Structured validation error responses

## Contributing

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
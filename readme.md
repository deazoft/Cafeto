docker-compose up --build

curl -d '{	"name":"Jose David Escobar",	"email":"deazoft@gmail.com"}' -H "Content-Type: application/json" -X POST http://localhost:3001/api/user
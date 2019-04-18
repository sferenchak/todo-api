# Todo JSON API

## The Data

| Field       | Type    |
| ----------- | ------- |
| name        | String  |
| completed   | Boolean |
| createdDate | Date    |

## The Routes

| Verb   | Route             | Description     |
| ------ | ----------------- | --------------- |
| GET    | /api/todos        | List all todos  |
| POST   | /api/todos        | Create new todo |
| GET    | /api/todos/:todoId | Retrieve a todo |
| PUT    | /api/todos/:todoId | Update a todo   |
| DELETE | /api/todos/:todoId | Delete a todo   |


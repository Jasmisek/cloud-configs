# 🚀 Cloud configuration System

Cloud configuration system written in MySQL, ExpressJS & NodeJS made for other developers.

## 🔧 Installation

Install packages with npm.

```bash
 > cd cloud-configs-master
 > npm install
```

Upload tables to database.

```bash
 > npm run db:push
```
## 💻 API Reference

#### Get all items

```
GET /api/get
```

| Parameter | Type     | Description                 |
| :-------- | :------- | :-------------------------- |
| `user`    | `string` | **Required**. Your username |

#### Get item

```
GET /api/get/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

```
 POST /api/create
```

| Parameter | Type     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `user`    | `string` | **Required**. Your username         |
| `name`    | `string` | **Required**. Your config name      |
| `content` | `string` | **Required**. Your config's content |

#### Get item

```
 PUT /api/update/${id}
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `id`      | `string` | **Required**. Id of item to update |
| `content` | `string` | **Required**. Content to update to |

```
DELETE /api/delete/${id}
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `id`      | `string` | **Required**. Id of item to delete |

## 🥇 Credits

-   ExpressJS file structure - https://github.com/geshan/expressjs-structure

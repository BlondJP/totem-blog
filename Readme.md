# Totem Blog

You will find here my sources.

## Getting Started

Aspired by Clean Architecture, and using docker, I made this back-end web server to interact with a database.
The business purpose is to serve to blog.

### Prerequisites

What things you need to install the software and how to install them

```
docker
docker-compose
curl or a http client
```

### Installing

Follow the guide step by step to install the server. If you have any questions, feel free to ask me: jpb.blond@gmail.com

```
git clone https://github.com/BlondJP/totem-blog totem-blog
```

then

```
cd totem-blog
```

then

```
git clone https://github.com/BlondJP/totem-blog totem-blog
```

then

```
docker-compose up -d
```

then feel free to check available users here

```
cat back/src/data/users.json
```

then create your jwt TOKEN

```
curl --request POST \
 --url http://localhost:3001/auth \
 --header 'content-type: application/json' \
 --data '{
"email": "tim-cook@apple.com",
"password": "7d793037a0760186574b0282f2f435e7"
}'
```

then access in the scope "me"

```
curl --request POST \
 --url http://localhost:3001/users/me/articles \
 --header 'authorization: Bearer TOKEN' \
 --header 'content-type: application/json' \
 --data '{
"title": "Voyage en Chine",
"pictureUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaU0QJbRsxpKQrh0If4aWUXbq8c43n7fvIjlxk726cP_yiTSxn",
"text": "lorem ipsum",
"private": false
}'
```

then

```
curl --request GET \
 --url http://localhost:3001/users/me/articles \
 --header 'authorization: Bearer TOKEN'
```

then

```
curl --request POST \
 --url http://localhost:3001/users/me/articles/1/comments \
 --header 'authorization: Bearer TOKEN' \
 --header 'content-type: application/json' \
 --data '{"text": "LOL !"}'
```

then you can check articles with their comments

```
curl --request GET \
 --url http://localhost:3001/users/me/articles \
 --header 'authorization: Bearer TOKEN'
```

### Admin Case

If you want to authenticate as an admin, choose an admin account

```
curl --request POST \
 --url http://localhost:3001/auth \
 --header 'content-type: application/json' \
 --data '{
"email": "jean-philippe@blond-technologies.com",
"password": "5d41402abc4b2a76b9719d911017c592"
}'
```

With this token, you will be able to access and create resources you do not own

```
curl --request GET \
 --url http://localhost:3001/users/2/articles \
 --header 'authorization: Bearer TOKEN'
```

or create

```
curl --request POST \
 --url http://localhost:3001/users/me/articles \
 --header 'authorization: Bearer TOKEN' \
 --header 'content-type: application/json' \
 --data '{
"title": "Voyage au Japon",
"pictureUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaU0QJbRsxpKQrh0If4aWUXbq8c43n7fvIjlxk726cP_yiTSxn",
"text": "Konnichiwa !",
"private": false
}'
```

## Author

- **Jean-Philippe BLOND**

## License

This project is licensed under the MIT License

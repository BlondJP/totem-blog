git clone https://github.com/BlondJP/totem-blog totem-blog

cd totem-blog

docker-compose build

docker-compose up

cat back/src/data/users.json

curl --request POST \
 --url http://localhost:3001/auth \
 --header 'content-type: application/json' \
 --data '{
"email": "tim-cook@apple.com",
"password": "7d793037a0760186574b0282f2f435e7"
}'

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

curl --request GET \
 --url http://localhost:3001/users/1/articles \
 --header 'authorization: Bearer TOKEN'

curl --request POST \
 --url http://localhost:3001/users/me/articles/1/comments \
 --header 'authorization: Bearer TOKEN' \
 --header 'content-type: application/json' \
 --data '{"text": "LOL !"}'

curl --request GET \
 --url http://localhost:3001/users/1/articles \
 --header 'authorization: Bearer TOKEN'

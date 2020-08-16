docker-compose up -d

curl --request POST \
 --url http://localhost:3001/auth \
 --header 'content-type: application/json' \
 --data '{
"userId": 1,
"password": "5d41402abc4b2a76b9719d911017c592"
}'

curl "http://localhost:3001/users/1/articles"

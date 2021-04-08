#!/bin/sh

while IFS='='  read -r first second ; do
	
	if [ "$first" == "MONGO_USERNAME" ]
	then
		user="$second"
	fi
	if [ "$first" == "MONGO_PASSWORD" ]
	then
		password="$second"
	fi
done < .env

echo $user


docker-compose up -d


docker exec -i db sh  -c "mongoimport -u $user -p $password --authenticationDatabase admin -c test_collection -d db --jsonArray" < twitter_test.json

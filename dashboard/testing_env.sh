#!/bin/sh
  
while IFS='='  read -r first second ; do
	echo $first
	echo $second
        if [ "$first" == "MONGO_USERNAME" ]
        then
                user="$second"
        fi
        if [ "$first" == "MONGO_PASSWORD" ]
        then
                password="$second"
        fi
done < .env

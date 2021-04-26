- For our project we needed tweets from different newspapers twitter feeds as they often post headlines as tweets. To do this we created a python script that connected to the twitter api and searched for tweets regarding certain topics (this can be found [here](https://github.com/jamesrw94/UoB_group_project/blob/main/twitterapi/twitterconnect.py)). We used pandas to clean this data and transform it into an easily digestible format. Once we had the script working we connected this script to a cron job that ran the script every week for 4 weeks - in this way we got round the twitter api limitations for scraping new tweets. After collecting enough tweets we then collated them into one pandas dataframe, visualised this data (visualisations can be found [here](https://github.com/jamesrw94/UoB_group_project/blob/dans_branch/twitterapi/csv_contents_visualizations.ipynb)) and then turned the data into a json file ready for insertion into the mongodb server.Visualising the data served the purpose of checking that we had enough data so that every combination of newspaper/topic was accounted for.
- To insert the data into the server we used an bash script found [here](https://github.com/jamesrw94/UoB_group_project/blob/dans_branch/twitterapi/insertion_script.sh) that reads in an .env file and uses that to authenticate an mongo exec command; inserting the json file directly into the database and creating the collection if it did not already exist. We decided reading in the .env file was the best option as this prevented us from having to put any passwords on our public github whilst also creating an easy way of inserting the needed information. However this does not get over the problem of the data disappearing from the container when initialising the container on another computer. In the future we would like to deploy the mongo db container on a web server so that data is not lost when the server is moved to a different computer.



-Below is both of our data schemas.
 ![collection diagrams](https://github.com/jamesrw94/UoB_group_project/blob/dans_branch/DataModel/updated_data_model.png)

need to add in stuff with data models and how it interacts with front end!!



Due to the user moderated test we needed two tweets to be called from our database to appear at the same time. For our restful api originally we were having problems coordinating two callbacks to arrive at the front end at the same time as we needed each of the api calls to be for different newspapers. We managed to get around this problem by using a Promise which allowed us to make seperate calls to mongoose in the backend but package them up into a list for the frontend before sending back the request. This function can be seen below.

```
async function get_both_random(topic,res){
    var p = await get_random_papers();

    Promise.all([
        Tweets.aggregate([{$match:{"paper":p[0],"term":topic}},{$sample:{size:1}}]).exec(),
        Tweets.aggregate([{$match:{"paper":p[1],"term":topic}},{$sample:{size:1}}]).exec()
    ]).then(function(result) {
      res.send([].concat.apply([],result));
  })

}

```


When updating the correct/incorrect newspapers it did not make sense to create different api routes for each of the newspaper and correct/incorrect combination. Instead we used two routes and used the HttpParams module to insert the newspaper into request. This allows for the code to be much more scalable and flexible. Below we have included the function that facillitates this flexibility. 

```
public update_paper_correct(newspaper: string){
    let params = new HttpParams();
    params = params.append('paper', newspaper);
    return this.httpClient.get(this.REST_API_SERVER_UPDATE_CORRECT,{params: params});
}
```



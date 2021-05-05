# Backend #

For the backend part of our project we used the predefined data model to set clear tasks for the backend, then from these tasks we set out a list of objectives. These objectives were:

 1) Creating a dataset of tweets from major news sources


 2) Provide the frontend with a supply of tweets from random newspapers


 3) Track the performance of players in the quiz


 4) Provide the frontend with information on how players perform, with the ability to group the performance data by newspaper. 


### Data Model ###

Our data model was created by the front-end and backend teams working in tandem with significant input from Phillip to ensure that our data model reflected the needs of our end users. This data model was derived from user moderated testing that Philip did with our wireframe design of the website.  As this data model was decided before most of the implementation ahd begun, we made sure that the frontend and backend teams had the same vision of the end product which prevented friction when intergrating. This data model can be seen below.

<p align="center">
 <img src="https://raw.githubusercontent.com/jamesrw94/UoB_group_project/main/System_Implementation/DataModel/Data%20Model.png" width="600" height="600">
</p>

### Creating the Data Source ###

To achieve our first objective we needed tweets from different newspapers' twitter feeds as they often post headlines as tweets. To do this, we created a python script that connected to the twitter api and retrieved tweets regarding certain topics (this can be found [here](https://github.com/jamesrw94/UoB_group_project/blob/main/twitterapi/twitterconnect.py)). We used pandas to clean this data and transform it into an easily digestible format. Once we had the script working we connected this script to a cron job that ran the script every week for 4 weeks - in this way we worked around the twitter api limitations for scraping new tweets. After collecting enough tweets we then collated them into one pandas dataframe, visualised this data (visualisations can be found [here](https://github.com/jamesrw94/UoB_group_project/blob/dans_branch/twitterapi/csv_contents_visualizations.ipynb)) and then turned the data into a json file ready for insertion into the mongodb server. Visualising the data allowed us to ensure that all combinations of newspapers were accounted for.
- To insert the data into the server, we used a bash script found [here](https://github.com/jamesrw94/UoB_group_project/blob/dans_branch/twitterapi/insertion_script.sh) that reads in a .env file and uses that to authenticate a mongo exec command; inserting the json file directly into the database and creating the collection if it did not already exist. We decided reading in the .env file was the best option as this prevented us from having to put any passwords on our public github whilst also creating an easy way of inserting the needed information. However, this does not get over the problem of the data disappearing from the container when initialising the container on another computer. In the future we would like to deploy the mongo db container on a web server so that data is not lost when the server is moved to a different computer.



-Below is both of our data schemas.
 ![collection diagrams](https://github.com/jamesrw94/UoB_group_project/blob/dans_branch/DataModel/updated_data_model.png)

### Connecting to the Database ###

To achieve our second backend objective, we needed two tweets to be called from our database to appear at the same time. For our restful api originally we were having problems coordinating two callbacks to arrive at the front end at the same time as we needed each of the api calls to be for different newspapers. We solved this problem by using a Promise which allowed us to make seperate calls to mongoose in the backend but package them up into a list for the frontend before sending back the request. This function can be seen below.

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

### Updating the Database ###

For our third objective we needed to update our database to reflect when players got a question right or wrong. When updating the correct/incorrect newspapers, it did not make sense to create different api routes for each of the newspaper and correct/incorrect combination. Instead, we used two routes and used the HttpParams module to insert the newspaper into request. This allows for the code to be much more scalable and flexible. Below we have included the function that facillitates this flexibility. 

```
public update_paper_correct(newspaper: string){
    let params = new HttpParams();
    params = params.append('paper', newspaper);
    return this.httpClient.get(this.REST_API_SERVER_UPDATE_CORRECT,{params: params});
}
```

Finally for our fourth objective we needed to be able to retrieve news data. By this we mean how past players have answered the questions in the quiz. The way we achieved this was very similar to the method updating the database above using HttpParams to limit the amount of routes we needed to implement.


import requests
import os
import json
import pandas as pd

def create_headers(bearer_token):
    headers = {"Authorization": "Bearer {}".format(bearer_token)}
    return headers

def connect_to_endpoint(url, headers):
    response = requests.request("GET", url, headers=headers)
    print(response.status_code)
    if response.status_code != 200:
        raise Exception(response.status_code, response.text)
    return response.json()


def create_url(query, tweet_fields):
  url = "https://api.twitter.com/2/tweets/search/recent?query={}&{}".format(
        query, tweet_fields
    )
  return url



headers = create_headers(bearer_token)


search_terms =['Military', 'Climate', 'Politics','Brexit','Boris','Covid','America','Black Lives Matter']
newspapers = ['Guardian','DailyMailUK','FT','TheSun','Telegraph']

news_dict = {}

for search_term in search_terms:
  for newspaper in newspapers:
    search_q = f' "{search_term}" from:{newspaper}'
    if newspaper in news_dict.keys():
      news_dict[newspaper][search_term] = connect_to_endpoint(create_url(search_q,tweet_fields),headers)
    else:
      news_dict[newspaper]={}
      news_dict[newspaper][search_term] = connect_to_endpoint(create_url(search_q,tweet_fields),headers)




df=pd.DataFrame(df_dict)
df['link']=df['text'].map(lambda x : x.split('https')[1] if len(x.split('https'))>1 else x)
df['link']='https'+df['link']
df['text']=df['text'].map(lambda x : x.split('https')[0])
df_refine=df[~ df['text'].str.contains('RT')]
df_refine=df_refine.drop_duplicates(subset=['text'])
df_refine=df_refine[df.text.map(len) >10]

filter_words=['Guardian','Daily Mail', 'FT', 'Sun', 'Telegraph']
for word in filter_words:
  df_refine=df_refine[~ df_refine['text'].str.contains(word)]


df_refine.to_csv('sample_tweets.csv')



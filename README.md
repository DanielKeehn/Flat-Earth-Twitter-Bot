# Flat-Earth-Twitter-Bot
A Twitter bot mimicking a “flat earther” (https://twitter.com/FlatEarther8593)

## Overview of Bot's Actions
This Twitter bot tries to mimic a person who believes that the Earth is flat. To accomplish this, this bot randomly uses hashtags related to the flat earth community, which include the hashtags, #flatearth, #flatearthsociety, #earthisflat, #NASAlies, and #researchflatearth. My Twitter bot generates one of four types of tweets every hour: a retweet, a tweet with hypertext, a tweet referencing another account, and a scientific definition generating tweet.

## Types of Tweets Bot Produces
### 1) Retweet 
This is the most basic type of tweet my bot can produce. This type of tweet simply takes a random tweet containing a tweet with a list of specific hashtags. The framework I used to create this Twitter bot used this type of tweet as an example.

### 2) Hyperlink Tweet 
When this type of tweet is created, the bot searches through tweets for a hyperlink that pertains to the flat earth community, which includes links to Twitter conversations, images, YouTube videos, etc. This hyperlink and one of many prewritten strings are combined to create this type of tweet.

### 3) Tweet Referencing Another Account 
This type of tweet is essentially a tweet recognizing another flat earther on Twitter. It uses the same hashtags as the other types of tweets and collects the name of a user who used one of these hashtags. Prewritten strings and the name of a user are what create this tweet.

### 4) Scientific Definition Generating Tweet 

In addition to node.js and the Twitter API, this tweet uses the WordsAPI (a dictionary API). This type of tweet makes the bot choose from a long list of scientific words and find the definition of this word using the WordsAPI. The reasoning for this type of tweet was because I found people who believe the earth constituently state the flat earth theory was based on science. While some flat earthers base their beliefs on the bible, I decide to parody the flat earthers who prove their theory through science. The bot concatenates the scientific word, scientific definition, and a prewritten phrase to create a tweet. 

## Credit 
### Framework (https://github.com/RandyMcMillan/BitcoinTwitterBot)
This GitHub project was the framework I used to create my Twitter Bot. In addition, this project goes into detail about to create your own Twitter Bot in the README which I found very useful.
### Twitter API (https://developer.twitter.com/)
The Twitter API that allows bots to be created on Twitter
### WordsAPI (https://www.wordsapi.com/)
The API that helped me create the scientific definition generating tweet 


# Welcome to my node.js CLI application, *LIRI!*

## This app was made by Alexander Petroski

Just like SIRI (Speech Interpretation and Recognition), *LIRI* (Language Interpretation and Recognition) allows you to enter in certain commands in a node.js enviornment to search for information about **movies**, **songs**, and **concerts**.

The following commands can be used to found what you are looking for!

* **node liri.js movie-this** <_insert movie name here_>
* **node liri.js spotify-this-song** <_insert song name here_>
* **node liri.js concert-this** <_insert artist name here_>
* **node liri.js do-what-it-says**
  
### 1. node liri.js movie-this 
This command will allow you to search a perticular movie that you want to know more about, and it will output the following information to the terminal:

* Title
* Year it was released
* IMDB movie rating (out of 100)
* Country it was filmed in
* Primary language of the movie
* Plot
* Actors

### 2. node liri.js spotify-this-song <_insert song name here_>

This command will allow you to search for a particular name of a song, or word in a song, and it will output the **top 10** songs with the word(s) you used for the search. It will then seperate each song in a list type format from song #1-10 (if it can find 10) and output each of the following in the list:

* Artist
* Song title
* Preview song (this will be a url to click on)
* Album

### 3. node liri.js concert-this <_insert artist name here_>

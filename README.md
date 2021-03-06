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

Here is an example of it in practice:

[Imgur](http://i.imgur.com/jG0YYGG.png)

### 2. node liri.js spotify-this-song <_insert song name here_>

This command will allow you to search for a particular name of a song, or word in a song, and it will output the **top 10** songs with the word(s) you used for the search. It will then seperate each song in a list type format from song #1-10 (if it can find 10) and output each of the following in the list:

* Artist
* Song title
* Preview song (this will be a url to click on)
* Album

Here is an example of it in practice:

[Imgur](https://i.imgur.com/SvHj4cL.png)

### 3. node liri.js concert-this <_insert artist name here_>

This command will allow you to search for a particular music artists of your choice, and it will show their next upcoming concert. It will show the following in the terminal to the user:

* Name of the venue
* Location of the venue (by city)
* Date of the concert

Here is an example of it in practice:

[Imgur](https://i.imgur.com/G1nDJYt.png)

### 4. node liri.js do-what-it-says

This command will allow you use the fs node package to pull the text from the random.txt file. It's current and base status has it set to spotify-this-song "I Want It That Way", and 10 songs are printed to the terminal.

Here is an example of it in practice:

[Imgur](https://i.imgur.com/kVMjeGP.png)

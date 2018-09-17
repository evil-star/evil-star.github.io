// Variables
var tweetList = document.querySelector('#tweet-list');

// Event Listeners

document.querySelector("#form").addEventListener('submit', newTweet);
tweetList.addEventListener('click', removeTweet);
document.addEventListener('DOMContentLoaded', printLocalStorageTweets);

// Functions

function newTweet(e) {
  e.preventDefault();

  var tweetText = document.querySelector('#tweet').value;

  var removeBtn = document.createElement("a");
  removeBtn.classList = 'remove-tweet';
  removeBtn.textContent = "X";

  var li = document.createElement('li');
  li.textContent = tweetText;

  li.appendChild(removeBtn);

  tweetList.appendChild(li);

  addTweetLocalStorage(tweetText);
}

function removeTweet(e) {
  if (e.target.classList.contains('remove-tweet')) {
    e.target.parentElement.remove();
  }

  removeTweetFromStorage(e.target.parentElement.textContent);
}

function getTweetsFromStorage(){
	let tweets;
	let tweetsLS = localStorage.getItem('tweets');
	if(tweetsLS == null){
		tweets = [];
	} else {
		tweets = JSON.parse(tweetsLS);
	}
	return tweets;
}

function addTweetLocalStorage(tweet){
	let tweets = getTweetsFromStorage();
	tweets.push(tweet);
	localStorage.setItem('tweets', JSON.stringify(tweets));
}

function printLocalStorageTweets(){
  let tweets = getTweetsFromStorage();

  tweets.forEach(function(tweet){
    var removeBtn = document.createElement("a");
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = "X";

    var li = document.createElement('li');
    li.textContent = tweet;

    li.appendChild(removeBtn);

    tweetList.appendChild(li);
  });
}

function removeTweetFromStorage(tweet){
  var tweets = getTweetsFromStorage();
  var tweetRemove = tweet.substring(0, tweet.length - 1);
  tweets.forEach(function(tweetLS, index){
    if(tweetLS === tweetRemove){
      tweets.splice(index, 1);
    }
  });
  localStorage.setItem('tweets', JSON.stringify(tweets));
}

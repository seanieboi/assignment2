#Assignment 2 - MEAN stack app.

Name: Sean O'Connor

Live URL: http://funtimesireland.herokuapp.com/

###Overview.

The purpose of this application is to demo Angulars core functions as part of a college assignment. To do this I decided to create a video game application which allows the user to view games and create an account. The reason I choose this type of web app is that I have a great interest in video games and I find alot of the online stores don't have good clean designed stores. Also I found that most Irish online game stores are very expensive and don't give the user all the information required to make their purchase. therefore my objectives of the application were to allow the user to: 

+ View latest games and prices quickly 
+ Give the user a product discription, details and trailer for the game to allow them to easily know if a game is for them or not. 
+ Comment on games so the can rest assure that not all the reviews are by people payed to review the games. 
+ Upvote comments to give more information on whether a game is worth it or not. 
+ Login or sign up to make purchases or comment on games. 
+ Have information displayed clearly no matter what kind of device the user is using. 
+ Contact Us if they find informatioon is not correct or a bug in the code.  


###User Functions.
 
 + View product details for desired game along with game trailer 
 + Sort gammes alphabetically or by release date
 + Search games by name
 + Comment on games
 + Upvote comments on games
 + Filtered games on the homepage to allow the user to see new releases
 + Carosal to show user special offers etc..
 + View App on Mobile Device
 + Full validation on contact us form to help the user not make mistakes
 + Sign up via email or by social media.

###Installation requirements.

+ Node JS
+ AngularJS 1.5.2 
+ Yeoman
+ Bower
+ Grunt
+ Gulp
+ MongoDB
+ Bootstrap 3.3.6
+ Sublime Text (for editing)
+ Beyond Compare (for editing)

###How to run App.

+ To run the app after cloning
+ Install Nodejs - https://nodejs.org
+ Install Yeoman, Bower, Grunt, Gulp (If not installed) run npm install -g yo bower grunt-cli gulp
+ Install AngularJS Full-Stack generator (generator-angular-fullstack) run npm install -g generator-angular-fullstack
+ Install MongoDB
+ Navigate to the folder where the app is downloaded
+ Run npm install
+ Run bower install
+ Run mongod in a separate shell to keep an instance of the MongoDB Daemon running
+ Run Grunt serve
+ The app should be opened in a new window
+ All required classes etc are in the package therefore no extra software etc is required to run the app. 
feel free to explore app. 
+ All links to DB etc are removed.

###Data Model Design.

Diagram of app's data model (see example below) AND/OR a sample of the test data used (JSON or equivalent).

![][image1]

<br>

Sample collection data for a game in MongoDB:

![][image2]

<br>

###Non-Trivial Issues.

+ Re-Sizing images - I found it hard to get th eimages to fit the carosal when they are all different sizes, to fix this I had to chnage the css to auto for width and 300px for length. 
+ Commas after fuction -  In the factory I didn't add a comma after the first function in the factory and got loads of controller issues. 
+ Displaying YouTube videos - see below.
+ Uploading Images - This took way more time than expected and I would have liked to properly implemented image uploading but instead I went with the 3rd party app called Filestack.  

###App Design.

A simple diagram showing the app's component design, in particular controllers and services (see example below).

![][image3]

###UI Design.

Homepage view uses MainControllerCtrl controller, route is /:
![][image4]

<br>

About page uses AboutComponent, I didn't bother creating a controller as there is only static content route is /about:
![][image5]

<br>

Games page uses GamesControllerCtrl controller, route is /games:
![][image6]

<br>

Game details page uses unique id from games page, the controller is gameDetailsCtrl, route is /gameDetail/games_Id:
![][image7]

<br>

Reviews page uses unique id from game details page, the controller is gameReviewCtrl, route is /gameDetail/game_Id/reviews
![][image8]

<br>

Contact us page uses ContactControllerCtrl, the route is /contact:
![][image9]

<br>

Add Game page uses AddGameControllerCtrl, the route is /addGame this is only available to users of type admin:
![][image10]

###Routing.

+ /homepage - displays main page with carrasol and new releases (games released in 2016)
+ /about - gives details of the app 
+ /games - lists all available games and allows the user to sort them by name or release date or filter by name
+ /gameDetails/:game_Id - displays details for a specific game
+ /gameDetails/:game_Id/reviews - displays reviews for the selected game
+ /contact - displays a contact us form with full validation (not connected to back end)
+ /login - allows user to log in to view their account
+ /myaccount - only available after the user logs in with valid credentials
+ /register - allows user to register anfd lthen login to app
+ otherwise - redirects the user to the homepage

## Web API Endpoint Reference

Describe your web API.

| HTTP Verb & Path |  Description |
| -- | -- |
| GET: /api/games |return a list of games |
| POST: /api/games |add a new game (only available for admin) |
| POST: /api/games/' + game_id + '/comments' comment | add a comment to a game|
| POST: /api/games/' + /game_id + '/comments/' +  comment_id + '/upvotes' |increase the votes for a comment |
| DELETE: /api/games/ + game_ID | get a single game|
| POST: /send |send email after user fills in contact us form|

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
//router.get('/:id/gameReviews', controller.show_reviews);
router.post('/:id/comments', controller.add_comment);
router.post('/:game_id/comments/:comment_id/upvotes', controller.update_comment_upvotes);

###Extra features

+ Authentication - users can log in to view their account, this is preformed by comparing the details entered by the user to an array acting as a database to see if credentials match and if they do then authenticate. 
+ User Registration - A user can reigster to the system and then login with their details. After registering the user is re-directed to the login page. This was simple to implement when a user registers their details are wrote to an array that simulates a Database. 
+ User Registration through Social Media - Users can sign up by using their Facebook, Twitter or Google credentials. 
+ Bootstrap Carosal - Carosal that scrolls to show users desired information i.e special offers. 
+ YouTube Player - to view games trailers a youtube player needed to created as Angular blocks calling YouTube URLs from a json file. By using the player I am able to call the video by its unique id rather than the URL. 
+ Tabs - As part of styling the game page rater than present the user with loads of information at once I implemented tabs to manage the information
+ ajoslin.promise-tracker - This is a 3rd party javascript file that allows me to do dynamic form validation for my contact us form. 
+ Responsive Design - The app is optimised for mobile, tablet and desktop. Where needed I used the correct angular divs to make the likes of the videos responsive. 
+ Filestack Integration - Filestack is used to store the images associated with the games. 
+ Full Contact Us Form - The contact form has full validation and sends the email (see below for more on sending emails)
+ Live hosting on Heroku

###Independent learning.
+ Modals - I ran out of time before i had a chance to implement any modals (modals are pop up pages with information). I looked at implementing them as a single partial or embeded in another partial
+ Modules - At one stage I looked at trying to use 2 modules in the one page but Angular doesn't allow this, instead I figured out that I could call an extra js file when creating my module. 
+ Authentication - I spent a lot of time figuring out how to authenticate users and secure pages in the route so they could not be accessed when user wasn't logged in. 
+ Yoeman - Using Yoeman saved a lot of time in getting the project set up and adding user authentication. 
+ Uploading images - I spent a considerable amount of time trying to implement a 3rd party image uplopader. I learned a lot about the front end and the back end ways of implementing this. 
+ Sending Emails - I wanted to fully implement the contact us form so that when the user complets the form they will receive a confirmation email and I will recieve the completed form. 
+ How to host a mean stack app - I wanted to get my app online so i looked into the best way to host for free. Heroku has Yeoman support so I used that and it made the build and deploy process very simple. 

[image1]: ./support/model.png
[image2]: ./support/gameJsonData.png
[image3]: ./support/componentDesign.png
[image4]: ./support/homepage.png
[image5]: ./support/about.png
[image6]: ./support/allGames.png
[image7]: ./support/gameDetails.png
[image8]: ./support/reviews.png
[image9]: ./support/contactUs.png
[image10]: ./support/addGame.png

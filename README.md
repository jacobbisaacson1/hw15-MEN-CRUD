![GA Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# MEN Stack Homework

You are going to create an Express app from scratch that: 
* uses the `mongoose` ODM to make a model and persist data in a MongoDB database
* has views/templates built with EJS 
* is RESTful
* is easily navigable

**Read this *entire* page before you start.**

### There should be at least 15 commits.

1. The app should have one model with at least two properties.  There must be at least two different data types.  We recommend making one a Boolean so you can practice using checkboxes.   
2. It must have full CRUD functionality.
3. It must contain all seven RESTful routes.  Remember to use `next` for error handling in the routes that contain mongoose DB queries.
4. It must be _navigable_.  You don't need to have the most beautiful UI ever, but it should be _intuitive_... a user should be able to easily access all of the functionality by clicking around (i.e. they should never have to type in a link to go to another section of the site).  In other words, There should be partials and a nav on each page, and `GET /` should either render a home page that includes a nav, or at the very least it should redirect to the index.  
5. Some kind of custom CSS is required, at the very least, a background color.  Bootstrap is optional but recommended -- try some of their cool UI classes, like [Card](https://getbootstrap.com/docs/4.3/components/card/).
6. This app will be very similiar to the fruits app, but the model MUST be different.
7. **DO NOT COPY AND PASTE ANY CODE FROM THE LESSON APP OR ANYWHERE ELSE**. It's okay to use it as a reference, but type it out.  **DO NOT COPY AND PASTE**.  This warning is not about "cheating," it's about learning syntax by realising that you need it, and by repeating the steps in the process, and _learning how to understand and debug the errors you will get in the process_.
8. Do one small step at a time, and then make sure that one step works, and commit before moving on. **You are required to have at least 15 commits**.  
9. Along those lines: **do not install modules or create routes or templates before you need them**. 

### Remember: Use this list of **RESTful routes** as your guide for HTTP methods, CRUD functionalities, and URL formatting:

![RESTful routes](https://i.imgur.com/ReOfT0u.png)

#### Hints and tips.

* Don't forget to `npm init` in order to start your node project.

* If you get an error message that says module not found—did you install the module?

* **READ YOUR ERROR MESSAGES**, first try to solve them by going through the error message. 
Then look it up (try googling the error message and including "express" and/or "mongoose"). Then compare to code that you know works, like the fruits app from class repo. Then slack an instructor.

* Set up your db first and make sure it's connected.

* Do one functionality at a time, and do each piece of that functionality one step a time.  For example, maybe start with a user story like: _"User should be able to add an item"_.  Think: In terms of REST, that means you need "create" and "new." Don't do anything else until the user can add an item.  Perhaps you'd follow steps like this:
    * The user should be able to add items, so:
        * First make a "new" route that works at all and `res.send()`s some text back. **Test it**.
        * Then, make it render a template with a form. **Test it**.
        * Then, make a "create" route for the form to `POST` to, and make sure submitting the form successfully hits the create route. Don't worry about the data or the database, just `res.send()` some text back "hitting create route".  **Test it.**
        * Then see if you can `console.log()` the submitted data ("`req.body`"). Oh right. You need to add a node module for that.  So add the node module and see if you can get the data. **And Test It**.
        * Then see if you can get the post route to actually add the submitted data to the DB. **Test it using the `mongo` CLI and by logging the `createdItem` in your callback** 
    * _Then_ worry about what should happen after the data is added.  _What would make sense now?_ Maybe you should have an index page where the user can see the items?
    * Ok. so then you're gonna need to build an index route... and just focus on that 
    until its done.  And work in small steps... so maybe:
        * First make a index route that just `res.send()`s some dummy text ("index route works") back. **Test it**.
        * Then make a template that will be the index page.  Just get the template rendering.  **Test it.**
        * Then make the index route actually get data from the db successfully, and **test it** with console.log().
        * Then render the data into the template... etc..
    * ...And so forth. Make sure you're thinking about and building your apps in this way.  Take careful small well-reasoned steps, and do what you can to stay clear on what the goal of each step is.  **It is critical that you build these apps one step at a time, thinking about what functionality you need to add, and adding it one step at a time, thinking about what you're doing at each step and then testing after each step to make sure everything works like you intend.**

* `console.log()` everything you can think of.

* Remember when you are submitting a form, you are making a request from the client, and your server
has to respond to that request. 

* `res.render()` is for rendering templates (ejs), `res.send()` is for sending text, `res.redirect()` is for sending a message to the browser that it should redirect to a new location.  Remember, the `res` object is how you _'respond'_ to the client. 

* Use lesson notes and labs from this week as a guide only if you are completely lost.  But make sure you are giving it 
a true effort and not taking the easy way out.  _No Pain, No Gain!_

## Hungry for more? 

* Try changing your model so that a String field uses [`enum`](https://mongoosejs.com/docs/validation.html#built-in-validators) to limit the value of the field to one of a pre-defined set of values.  Then use a radio button on the corresponding form field in the ejs pages, to learn how to handle form submissinos with radio buttons.

* Try making a field in your model with an `<input type="date">` form input. To get the dates to print out in an elegant way, research the [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) class on MDN.  It's a _great_ thing to get familiar with.

* Read [this section of the mongoose documentation on validation](https://mongoosejs.com/docs/validation.html) and try adding some other types of validation to your model.

* Experiment with the awesome methods you can use to build complex queries in mongoose [here](https://mongoosejs.com/docs/queries.html) and [here (advanced)](https://mongoosejs.com/docs/api/query.html).  You can do some pretty sophisticated `.find()` queries using their query builder helper methods (like `.where()` or `.gte()` or `.limit()` or `.sort()`, etc).


# The MVC Architecture in Node.js with Express

## In a nutshell
![](https://media.prod.mdn.mozit.cloud/attachments/2016/12/06/14456/6a97461a03a5329243b994347c47f12b/MVC%20Express.png)
Picture source: [Mozilla Developer Network](https://developer.mozilla.org/en-US/)

> ## __You can read details on each component in the corresponding folder's markdown file.__

## Description

MVC - models are commonly used to build user interfaces. They are, however, if combined with web frameworks such as express, very useful to build fullstack applications as well. 

MVC divides an application into three separate parts that can call upon one another:

### [Models](https://github.com/EarthenLynx/express-mvc/blob/master/models/models.md)
> - Models describe data
> - Models offer methods to CRUD databases
> - Models usually contain validators to check for data integrity

### [Views](https://github.com/EarthenLynx/express-mvc/blob/master/views/views.md)
> - Views visually represent the model's data
> - Views accept input from a user and invoke functions
> - Views can be directly coupled to- or decoupled from an application

### [Controls](https://github.com/EarthenLynx/express-mvc/blob/master/controller/controllers.md)
> - Controllers execute actions
> - Controllers pick up requests from views and send responses back to it
> - Controllers call upon model's functionality

In Express, there are two more components that come in, which are not covered, but required, by the MVC model

### Routes
> - Routes pick up requests from the client
> - Routes compose the application's controllers
> - Routes pass on requests, sometimes based on a url parameter

### Database
> - Databases are the application's data-soruce
> - Databases define the data's structure. 
> - Depending on the db, this is done in combination with the model

# **Project-03: BurgerRator App**

A project by Ania Kubów,
Chris Beaney,
Zeeshan Goburdhun,
Camila Buenaventura Márquez

## Overview

This was a group project but by 4 developers in one week. The app involved building a website using React primarily for the frontend,  Express for the backed, and utilised two API’s (one of them being a geolocation mapping provider).  My role in the group project primarily involved implementing the two API’s, testing routes, building the ‘nominate new’ route, as well as the overall visual layout of the app itself.

Please view the end result here: https://burgerrator-app.herokuapp.com/

Please register for the full experience.

## Brief

* Full-Stack application.
* Uses an Express API to serve our data from a Mongo database.
* Consumes our API with a separate front-end built with React.
* Has multiple relationships and CRUD functionality.
* Has automated tests.
* Deploy your game online with Heroku, where the rest of the world can access it.

## Technologies Used

* HTML5
* CSS 3
* JavaScript (ES6)
* Express
* React
* Node.js
* Webpack (with CLI)
* Git and GitHub
* Babel
* Lodash
* Axios
* Bulma
* MongoDB
* Mongoose
* Mapbox API

## Approach Taken

First we set up GitHub for the project and assigned a GitHub Master. This was the first time I worked in a group this big so understanding the development branch and the master branch was important to us as a group. We did the first few merges as a team.

We also decided how to write our models for the burgers and Comments together so that everyone was onboard with the structure. Data collection for the burgers was also done together.

We then split out building a component each. We did this so that we would get to built the front end of the component, backend of the component, and test the component. We felt this apporach woudl give us a much more well rounded learning experience. 

We used dotenv to ensure our API keys was safe.


## Wins and Blockers

### Wins
We worked together as a team very well. There was no friction or arguments on the one week project. I feel this was because we white boarded out the solution as a team, used trello effectively for project management, and used GitHub correctly for merges.

### Blockers
There weren't any major blockers. We finished the project ahead of our expected time and even managed to start on some 'nice to have' features. This included adding the Beer Matcher API to go with your burger. 

## Featured Code 

### Featured piece of code no.1

```
const Comment = ({user, createdAt, content, handledelete, _id,    userRating}) => {
  return (
    <article className="media">
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{user.username}</strong>
            {' '}
            <small>{(new Date(createdAt)).toLocaleDateString()}</small>
            <hr className="linebreaker"/>
            {content}
          </p>
          <span className="title is-2 has-text-centered">
            <Rating
              emptySymbol= {<img src="https://i.imgur.com/931P2ih.png" className="image is-24x24"/>}
              fullSymbol= {<img src="https://i.imgur.com/f00MSST.png" className="image is-24x24"/>}
              fractions={2}
              initialRating={userRating}
              readonly
            />
          </span>
        </div>
      </div>
      {Auth.isCurrentUser(user) && <div className="media-right">
        <button id={_id} onClick={handledelete} className="delete"></button>
      </div>}
    </article>
  )
}

export default Comment
```
This piece of code allows the user to create a comment as well as a user rating for the burger they are commenting on. This user rating is then added to a global rating.

### Featured piece of code no.2

```
    const activeClass = (route) => {
      return this.props.location.pathname === route ? 'is-active' : null
    }
    
```
This piece of code allows us to change a tab to not be active if the pathname of the page we are on is not the same.

## Visuals


![Imgur](https://i.imgur.com/FoYsEv9.png)

![Imgur](https://i.imgur.com/oJxA4zo.png)

![Imgur](https://i.imgur.com/gt2RbzE.png)



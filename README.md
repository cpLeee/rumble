## What's Rumble? 

Rumble is a networking application that allows for the sharing of knowledge and connection building based off of profession and skills. 

## Rumble

Rumble: An app built on Reactjs and Ruby on Rails by Leah Chen. 
Rumble Live: Tentative 
Github Repo: https://github.com/cpLeee/rumble.git
## Project Description

This full-stack project allows those who are switching careers to seek guidance from mentors who have a similar background or the same career goal as mentees. Through this platform, I aim to create a community of skill sharing and networking- to allow those who are lost to gain guidance. 

## Functionality and Features 

My application facilitates a connection between mentor and mentee. This is accomplished through the following features: 

- Users(mentee) is able to sign up for a password-protected account that gives them access to the different mentors that are on the platform. 
- Once logged in, users are able to view, match and favorite mentors who have similar backgrounds and professions. 
- Users are able to edit their profile changing their city, profession and background. 
- Users can view their favorited mentors on their likes page. 
- Users can view on a map where the different mentors are located through Mapbox. 

## Screenshots 
### Landing Page 
![alt tag](https://cdn-images-1.medium.com/max/1600/1*remo8XMGNKNbWk2Jt7tHvg.png "Landing Page")
### Sign Up Page 

### Login Page 

### Swipe Page 

### Likes Page 

### Map Page 

### Profile Page 

## Tech Stack 
- JavaScript 
- Reactjs 
- Ruby on Rails
- Postgresql
- MapBox
- HTML/ Custom CSS
- Material UI

## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm
- Heroku CLI
- Postgresql

See Environment Setup below for instructions on installing these tools if you
don't already have them.

## Installation

Run:

```sh
bundle install
npm install --prefix client
```

You can use the following commands to run the application:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)

## Environment Setup
### Install the Latest Ruby Version

Verify which version of Ruby you're running by entering this in the terminal:

```sh
ruby -v
```

Make sure that the Ruby version you're running is listed in the [supported
runtimes][] by Heroku. At the time of writing, supported versions are 2.6.8,
2.7.4, or 3.0.2. Our recommendation is 2.7.4, but make sure to check the site
for the latest supported versions.

If it's not, you can use `rvm` to install a newer version of Ruby:

```sh
rvm install 2.7.4 --default
```

You should also install the latest versions of `bundler` and `rails`:

```sh
gem install bundler
gem install rails
```

### Install NodeJS

Verify you are running a recent version of Node with:

```sh
node -v
```

If your Node version is not 16.x.x, install it and set it as the current and
default version with:

```sh
nvm install 16
nvm use 16
nvm alias default 16
```

You can also update your npm version with:

```sh
npm i -g npm
```
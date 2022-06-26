# ATN Toys
## Description
A Nodejs + Express + MongoDB website for manage (CRUD) products of an imaginary toy company called ATN. This is a part of my assignment in Cloud Computing while studying at Greenwich University.

## Functions
The current functions of this website is CRUD toy product list. In details, the website shows the list of the company's available products. Users then can add a new product and update or delete the old ones. More functions will be implemented if I have free time.

## Cloud Deployment
This repository has been deployed on Heroku [here](https://locr-atn.herokuapp.com/). Feel free to try some of the CRUD functions (but please don't mess with the database too much).

## Download and run locally
To download and run this project locally, follow these steps:
1. Clone this project to your local with `git clone git@github.com:huynhloc-1110/locr-atn.git`
2. Install additional modules by running `npm install` at the project's root folder
3. Create `config.env` file at the root folder with these variables:
  - PORT = \<any ports you want, example: '3000'\>
  - MONGO_URI = \<your mongodb connection string\>
  - ROOT = http://localhost:<the above PORT\>
4. Run `npm start` at the root folder

## Reference
This project follows the guide [here](https://www.youtube.com/watch?v=W1Kttu53qTg) with adjustments to adapt to the dependencies' new versions and to better fit the ATN scenario.

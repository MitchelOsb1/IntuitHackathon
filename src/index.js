import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import * as serviceWorker from './serviceWorker.js';

ReactDOM.render(<App />, document.getElementById('root'))

// const http = require('http');
// const path = require('path');
// const config = require('./config.js')
// const request = require('unirest');
// const grantUrl = "https://rest.tsheets.com/api/v1/grant"
// const userUrl = "https://rest.tsheets.com/api/v1/users"
// const token = config.token;
// const client_id = config.uid;
// const client_secret = config.secret;

// var Request = request.post(grantUrl)
// console.log(Request);
//  Request.headers({
//         'Accept': 'application/json'
//     })
//     .type('json')
//     .send(token)
//     .auth({
//         user: client_id,
//         pass: client_secret,
//         sendImmediately: true,
//         Bearer: token
//     })
//     .end(function(response) {
//         if (200 == response.statusCode)
//             console.log('Authenticated Successfully');
//     });
// var users = []
// request.get(userUrl).headers({
//     'Authorization': `Bearer ${token}`
// })
// .type('json')
// .end((req, res) => {
//     console.log(req.body.results);
//     users.push(req.body.results)
// })
// users.foreach((name) => {
//     console.log(name.first_name);
// })
// console.log(users);

serviceWorker.unregister();

var express = require('express');
var bodyParser = require('body-parser');
const request = require('request');

/* deployment */
var HTTP = require('http');
var HTTPS = require('https');
var fs = require('fs');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('./public'))

/* -=-=-=-=-=-=-=-=-=-=-=-=-=- */
/* map search tool variables */

/* allows api keys to be hidden & accesses the api key */
const dotenv = require('dotenv').config();
const key = process.env.key1


/* routes */
// changes daily to that location
app.get('/', function(req,res) {
  res.sendFile('./public/html/index.html', {root:'./'})
})

app.get('/europeanExpedition', function(req,res) {
  res.sendFile('./public/html/euroExpoIndex.html', {root:'./'})
})

app.get('/gear', function(req,res) {
  res.sendFile('./public/html/gear.html', {root:'./'})
})

app.get('/otherSites', function(req,res) {
  res.sendFile('./public/html/otherSites.html', {root:'./'})
})

app.get('/about', function(req,res) {
  res.sendFile('./public/html/about.html', {root:'./'})
})

app.get('/socialMedia', function(req,res) {
  res.sendFile('./public/html/socialmedia.html', {root:'./'})
})

app.get('/theskippyproject', function(req,res) {
  res.redirect('http://btfranzen.com/#/theskippyproject')
})

app.get('/oslo', function(req,res) {
  res.sendFile('./public/html/oslo.html', {root:'./'})
})

app.get('/stockholm', function(req,res) {
  res.sendFile('./public/html/stockholm.html', {root:'./'})
})

app.get('/copenhagen', function(req,res) {
  res.sendFile('./public/html/copenhagen.html', {root:'./'})
})

app.get('/munich', function(req,res) {
  res.sendFile('./public/html/munich.html', {root:'./'})
})

app.get('/innsbruck', function(req,res) {
  res.sendFile('./public/html/innsbruck.html', {root:'./'})
})

app.get('/verona', function(req,res) {
  res.sendFile('./public/html/verona.html', {root:'./'})
})

app.get('/florence', function(req,res) {
  res.sendFile('./public/html/florence.html', {root:'./'})
})

app.get('/rome', function(req,res) {
  res.sendFile('./public/html/rome.html', {root:'./'})
})

app.get('/vatican', function(req,res) {
  res.sendFile('./public/html/vatican.html', {root:'./'})
})

app.get('/amsterdam', function(req,res) {
  res.sendFile('./public/html/amsterdam.html', {root:'./'})
})

app.get('/brussels', function(req,res) {
  res.sendFile('./public/html/brussels.html', {root:'./'})
})

app.get('/london', function(req,res) {
  res.sendFile('./public/html/london.html', {root:'./'})
})

app.get('/reykjavik', function(req,res) {
  res.sendFile('./public/html/reykjavik.html', {root:'./'})
})

app.get('/walkingMap', function(req,res) {
  res.sendFile('./public/html/walkingMap.html', {root:'./'})
})



/* -=-=-=-=-=-=-=-=-=-=-=-=-=- */
/* map search tool routes */

/* sends the index.html file from the '/' route */
app.get('/MapSearchTool', function(req, res) {
    res.sendFile('./public/html/mapTool_index.html', {root:'./'});
});

/* makes the api call to google maps */
app.post('/searchIt', function(req,res) {
    let totalUserRatings, ratings;

    /* builds the query string*/
    let query = req.body.toDo + ' ' + req.body.placeInput

    request({
        url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&rankby=prominence&key=${key}`
    },
    function(error, response, body) {
        if(error || (response.statusCode !== 200)) {
            console.log(`here's the error: `, error);
            console.log(`here's the status code: `, response.statusCode);
            res.send(`oops, something went wrong`)
        } else {
            let bod = JSON.parse(body)
            let top20 = Array.from(bod.results);

            /* sort by rating and total number of user ratings */
            for(let i=0 ; i<top20.length ; i++) {
                if(top20[i] === undefined) {
                    top20[i] = ' ';
                } else if (top20[i].open_now === undefined || top20[i].open_now === '') {
                    top20[i].open_now = 'N/A';
                } else if (top20[i].price_level === undefined || top20[i].price_level === '') {
                    top20[i].price_level = 'N/A';
                }

                /* sorts by the number of total user ratings */
                totalUserRatings = top20.sort((a,b) => b.user_ratings_total-a.user_ratings_total)

                /* sorts by the highest rating to return the highest and most rated in the search area */
                ratings =
                totalUserRatings.sort((a,b) => b.rating-a.rating)

                /* sorts by the cheapest rating. for personal travel research. */
                cheapest = ratings.sort((a,b) => a.price_level - b.price_level)
            }

            /* send the sorted top 20 locations to the front end */
            // res.send(ratings)

            /* adding cheapest for the cheapest, highest, and most rated bar in any area. for personal travel research. */
            res.send(cheapest)
        }
    });
})


/* accesses the api key */
app.post('/getIt', function(req, res) {
    res.send({key:key})
});






/* -=-=-=-=-=-=-=-=-=-=-=-=-=- */

app.use(function(req,res,next) {
  res.status(404)
  res.send(`that's a 404 error, yo.`)
})

/* deployment route code */
try {
  var httpsConfig = {
    key: fs.readFileSync('/etc/letsencrypt/live/40northography.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/40northography.com/cert.pem'),
  }

  var httpsServer = HTTPS.createServer(httpsConfig, app)
  httpsServer.listen(443)

  var httpApp = express()
  httpApp.use(function(req,res,next) {
    res.redirect('https://40northography.com' + req.url)
  })
  httpApp.listen(80)
}
catch(e) {
  console.log(e)
  console.log('could not start HTTPS server')
  var httpServer = HTTP.createServer(app)
  httpServer.listen(80)
  // httpServer.listen(8080)
}

/* development route code */
// app.listen(8080, function() {
//   console.log('running on 8080')
// })

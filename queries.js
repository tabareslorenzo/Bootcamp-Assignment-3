/* Fill out these functions using Mongoose queries*/
var Listing = require('./ListingSchema'),
mongoose = require('mongoose');
mongoose.connect('mongodb://tabareslorenzo:4104004557@ds123534.mlab.com:23534/ltdatabase');

var findLibraryWest = function() {
  Listing.find({ name: 'Library West' }, function(err, user) {
  if (err) throw err;

 /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  

    console.log(user);
	});
};

var removeCable = function() {
  
  Listing.findOneAndRemove({ code: 'CABL' }, function(err) {
  if (err) throw err;

  console.log('Course viewed only on cable TV');
});
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
};
var updatePhelpsLab = function() {
  
  Listing.findOneAndUpdate({ code: 'PHL' }, { address: '1275 Center Drive Sciences Bldg J383' }, function(err, listings) {
  if (err) throw err;

  // we have the updated user returned to us
  console.log(listings);
});
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
};
var retrieveAllListings = function() {
  
  Listing.find({}, function(err, users) {
  if (err) throw err;

  // object of all the users
  console.log(users);
});
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();

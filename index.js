var panas = require ("panas");
var koa = require ("koa");

module.exports = function(options){

  var options = {
    root : __dirname + "/endpoints",
    db : "mongodb://localhost/test",
    driver : require ("mongoose")
  }
  
  return koa().use (panas.api(options).burn());
}

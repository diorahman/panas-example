var options = {
  root : __dirname + "/endpoints",
  db : "mongodb://localhost/test",
  driver : require ("mongoose")
}

koa()(require ("./")(options).listen(3000);
console.log ("running, 3000");

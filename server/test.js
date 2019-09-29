var models = require('./server').models;

/*
var toSave = [
  {name: "renal", email: "renal8250@gmail.com"},
  {name: "renal1", email: "renal8251@gmail.com"},
  {name: "renal2", email: "renal8252@gmail.com"},
  {name: "renal3", email: "renal8253@gmail.com"},
  {name: "renal4", email: "renal8254@gmail.com"},
  {name: "renal5", email: "renal8255@gmail.com"},
  {name: "renal6", email: "renal8256@gmail.com"},
  {name: "renal7", email: "renal8257@gmail.com"},
  {name: "renal8", email: "renal8258@gmail.com"}
];

toSave.map(obj => {
  models.Profile.create(obj, (err, created) => {
    console.log("Created", created);
  });
});
*/


var filter = {
  where: {
    email: {like:'renal'}
  },
  order: 'id ASC',
  limit: 10,
  skip: 0,
  fields: {
      email: true
  }
}

models.Profile.findById("5d8fd0be0954ad1c87aef4f5", {include: 'Posts'},(err, found) => {
  console.log("Found?", err, found);
  Profile.Posts.destroyAll({date: {lte: new Date('2019-09-29')}})
});


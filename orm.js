var Sequelize = require('sequelize');
//var sequelize = new Sequelize('posgtres', 'postgres', 'postgres');

var sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/postgres', {
  // Look to the next section for possible options
})
console.log('strat');
var User = sequelize.define('emp', {
  id: {type: Sequelize.INTEGER,primaryKey: true},
  name: Sequelize.STRING
},
{
  freezeTableName: true
}
);

//INSERT
sequelize.sync().then(function() {
  return User.create({
    id: 171,
    name: 'test'
  });
}).then(function(jane) {
  console.log(jane.get({
    plain: true
  }));
});

//Select 
User.findOne({ where: {name: 'test'} }).then(function(project) {
  console.log("fetched record : "+project.id+"============"+project.name);
});
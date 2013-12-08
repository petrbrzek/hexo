var less = require('less');
var path = require('path');

module.exports = function(data, options, callback){
  var parser = new(less.Parser)({
    paths: path.dirname(data.path),
    filename: path.basename(data.path)
  });

  parser.parse(data.text, function(err, tree){
    if (err) return callback(err);
    callback(null, tree.toCSS({ compress: true }));
  });
};

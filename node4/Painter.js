var mongoose = require('mongoose');
Schema = mongoose.Schema;
var PainterSchema = new Schema({
    name: String,
    birthy: Number,
    deathy: Number,
    style: String,
    notes: {type: String, default: "Some default style info"}
});

mongoose.model('Painter', PainterSchema);
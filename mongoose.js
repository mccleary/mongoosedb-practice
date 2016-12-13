var mongoose = require('mongoose');
var bluebird = require('bluebird');
mongoose.Promise = bluebird;

mongoose.connect('mongodb://localhost/proglangs');

const Language = mongoose.model('Language', {
  name: String,
  website: String,
  dateFirstAppeared: Date,
  currentReleaseDate: Date,
  inventors: [{
    name: String,
    website: String
  }],
  paradigms: [String],
  typingDiscipline: [String],
  influencedBy: [String]
});
//
//
// // Mongoose schema model for album
const. Album = mongoose.model('Album', {
    name: String,
    artist: String,
    released: Date,
    tracks: [{
        name: String,
        songWriters: [String],
        duration: Number
      }],
    personnel: [{
        name: String,
        instrument: String
      }]
  });



// Basic CRUD (Create, Retrieve, Update, Delete)
var ruby = new Language({
  name: 'Ruby',
  website: 'www.ruby-lang.org/en/',
  dateFirstAppeared: 1995,
  currentReleaseDate: new Date('2016-11-02'),
  inventors: [{
    name: 'Yukihiro Matsumoto',
    website: 'en.wikipedia.org/wiki/Yukihiro_Matsumoto'
  }],
  paradigms: ['object-oriented', 'imperative', 'functional', 'reflective'],
  typingDiscipline: ['duck', 'dynamic', 'strong'],
  influencedBy: ['Ada', 'C++', 'CLU', 'Dylan', 'Eiffel', 'Lua', 'Lisp', 'Perl', 'Python', 'Smalltalk']
});
ruby.save();


// find all programming languages in collection above #2
Language.find()
  .then(function(docs) {
    console.log('Results', docs);
  });

  // find all programming languages by name #3
Language.findOne({ name: 'Ruby' })
  .then(function(doc) {
    console.log('Results', doc);
  });

// #4
Language.update(
  { name: 'Ruby'},
  {
    $set: {
      website: 'https://ruby-lang.org/en/'
    }
  }
);


//#5
Language.findOne({ name: 'Ruby' })
.then(function(ObjectId) {
  console.log('Results', ObjectId);
});


// Validation
const Language = mongoose.model('Language', {
  name: { type: String, required: true },
  website: String,
  dateFirstAppeared: {type: Date, required: true },
  currentReleaseDate: Date,
  inventors: { type: [{
    name: { type: String, required: true,  },
    website: String
  }], required: true},
  paradigms: [String],
  typingDiscipline: [String],
  influencedBy: [String]
});

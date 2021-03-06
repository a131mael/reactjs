var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var SearchForm = React.createClass({

  onSubmit(event) {
    event.preventDefault();
    var movie = {
      title: this.refs.title.value.trim()
    }
    AppActions.searchMovies(movie);
  },

  render() {
    return (
      <div className="search-form">
        <h1 className="text-center">Search for a Movie</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" ref="title" placeholder="Enter the Movie title..." />
          </div>
          <button className="btn btn-primary btn-block">Search Movies</button>
        </form>
      </div>
    )
  }
});

module.exports = SearchForm;

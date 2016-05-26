import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';
import Search from './github/Search.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'dionatanaraujo',
      userData: [],
      userRepos: [],
      perPage: 5
    }
  }

  // Get user data from github
  getUserData(){
    $.ajax({
      url: "https://api.github.com/users/" + this.state.username + "?clientId=" + this.props.clientId + "&clientSecret=" + this.props.clientSecret,
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({userData: data});
      }.bind(this),
      error: function(xhr, status, err){
        this.setState({username: null});
      }.bind(this)
    });
  }

  // Get user repos from github
  getUserRepos(){
    $.ajax({
      url: "https://api.github.com/users/" + this.state.username + "/repos?per_page" + this.state.perPage + "&clientId=" + this.props.clientId + "&clientSecret=" + this.props.clientSecret + "&sort=created",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({userRepos: data});
      }.bind(this),
      error: function(xhr, status, err){
        this.setState({userRepos: null});
      }.bind(this)
    });
  }

  handleOnSearch(username){
    this.setState({username: username}, function(){
      this.getUserData();
      this.getUserRepos();
    });
  }

  componentDidMount() {
      this.getUserData();
      this.getUserRepos();
  }

  render() {
    return (
      <div>
          <Search onSearch={this.handleOnSearch.bind(this)}/>
          <Profile {...this.state} />
      </div>
    )
  }
}

App.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
}

App.defaultProps = {
  clientId: '44bbfbf6018c46dc4fa0',
  clientSecret: '16d204dae569a265be94f656aee70d9888034c9b'
}

export default App;

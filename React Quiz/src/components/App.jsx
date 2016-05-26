import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';
import Scorebox from './quiz/Scorebox.jsx';
import Results from './quiz/Results.jsx';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: 'Whats is your name?',
          choices: [
            {
              id: 'a',
              text: 'Michael'
            },
            {
              id: 'b',
              text: 'John'
            },
            {
              id: 'c',
              text: 'Dionatan'
            }
          ],
          correct: 'c'
        },
        {
          id: 2,
          text: 'Whats is your mothers name?',
          choices: [
            {
              id: 'a',
              text: 'Sue'
            },
            {
              id: 'b',
              text: 'Donna'
            },
            {
              id: 'c',
              text: 'Nick'
            }
          ],
          correct: 'c'
        },
        {
          id: 3,
          text: 'Whats is your fathers name?',
          choices: [
            {
              id: 'a',
              text: 'Til'
            },
            {
              id: 'b',
              text: 'Foo'
            },
            {
              id: 'c',
              text: 'Bar'
            }
          ],
          correct: 'b'
        },
        {
          id: 4,
          text: 'Whats is your friends name?',
          choices: [
            {
              id: 'a',
              text: 'Foo'
            },
            {
              id: 'b',
              text: 'Kenny'
            },
            {
              id: 'c',
              text: 'Wiz'
            }
          ],
          correct: 'a'
        }
      ],
      score: 0,
      current: 1
    }
  }

  setCurrent(current) {
    this.setState({
      current
    });
  }

  setScore(score) {
    this.setState({
      score
    });
  }

  render() {
      if(this.state.current > this.state.questions.length){
        var scorebox = '';
        var results = <Results {...this.state} />;
      }else{
        var scorebox = <Scorebox {...this.state} />;
        var results = '';
      }

      return (
      <div>
        {scorebox}
        <QuestionList {...this.state} setScore={this.setScore.bind(this)} setCurrent={this.setCurrent.bind(this)} />
        {results}
      </div>
    )
  }
}

export default App

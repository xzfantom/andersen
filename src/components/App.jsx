import React from 'react';
import './App.css';
import QuestionForm from './QuestionForm';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Создание анкеты</h1>
        </header>
        <QuestionForm />
      </div>
    );
  }
}

export default App;

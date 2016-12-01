var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: "Walk the dog"
        },
        {
          id:2,
          text: "Clean the yard"
        },
        {
          id:3,
          text: "Build a dog house"
        },
        {
          id:4,
          text: "Wash the car"
        },
        {
          id:5,
          text: "Play video games"
        },
        {
          id:6,
          text: "Buy a dog"
        }
      ]
    };
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos} />
      </div>
    )
  }
});

module.exports = TodoApp;

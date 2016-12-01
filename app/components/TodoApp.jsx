var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
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
  handleAddTodo: function (text) {
    alert('new text' + text);
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    )
  }
});

module.exports = TodoApp;

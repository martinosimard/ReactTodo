var React = require('react');

var AddTodo = React.createClass({
  onSubmit : function (e) {
      e.preventDefault();
      var newTodo = this.refs.todo.value;
      this.refs.todo.value = '';

      if (newTodo.length > 0) {
        this.props.onAddTodo(newTodo);
      } else {
        this.refs.todo.focus();
      }
  },
  render : function () {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.onSubmit}>
          <input type="text" ref="todo" placeholder="What do you need to do?" />
          <button className="button expanded">Add to do</button>
        </form>
    </div>
    )
  }
});

module.exports = AddTodo;

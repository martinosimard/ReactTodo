var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {

  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'value'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('addTodoReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'Something to do',
          completed: false,
          createdAt: 213654
        }
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });
  });

  it('should add existing Todos', () => {
    var todos = [{
      id: 1,
      text: 'text 1',
      completed: false,
      completedAt: undefined,
      createdAt: 33000
    }];

    var action = {
      type: 'ADD_TODOS',
      todos
    };
    var res = reducers.todosReducer(df([]), df(action));

    expect(res.length).toEqual(1);
    expect(res[0]).toEqual(todos[0]);
  });

  describe('toggleTodoReducer', () => {
    it('should update Todo', () => {
      var updates = {
        completed: false,
        completedAt: null
      };

      var todos = [{
          id: 11,
          text: "Test todo",
          completed: true,
          completedAt: 123
        }];

      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };

      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });
  });

});

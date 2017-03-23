const { createStore, applyMiddleware } = require('redux');


const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('state after action', store.getState())
  return result
}

const defaultState = {
  topics: [
    {
      name: 'Learning Data Structure',
      topic: 'Computer',
    },
    {
      name: 'Learning RxJS',
      topic: 'Reactive Javascript Programing',
    },
    {
      name: 'Redux',
      topic: 'Angular',
    }
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TOPIC':
      return Object.assign({}, state, {
        topics: [...state.topics, action.topic]
      });
    default:
      return state;
  }
}

const store = createStore(reducer, defaultState, applyMiddleware(logger));


function addView(viewFunc) {
  viewFunc(store.getState());

  store.subscribe(() => {
    viewFunc(store.getState());
  })
}

addView((state) => {
  console.log(`There are ${state.topics.length} topics in the library`);
});

addView((state) => {
  console.log(`The latest topic in the library: ${state.topics[state.topic.length -1].name}`);
});


store.dispatch({
  type: 'ADD_TOPIC',
  course: {
    name: 'This is the new topic',
    topic: 'Really does not matter'
  }
});
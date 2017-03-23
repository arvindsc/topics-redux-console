const {
  createStore
} = require('redux');


const defaultState = {
  topics: [{
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
      })

    default:
      return state;
  }
  return state;
}

const store = createStore(reducer, defaultState);

function addView(viewFunc) {
  viewFunc(defaultState);
  store.subscribe(() => {
    viewFunc(store.getState());
  })
}

addView((state) => {
  console.log(`There are ${state.topics.length} topics in the library`);
});

addView((state) => {
  console.log(`The latest topic in the library: ${state.topics[state.topics.length -1].name}`);
});
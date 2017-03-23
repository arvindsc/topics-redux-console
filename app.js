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

function addView(viewFunc) {
  viewFunc(defaultState);
}

addView((state) => {
  console.log(`There are ${state.topics.length} courses in the library`);
});

addView((state) => {
  console.log(`The latest course in the library: ${state.topics[state.topics.length -1].name}`);
});





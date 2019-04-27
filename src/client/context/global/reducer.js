const cases = {
  INCREMENT_COUNTER: state => console.log('called') || ({
    count: state.count + 1,
  }),
};

const reducer = (state, action) => {
  return cases[action.type](state);
};

export default reducer;

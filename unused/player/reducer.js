const initialState = {
  position: [0, 0],
  spriteLocation: '0px 0px',
  walkIndex: 0,
  direction: 'EAST',
};

const playerReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'MOVE_PLAYER':
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};

export default playerReducer;

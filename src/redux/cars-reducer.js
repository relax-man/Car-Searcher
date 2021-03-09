const SET_CARS = 'SET-CARS';

const initialState = {
  cars: []
};

function carsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CARS:
      return {
        ...state,
        cars: action.cars
      };
    default:
      return state;
  }
}

export const setCars = (cars) => ({ type: SET_CARS, cars });

export default carsReducer;

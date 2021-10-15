export const initialState = {
  api_host: "https://postpaddy.com/api",
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

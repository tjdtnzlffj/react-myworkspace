const initialState = [];

const contact = (state = initialState, action) => {
  switch (action.type) {
    case "ENTRY_CONTACT_SUCCEEDED":
      return [{ ...action.payload }, ...state];
    case "REMOVE_CONTACT_SUCCEEDED":
      return state.filter((member) => member.id !== action.payload);
    case "MODIFY_CONTACT_SUCCEEDED":
      return state.map((member) =>
        member.id === action.payload.id ? { ...action.payload } : member
      );
    default:
      return state;
  }
};

export default contact;

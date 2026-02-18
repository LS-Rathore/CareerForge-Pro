import { createContext, useReducer, useContext } from "react";

const ResumeContext = createContext();

const initialState = {
  personalInfo: {
    fullName: "",
    email: "",
    phone: "",
    linkedin: ""
  },
  education: [],
  experience: [],
  skills: [],
  atsScore: 0
};

function resumeReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        personalInfo: {
          ...state.personalInfo,
          [action.field]: action.value
        }
      };
    case "SET_RESUME":
      return action.payload;
    default:
      return state;
  }
}

export function ResumeProvider({ children }) {
  const [state, dispatch] = useReducer(resumeReducer, initialState);

  return (
    <ResumeContext.Provider value={{ state, dispatch }}>
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  return useContext(ResumeContext);
}

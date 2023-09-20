import { createContext, useReducer } from "react";

const initialState = {
    currentQuestionIndex: 0,
    question: [],
  };
  
  const reducer = (state , action) => {
    if (action.type === "Next_Question") {
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };
    }
    return state;
  };

export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
    // The value down there is an array of two object => [state, dispatch]
    const value = useReducer(reducer, initialState)
    console.log("state", value)
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
};


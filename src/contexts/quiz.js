import { createContext, useReducer } from "react";
import questions from "../data";

const initialState = {
    currentQuestionIndex: 0,
    // shorten for: questions = questions
    questions,
    showResults: false,
  };
  
  const reducer = (state , action) => {
    if (action.type === "Next_Question") {
      const showResults = state.currentQuestionIndex === state.questions.length - 1;
      const currentQuestionIndex = showResults
      ? state.currentQuestionIndex
      : state.currentQuestionIndex + 1;
      return {
        ...state,
        currentQuestionIndex,
        showResults,
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


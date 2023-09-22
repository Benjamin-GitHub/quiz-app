import { useContext } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log("quizState", quizState);
 
  // const [currentQuestionIndex, setCurrentQuestion] = useState(0);
  // console.log("currentQuestionIndex", currentQuestionIndex);

  return (
    <div className="quiz">
      <div>
        <div className="score">Question {quizState.currentQuestionIndex + 1} / {quizState.questions.length}</div>
        <Question />
        <div className="next-button" onClick={() => dispatch({type: "Next_Question"})}>Next question</div>
      </div>
    </div>
  );
};

export default Quiz;

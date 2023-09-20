import Answer from "./Answer";

const Question = ({questions}) => {
    return (
        <div>
            <div className="question">Question</div>
            <div className="answers">
                <Answer />
                <Answer />
                <Answer />
                <Answer />
            </div>
        </div>
    )
}

export default Question;
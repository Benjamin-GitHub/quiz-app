export const shuffleAnswers = question => {
    const unshuffledAnswers = [
        question.correctAnswers,
        ...question.incorrectAnswers
    ];
    // console.log("unshuffledAnswers", unshuffledAnswers);

    return unshuffledAnswers.map(unshuffledAnswer => ({
        sort : Math.random(),
        value: unshuffledAnswer,
    })).sort((a, b) => a.sort - b.sort).map(a => a.value);
}
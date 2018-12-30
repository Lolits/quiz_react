import fetch from 'cross-fetch';

export const QUESTION_ANSWER = 'QUESTION_ANSWER';
export const CHANGE_QUESTION = 'CHANGE_QUESTION';
export const SUBMIT = 'SUBMIT';
export const RESET = 'RESET';
export const CHANGE_TIMER = 'CHANGE_TIMER';
export const FETCHING = 'FETCHING';
export const WARN_ERROR = 'WARN_ERROR';
export const INIT_QUESTIONS = 'INIT_QUESTIONS';

export function questionAnswer(index, answer) {
    return {
        type: QUESTION_ANSWER,
        payload: {
            index,
            answer
        }
    };
}
export function changeQuestion(index) {
    return {
        type: CHANGE_QUESTION,
        payload: {
            index
        }
    };
}
export function submit(questions) {
    return {
        type: SUBMIT,
        payload: {
            questions
        }
    };
}
export function reset() {
    return {
        type: RESET
    };
}
export function changeTimer() {
    return {
        type: CHANGE_TIMER
    };
}
export function fetching(bool) {
    return {
        type: FETCHING,
        payload: {
            bool
        }
    };
} export function warnError() {
    return {
        type: WARN_ERROR
    };
}
export function initQuestions(questions) {
    return {
        type: INIT_QUESTIONS,
        payload: {
            questions
        }
    };
}
export function fetchQuestions() {
    return function (dispatch) {
        dispatch(fetching(true));
        return fetch(`https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=d3e5e5a4ec9013e436a2`)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(fetching(false));
                return response;
            })
            .then((response) => response.json())
            .then((questions) => dispatch(initQuestions(questions)))
            .catch(() => dispatch(warnError()));
    };
}
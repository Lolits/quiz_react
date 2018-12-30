import { combineReducers } from 'redux';
import { QUESTION_ANSWER } from './actions'
import { CHANGE_QUESTION } from './actions'
import { SUBMIT } from './actions'
import { RESET } from './actions'
import { CHANGE_TIMER } from './actions'
import { FETCHING } from './actions'
import { WARN_ERROR } from './actions'
import { INIT_QUESTIONS } from './actions'

function score(state = 0, action = {}) {
    switch (action.type) {
        case SUBMIT:
            let result = 0;
            action.payload.questions.map((question) => {
                if (question.answer === question.userAnswer)
                    result += 1;
            })
            return state = result;
        case RESET:
            return state = 0;
        default:
            return state;
    }
}
function finished(state = false, action = {}) {
    switch (action.type) {
        case SUBMIT:
            return state = true;
        case RESET:
            return state = false;
        default:
            return state;
    }
}
function currentQuestion(state = 0, action = {}) {
    switch (action.type) {
        case CHANGE_QUESTION:
            return state = action.payload.index;
        case RESET:
            return state = 0;
        default:
            return state;
    }
}
function resetting(state = false, action = {}) {
    switch (action.type) {
        case RESET:
            return state = true;
        case FETCHING:
            return state = false;
        default:
            return state;
    }
}
function timer(state = 0, action = {}) {
    switch (action.type) {
        case CHANGE_TIMER:
            return state = state - 1;
        case RESET:
            return state = 120;
        default:
            return state;
    }
}
function isFetching(state = false, action = {}) {
    switch (action.type) {
        case FETCHING:
            return state = action.payload.bool;
        case RESET:
            return state = false;
        default:
            return state;
    }
}
function errorFetching(state = false, action = {}) {
    switch (action.type) {
        case WARN_ERROR:
            return state = true;
        case RESET:
            return state = false;
        default:
            return state;
    }
}
function questions(state = [], action = {}) {
    switch (action.type) {
        case QUESTION_ANSWER:
            return state.map((question, i) => {
                return {
                    ...question,
                    userAnswer: action.payload.index === i ?
                        action.payload.answer : question.userAnswer
                }
            })
        case INIT_QUESTIONS:
            return state = action.payload.questions;
        default:
            return state;
    }
}
const GlobalState = (combineReducers({
    score,
    finished,
    currentQuestion,
    resetting,
    timer,
    isFetching,
    errorFetching,
    questions
}));

export default GlobalState;
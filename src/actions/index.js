import { RESERVATION_CONFIRMED, DATA_LOADED, ADD_MESSAGE, DATA_ERROR, COST_CALCULATED, CONFIRM, GO_BACK, FORM_CHANGE } from '../constants/actionTypes';

export function confirmReservation(payload) {
    //
    return function (dispatch) {
        let config = {
            headers: {
                "Content-Type": "application/json",
                "secret-key": "$2b$10$xeiGPBQ5sUgdrQ9qLI1x8O5R0GhNgvIDNVuTv/eezFGmyRFvaBKDu"
            },
        };
        return fetch("https://api.jsonbin.io/b/5f17413091806166284639af", config)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: RESERVATION_CONFIRMED, payload: json });
            }).catch(err => {
                dispatch({ type: DATA_ERROR, payload: err });
            });
    };
}

export function addMessage(payload) {
    return {
        type: ADD_MESSAGE,
        payload
    }
}

export function goToConfirm() {
    return {
        type: CONFIRM,
    }
}

export function goBack() {
    return {
        type: GO_BACK
    }
}

export function getListing() {
    return function (dispatch) {
        let config = {
            headers: {
                "Content-Type": "application/json",
                "secret-key": "$2b$10$xeiGPBQ5sUgdrQ9qLI1x8O5R0GhNgvIDNVuTv/eezFGmyRFvaBKDu"
            },
        };
        return fetch("https://api.jsonbin.io/b/5f16fdb3c58dc34bf5d7e091", config)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: DATA_LOADED, payload: json });
            }).catch(err => {
                dispatch({ type: DATA_ERROR, payload: err });
            });
    };
}

export function changeFormInputs(payload) {
    return {
        type: FORM_CHANGE,
        payload
    }
}

export function calculateReservationCost() {
    return function (dispatch) {
        let config = {
            headers: {
                "Content-Type": "application/json",
                "secret-key": "$2b$10$xeiGPBQ5sUgdrQ9qLI1x8O5R0GhNgvIDNVuTv/eezFGmyRFvaBKDu"
            },
        };
        return fetch("https://api.jsonbin.io/b/5f1732a9c1edc466175b9a58", config)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: COST_CALCULATED, payload: json });
            }).catch(err => {
                dispatch({ type: DATA_ERROR, payload: err });
            });
    };
}
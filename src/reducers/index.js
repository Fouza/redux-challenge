import { RESERVATION_CONFIRMED, DATA_LOADED, DATA_ERROR, ADD_MESSAGE, COST_CALCULATED, CONFIRM, GO_BACK, FORM_CHANGE } from '../constants/actionTypes';

const initialState = {
    listingInfo: {},
    message: '',
    formInputs: {
        checkIn: '',
        checkOut: '',
        guests: '',
        children: '',
        pets: false,
    },
    reservationCost: {
        "nights_count": 0,
        "nights_cost": 0,
        "discount": 0,
        "cleaning_fee": 0,
        "total": 0
    },
    goToConfirmation: false,
    responseMessage: ''
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case RESERVATION_CONFIRMED:
            return Object.assign({}, state, {
                responseMessage: action.payload
            });

        case DATA_LOADED:
            return Object.assign({}, state, {
                listingInfo: action.payload
            });

        case DATA_ERROR:
            return Object.assign({}, state, {
                error: action.payload
            });

        case ADD_MESSAGE:
            return Object.assign({}, state, {
                message: action.payload
            });

        case COST_CALCULATED:
            return Object.assign({}, state, {
                reservationCost: action.payload
            })
        case CONFIRM:
            return Object.assign({}, state, {
                goToConfirmation: true
            })
        case GO_BACK:
            return Object.assign({}, state, {
                goToConfirmation: false
            })
        case FORM_CHANGE:
            console.log(action.payload)
            return Object.assign({}, state, {
                formInputs: action.payload
            })
        default:
            return state;
    };

}

export default rootReducer;
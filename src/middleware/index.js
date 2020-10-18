import { CONFIRM_RESERVATION } from '../constants/actionTypes';


function reservationFormMiddleware({ dispatch }) {
    return function (next) {
        return function (action) {

            return next(action)
        }
    }
}

export default reservationFormMiddleware;
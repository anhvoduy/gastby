import {
    GET_PRODUCT_LIST,
} from './const';

const INITIAL_STATE = {
    productList: {
        page: {},
        selectedPage: 1,
        data: []
    }
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
    case GET_PRODUCT_LIST: {
        return {
            ...state,
            productList: action.payload
        };
    }
    default:
        return state;
    }
}

import api from '../../api/api';
import { GET_PRODUCT_LIST } from './const';

export const getProductList = (pageIndex = 1, pageSize = 50) => async (dispatch, getState) => {
    dispatch({
        type: GET_PRODUCT_LIST,
        payload: []
    });
};

import axios from "axios";
import { apiurl } from '../Utils/baseurl';
import { GET_RESOURCE_TYPE } from '../Utils/constant';

export const getResourceType = () => async (dispatch) => {
    const response = await axios.get(apiurl + "/get_s_tbl_m_resource_type");
    return dispatch({ type: GET_RESOURCE_TYPE, payload: response.data.data });
};